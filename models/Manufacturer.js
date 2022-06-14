import mongoose from "mongoose";

const ManufacturerSchema = new mongoose.Schema(
  {
    manufacturer: {
      type: String,
      required: true,
      maxlength: 60,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Manufacturer || mongoose.model("Manufacturer", ManufacturerSchema);
