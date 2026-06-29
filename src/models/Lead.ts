import mongoose, { Schema, Document, models } from "mongoose";

export interface ILead extends Document {
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: Date;
}

const LeadSchema = new Schema<ILead>({
  name:    { type: String, required: true, trim: true },
  email:   { type: String, required: true, trim: true },
  phone:   { type: String, required: true, trim: true },
  message: { type: String, trim: true },
}, { timestamps: true });

const Lead = models.Lead || mongoose.model<ILead>("Lead", LeadSchema);

export default Lead;
