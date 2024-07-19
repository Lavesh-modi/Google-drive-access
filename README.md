This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - Your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## How to Get Google Drive Credentials and File Access

1. Visit [Google Cloud Console](https://console.cloud.google.com/).
   ![alt text](<Screenshot 2024-07-19 115737.png>)
2. Go to the dashboard and create a new project.
3. Select your new project.
4. Navigate to the API Library.
5. Search for "Google Drive API" and enable it.
6. Go to the OAuth consent screen section and create a new consent screen.
   - Choose "External"
   - Enter the "App Name: NEW"
   - Support email: "YOUR EMAIL"
   - Developer contact information email: "Developer email"
   - Save and continue
7. Add the necessary scopes for the Google Drive API.
   - Save and continue, then go back to the dashboard.
8. Navigate to Credentials.
9. Choose "Create OAuth client ID".
   - Application type: "Web application"
   - Authorized redirect URIs: "https://developers.google.com/oauthplayground"
10. Save your Client ID and Client Secret.

11. Open [OAuth Playground](https://developers.google.com/oauthplayground) in a new tab.

![alt text](<Screenshot 2024-07-19 121511.png>)

    - Scroll down to "Drive API v3"
    - Select the scope "https://www.googleapis.com/auth/drive"
    - In the right-hand side settings, check "Use your own OAuth credentials"
    - Enter your Client ID and Client Secret
    - Authorize APIs
    - Sign in with your email and grant permissions

12. If you encounter an error about contacting the developer, go back to the Google Console and publish your app to make it public.

13. You will get an access token. Use this to create the environment variables:

```env
NEXT_PUBLIC_GOOGLE_REFRESH_TOKEN="access token"
NEXT_PUBLIC_GOOGLE_REDIRECT_URI="https://developers.google.com/oauthplayground"
NEXT_PUBLIC_GOOGLE_CLIENT_SECRET="client secret"
NEXT_PUBLIC_GOOGLE_CLIENT_ID="client id"
```

![alt text](image.png)

Click on "Advanced" and then "Proceed".
