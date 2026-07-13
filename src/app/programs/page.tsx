import type { Metadata } from "next";
import ProgramsClient from "@/components/skills/ProgramsClient";

export const metadata: Metadata = {
  title: "Programs | World Passport",
};

export default function ProgramsPage() {
  return <ProgramsClient />;
}
