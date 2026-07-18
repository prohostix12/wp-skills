import { DEFAULT_MUA_COURSES, type MuaCourse, type MuaModule } from "@/lib/contentDefaults";

export type { MuaCourse, MuaModule };

export const muaCourses: MuaCourse[] = DEFAULT_MUA_COURSES;

export function getMuaCourse(slug: string) {
  return muaCourses.find((c) => c.slug === slug);
}
