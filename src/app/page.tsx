"use client";
import SampleTemplate from "@/components/templates/sample";
import getTable from "@/server/database/tables";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   const modelsModel = getTable("Model");
  //   console.log("TEST =>", modelsModel);
  // }, []);
  return <SampleTemplate />;
}
