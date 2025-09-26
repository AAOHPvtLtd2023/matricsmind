import mongoose from "mongoose";

const PlatfromSchema = new mongoose.Schema({
  platform: { type: String, default: "Direct" },
  referer: { type: String, default: "" },
  ip: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Visit || mongoose.model("Visit", VisitSchema);
