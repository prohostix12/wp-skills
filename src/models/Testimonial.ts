import mongoose, { Schema, Document, models } from "mongoose";

export interface ITestimonial extends Document {
  name: string;
  designation?: string;
  text: string;
  mediaType: "photo" | "video";
  mediaUrl: string;
  createdAt: Date;
}

const TestimonialSchema = new Schema<ITestimonial>({
  name:        { type: String, required: true, trim: true },
  designation: { type: String, trim: true, default: "" },
  text:        { type: String, required: true, trim: true },
  mediaType:   { type: String, enum: ["photo", "video"], required: true, default: "photo" },
  mediaUrl:    { type: String, required: true, trim: true },
}, { timestamps: true });

const Testimonial = models.Testimonial || mongoose.model<ITestimonial>("Testimonial", TestimonialSchema);

export default Testimonial;
