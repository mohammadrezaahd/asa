"use client";

import { UsersApi } from "@/components/api/users.api";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  useEffect(() => {
    const get = async () => {
      const res = await UsersApi.getUsers();
      console.log(res.data);
      console.log(status);
      console.log(session);
    };
    get();
  }, [status, session]);

  return <></>;
}
