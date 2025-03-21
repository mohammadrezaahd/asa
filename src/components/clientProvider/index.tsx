"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import { setCurrentUser } from "@/store/currentUser";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      dispatch(setCurrentUser(session.user));
    }
  }, [status, session, dispatch]);

  return <>{children}</>;
}
