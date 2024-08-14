// src/server/router/auth.ts

import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
import { PrismaClient } from '@prisma/client';
const nodemailer = require('nodemailer')
import { randomBytes } from 'crypto';

const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(z.object({
        username: z.string(),
      email: z.string().email(),
      password: z.string().min(6),
    }))
    .mutation(async ({ input }) => {
      const existingUser = await prisma.user.findUnique({
        where: { email: input.email },
      });

      if (existingUser) {
        throw new Error('User already exists');
      }

      const otpCode = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('');
      const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

      await prisma.user.create({
        data: {
          username: input.username,
          email: input.email,
          password: input.password, // Hash passwords in a real app
          otp: {
            create: {
              code: otpCode,
              expiresAt,
            },
          },
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: input.email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otpCode}`,
      });
console.log('success-email')
      return { success: true };
    }),

  verifyOtp: publicProcedure
    .input(z.object({
      email: z.string().email(),
      otp: z.string().length(8),
    }))
    .mutation(async ({ input }) => {
      const otp = await prisma.otp.findFirst({
        where: {
          code: input.otp,
          expiresAt: { gt: new Date() },
          user: { email: input.email },
        },
      });

      if (!otp) {
        throw new Error('Invalid or expired OTP');
      }

      await prisma.user.update({
        where: { email: input.email },
        data: { otpId: null },
      });

      return { success: true };
    }),

  signIn: publicProcedure
    .input(z.object({
      email: z.string().email(),
      password: z.string().min(6),
    }))
    .mutation(async ({ input }) => {
      const user = await prisma.user.findUnique({
        where: { email: input.email },
      });

      if (!user || user.password !== input.password) {
        throw new Error('Invalid credentials');
      }

      // Generate a session or JWT token here

      return { success: true };
    }),
});
