"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { setCurrentUser } from "@/store/currentUser";
import { useAppDispatch } from "@/store";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      console.log(status);
      dispatch(
        setCurrentUser({
          name: session.user.name || "",
          email: session.user.email || "",
          role: session.user.role || "USER",
          image: session.user.image || "",
          authorized: true,
        })
      );
    }
  }, [status, session, dispatch]);

  return <>{children}</>;
}
