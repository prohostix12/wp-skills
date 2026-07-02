"use client";

import { use } from "react";
import CourseDetails from "@/components/skills/CourseDetails";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function Page({ params }: PageProps) {
  const { slug } = use(params);
  return <CourseDetails slug={slug} />;
}
