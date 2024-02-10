import { connectMongoDB } from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Task from "@/model/model";

export async function POST(req: NextRequest) {
  const { task, status } = await req.json();
  await connectMongoDB();
  await Task.create({ task, status });
  return NextResponse.json({ message: "Tarea creada" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const tasks = await Task.find();
  return NextResponse.json({ tasks });
}

export async function DELETE(req: NextRequest) {}
