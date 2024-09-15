import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ReeBolly",
  description: "Professional Dancer.",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
  // return (
  //   <ClerkProvider>
  //     <html lang="en">
  //       <body>
  //         <header>
  //           <SignedOut>
  //             <SignInButton />
  //           </SignedOut>
  //           <SignedIn>
  //             <UserButton />
  //           </SignedIn>
  //         </header>
  //         <main>{children}</main>
  //       </body>
  //     </html>
  //   </ClerkProvider>
  // );
}
