// src/server/router/auth.ts

import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
import { PrismaClient } from '@prisma/client';
const nodemailer = require('nodemailer')
import { randomBytes } from 'crypto';
import { TRPCError } from '@trpc/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// export const authRouter = createTRPCRouter({
//   register: publicProcedure
//     .input(z.object({
//         username: z.string(),
//       email: z.string().email(),
//       password: z.string().min(6),
//     }))
//     .mutation(async ({ input }) => {
//       try {
//       const existingUser = await prisma.user.findUnique({
//         where: { email: input.email },
//       });

//       if (existingUser) {
//         throw new TRPCError({
//           code: 'CONFLICT',
//           message: 'User already exists',
//         });
//       }

//       const otpCode = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('');
//       const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

//       await prisma.user.create({
//         data: {
//           username: input.username,
//           email: input.email,
//           password: input.password, // Hash passwords in a real app
//           otp: {
//             create: {
//               code: otpCode,
//               expiresAt,
//             },
//           },
//         },
//       });

//       await transporter.sendMail({
//         from: process.env.EMAIL_USER,
//         to: input.email,
//         subject: 'Your OTP Code',
//         text: `Your OTP code is ${otpCode}`,
//       });

//       return {
//         success: true,
//         message: 'User registered successfully, OTP sent to email',
//       };
//     } catch (error) {
//       // Handle unexpected errors
//       if (error instanceof TRPCError) {
//         throw error;
//       } else {
//         throw new TRPCError({
//           code: 'INTERNAL_SERVER_ERROR',
//           message: 'An error occurred during registration',
//         });
//       }
//     }
//     }),

//     // verify otp api
//   verifyOtp: publicProcedure
//     .input(z.object({
//       email: z.string().email(),
//       otp: z.string().length(8),
//     }))
//     .mutation(async ({ input }) => {
//       try {
//         const user = await prisma.user.findUnique({
//           where: { email: input.email },
//         });
  
//         if (!user) {
//           throw new TRPCError({
//             code: 'NOT_FOUND',
//             message: 'User not found',
//           });
//         }
  
//         if (!user.otp || user.otp.code !== input.otp) {
//           throw new TRPCError({
//             code: 'UNAUTHORIZED',
//             message: 'Invalid OTP',
//           });
//         }
  
//         if (new Date() > user.otp.expiresAt) {
//           throw new TRPCError({
//             code: 'UNAUTHORIZED',
//             message: 'OTP has expired',
//           });
//         }
  
//         // Assuming you set `isVerified` to true upon successful verification
//         await prisma.user.update({
//           where: { email: input.email },
//           data: { isVerified: true },
//         });
  
//         return { success: true, message: 'OTP verified successfully' };
//       } catch (error) {
//         if (error instanceof TRPCError) {
//           throw error;
//         } else {
//           throw new TRPCError({
//             code: 'INTERNAL_SERVER_ERROR',
//             message: 'An error occurred during OTP verification',
//           });
//         }
//       }
//     });
  
//     // sign in api
//   signIn: publicProcedure
//     .input(z.object({
//       email: z.string().email(),
//       password: z.string().min(6),
//     }))
//     .mutation(async ({ input }) => {
//       try {
//       const user = await prisma.user.findUnique({
//         where: { email: input.email },
//       });

//       if (!user) {
//         throw new TRPCError({
//           code: 'NOT_FOUND',
//           message: 'User not found',
//         });
//       }

//       if (user.password !== input.password) { // In real app, use bcrypt.compare
//         throw new TRPCError({
//           code: 'UNAUTHORIZED',
//           message: 'Invalid credentials',
//         });
//       }

//       // Generate a session or JWT token here
//       const token = createJwtToken({ userId: user.id });

//       return { success: true, token };
//     }
//     catch (error) {
//       if (error instanceof TRPCError) {
//         throw error;
//       } else {
//         throw new TRPCError({
//           code: 'INTERNAL_SERVER_ERROR',
//           message: 'An error occurred during sign-in',
//         });
//       }
//     }
//     }),
// });

// Utility function to create JWT token
function createJwtToken(payload: object) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
}


export const signUp = createTRPCRouter({
  signUp: publicProcedure
    .input(z.object({
      username: z.string(),
      email: z.string().email(),
      password: z.string().min(6),
    }))
    .mutation(async ({ input }) => {
      try {
        // Check if the user already exists
        const existingUser = await prisma.user.findUnique({
          where: { email: input.email },
        });

        if (existingUser) {
          throw new TRPCError({
            code: 'CONFLICT',
            message: 'User already exists.',
          });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(input.password, 10);

        // Generate OTP
        const otpCode = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('');
        const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes from now

        // Create the user and associated OTP
        await prisma.user.create({
          data: {
            username: input.username,
            email: input.email,
            password: hashedPassword,
            otp: {
              create: {
                code: otpCode,
                expiresAt,
              },
            },
          },
        });

        // Send OTP via email
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: input.email,
          subject: 'Your OTP Code',
          text: `Your OTP code is ${otpCode}`,
        });

        return {
          success: true,
          message: 'User registered successfully. OTP sent to email.',
        };
      } catch (error) {
        if (error instanceof TRPCError) {
          throw error;
        }
        console.error('Registration Error:', error);
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'An error occurred during registration.',
        });
      }
    }),
});



export const signIn = publicProcedure
  .input(z.object({
    email: z.string().email(),
    password: z.string().min(6),
  }))
  .mutation(async ({ input }) => {
    try {
      // Fetch user
      const user = await prisma.user.findUnique({
        where: { email: input.email },
      });

      if (!user) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'User not found.',
        });
      }

      // Verify password
      const isPasswordValid = await bcrypt.compare(input.password, user.password);
      if (!isPasswordValid) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Invalid credentials.',
        });
      }

      // Generate JWT
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET as string,
        { expiresIn: '1h' }
      );

      return {
        success: true,
        message: 'Login successful.',
        token,
      };
    } catch (error) {
      if (error instanceof TRPCError) {
        throw error;
      }
      console.error('Sign-In Error:', error);
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An error occurred during sign-in.',
      });
    }
  });

  export const verifyOtp = publicProcedure
  .input(z.object({
    email: z.string().email(),
    otp: z.string().length(8),
  }))
  .mutation(async ({ input }) => {
    try {
      // Fetch user with OTP
      const user = await prisma.user.findUnique({
        where: { email: input.email },
        include: { otp: true },
      });

      if (!user) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'User not found.',
        });
      }

      if (!user.otp) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'No OTP associated with this user.',
        });
      }

      // Check OTP validity
      if (user.otp.code !== input.otp) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Invalid OTP.',
        });
      }

      if (new Date() > user.otp.expiresAt) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'OTP has expired.',
        });
      }

      // Mark user as verified and delete OTP
      await prisma.user.update({
        where: { email: input.email },
        data: {
          isVerified: true,
          otp: {
            delete: true,
          },
        },
      });

      return {
        success: true,
        message: 'OTP verified successfully. User is now verified.',
      };
    } catch (error) {
      if (error instanceof TRPCError) {
        throw error;
      }
      console.error('OTP Verification Error:', error);
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An error occurred during OTP verification.',
      });
    }
  });
