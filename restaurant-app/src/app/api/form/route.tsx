import mongoose, { Document, Model } from "mongoose";

// TypeScript interface
interface IForm extends Document {
  name: string;
  email: string;
  availableData: string;
  phone: string;
  message: string;
}

// MongoDB connection function
const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("MongoDB already connected");
    return;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!);
    console.log("MongoDB connected:", conn.connection.host);
    return conn;
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
};

// Mongoose schema
const FormSchema = new mongoose.Schema<IForm>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  availableData: { type: String },
  phone: { type: String },
  message: { type: String },
});

// Mongoose model
const Form: Model<IForm> = mongoose.models.Form || mongoose.model<IForm>("Form", FormSchema);

// API Route
export async function POST(req: Request) {
  await connectDB(); // Connect to MongoDB

  const body = await req.json() as Partial<IForm>;
  console.log("Form data received:", body);

  try {
    const newForm = new Form(body);
    await newForm.save();

    console.log("Form saved successfully:", newForm);

    return new Response(
      JSON.stringify({ success: true, message: "Form submitted successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Something went wrong!";
    console.error("Error saving form:", message);

    return new Response(
      JSON.stringify({ success: false, message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
