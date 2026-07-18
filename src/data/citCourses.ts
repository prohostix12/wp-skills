import { DEFAULT_CIT_COURSES, type CitCourse } from "@/lib/contentDefaults";

export type { CitCourse };

export const citCourses: CitCourse[] = DEFAULT_CIT_COURSES;

export function getCitCourse(slug: string) {
  return citCourses.find((c) => c.slug === slug);
}
