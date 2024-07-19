import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  const {
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: CLIENT_ID,
    NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: CLIENT_SECRET,
    NEXT_PUBLIC_GOOGLE_REDIRECT_URI: REDIRECT_URI,
    NEXT_PUBLIC_GOOGLE_REFRESH_TOKEN: REFRESH_TOKEN,
  } = process.env;

  if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI || !REFRESH_TOKEN) {
    return NextResponse.json(
      { error: "Missing Google API credentials" },
      { status: 400 }
    );
  }

  const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );
  oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  const drive = google.drive({ version: "v3", auth: oauth2Client });

  try {
    const response = await drive.files.list({
      pageSize: 100,
      fields:
        "files(id, name, webViewLink, webContentLink, mimeType, parents, size, createdTime, modifiedTime, owners, shared, permissions, thumbnailLink, description, viewedByMeTime, trashed)",
    });
    return NextResponse.json({ files: response.data.files });
  } catch (error) {
    console.error("Error listing files:", error.message);
    return NextResponse.json({ error: "Error listing files" }, { status: 500 });
  }
}
