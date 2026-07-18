import { connectDB } from "@/lib/db";
import SiteContent from "@/models/SiteContent";

export async function getContent<T>(section: string, fallback: T): Promise<T> {
  try {
    await connectDB();
    const doc = await SiteContent.findOne({ section }).lean<{ data: T }>();
    if (doc) return doc.data;
    await SiteContent.create({ section, data: fallback });
    return fallback;
  } catch (err) {
    console.error(`Failed to fetch content section "${section}":`, err);
    return fallback;
  }
}
