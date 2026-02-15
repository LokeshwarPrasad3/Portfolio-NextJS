import { NextResponse } from "next/server";
import Message from "@/models/Message";
import { contactSchema } from "@/schemas/contact";
import { connectDB } from "@/lib/db";

export async function POST(req: Request) {
  try {
    // Ensure DB connection
    await connectDB();

    const body = await req.json();

    // Validate data using Zod
    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation Failed", details: validation.error.format() },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validation.data;

    // Create new message in MongoDB
    const newMessage = await Message.create({
      name,
      email,
      subject,
      message,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully!", data: newMessage },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
