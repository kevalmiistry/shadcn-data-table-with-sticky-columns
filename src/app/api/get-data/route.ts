import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import type { ApiResponse, User } from "@/types";

// api for getting dummy data from data.json
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "src/data/data.json");
    const fileData = await fs.readFile(filePath, "utf-8");
    const data: User[] = JSON.parse(fileData);

    const response: ApiResponse<User[]> = {
      success: true,
      data,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error reading file:", error);

    const errorResponse: ApiResponse<null> = {
      success: false,
      message: "Failed to load data.",
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
