"use client";
import SampleTemplate from "@/components/templates/sample";
import tables from "@/server/database/tables";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log(tables);
  }, []);
  return <SampleTemplate />;
}
