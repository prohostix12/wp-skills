import mongoose, { Schema, Document, models } from "mongoose";

export interface ISiteContent extends Document {
  section: string;
  data: unknown;
  createdAt: Date;
}

const SiteContentSchema = new Schema<ISiteContent>({
  section: { type: String, required: true, unique: true, trim: true },
  data: { type: Schema.Types.Mixed, required: true },
}, { timestamps: true });

const SiteContent = models.SiteContent || mongoose.model<ISiteContent>("SiteContent", SiteContentSchema);

export default SiteContent;
