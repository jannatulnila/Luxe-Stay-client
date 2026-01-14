"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DashboardRedirect = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (session?.user?.role === "admin") {
      router.replace("/dashboard/admin");
    } else if (session?.user?.role === "member") {
      router.replace("/dashboard/member");
    } else {
      router.replace("/dashboard/user");
    }
  }, [session, status]);

  return null;
};

export default DashboardRedirect;
