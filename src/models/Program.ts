import mongoose, { Schema, Document, models } from "mongoose";

export interface IProgram extends Document {
  category: string;
  title: string;
  description: string;
  university: string;
  universityInitial: string;
  rating: number;
  duration: string;
  image: string;
  students: string;
  learningPoints: string[];
  createdAt: Date;
}

const ProgramSchema = new Schema<IProgram>({
  category:          { type: String, required: true, trim: true },
  title:             { type: String, required: true, trim: true },
  description:       { type: String, required: true, trim: true },
  university:        { type: String, required: true, trim: true },
  universityInitial: { type: String, required: true, trim: true },
  rating:            { type: Number, required: true, default: 4.8 },
  duration:          { type: String, required: true, default: "12h" },
  image:             { type: String, required: true, trim: true },
  students:          { type: String, required: true, default: "100+" },
  learningPoints:    { type: [String], required: true, default: [] },
}, { timestamps: true });

const Program = models.Program || mongoose.model<IProgram>("Program", ProgramSchema);

export default Program;
