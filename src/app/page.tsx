"use client";
import SampleTemplate from "@/components/templates/sample";
import tables from "@/server/configs/tables";
import getTable from "@/server/database/tables";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const asd = getTable("Model");
    console.log(asd);
  }, []);
  return <SampleTemplate />;
}
