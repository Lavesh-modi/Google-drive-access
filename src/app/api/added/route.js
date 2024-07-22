// import { google } from "googleapis";
// import { NextResponse } from "next/server";

// export async function GET() {
//   const {
//     NEXT_PUBLIC_GOOGLE_CLIENT_ID: CLIENT_ID,
//     NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: CLIENT_SECRET,
//     NEXT_PUBLIC_GOOGLE_REDIRECT_URI: REDIRECT_URI,
//     NEXT_PUBLIC_GOOGLE_REFRESH_TOKEN: REFRESH_TOKEN,
//   } = process.env;

//   if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI || !REFRESH_TOKEN) {
//     return NextResponse.json(
//       { error: "Missing Google API credentials" },
//       { status: 400 }
//     );
//   }

//   const oauth2Client = new google.auth.OAuth2(
//     CLIENT_ID,
//     CLIENT_SECRET,
//     REDIRECT_URI
//   );
//   oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

//   const drive = google.drive({ version: "v3", auth: oauth2Client });

//   try {
//     const fileId = "1dkktx3RJEgICqS5_v5SenyNpvZ3Jrn3w";
//     await drive.permissions.create({
//       fileId: fileId,
//       requestBody: {
//         role: "reader",
//         type: "anyone",
//       },
//     });

//     const result = await drive.files.get({
//       fileId: fileId,
//       fields: "webViewLink, webContentLink",
//     });
//     console.log(result.data);
//     return NextResponse.json({
//       webViewLink: result.data.webViewLink,
//       webContentLink: result.data.webContentLink,
//     });
//   } catch (error) {
//     console.log(error.message);
//     return NextResponse.json(
//       { error: "Error adding file permissions" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";

export async function GET() {
  const {
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: CLIENT_ID,
    NEXT_PUBLIC_GOOGLE_REDIRECT_URI: REDIRECT_URI,
  } = process.env;

  if (!CLIENT_ID || !REDIRECT_URI) {
    return NextResponse.json(
      { error: "Missing Google API credentials" },
      { status: 400 }
    );
  }

  const authorizationUrl = new URL(
    "https://accounts.google.com/o/oauth2/v2/auth"
  );
  authorizationUrl.searchParams.set("client_id", CLIENT_ID);
  authorizationUrl.searchParams.set("redirect_uri", REDIRECT_URI);
  authorizationUrl.searchParams.set("response_type", "code");
  authorizationUrl.searchParams.set(
    "scope",
    "https://www.googleapis.com/auth/drive"
  );
  authorizationUrl.searchParams.set("access_type", "offline");
  authorizationUrl.searchParams.set("prompt", "consent");
  console.log(authorizationUrl);
  return NextResponse.redirect(authorizationUrl.toString());
}
