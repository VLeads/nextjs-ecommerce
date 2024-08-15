"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState, ComponentType } from "react";

// Define a type for the props of the HOC
export function withAuth<T>(WrappedComponent: ComponentType<T>) {
  const ProtectedRoute = (props: T) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
      const token = sessionStorage.getItem("token");
      if (token) {
        setAuthenticated(true);
      } else {
        router.replace("/login");
      }
      setLoading(false);
    }, [router]);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (authenticated) {
      return <WrappedComponent {...props} />;
    }

    return null;
  };

  return ProtectedRoute;
}
