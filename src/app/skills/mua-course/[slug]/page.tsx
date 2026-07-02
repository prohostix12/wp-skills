"use client";

import { use } from "react";
import MuaCourseDetails from "@/components/skills/MuaCourseDetails";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function Page({ params }: PageProps) {
  const { slug } = use(params);
  return <MuaCourseDetails slug={slug} />;
}
