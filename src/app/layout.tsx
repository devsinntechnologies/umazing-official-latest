// import { Poppins } from "next/font/google";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import { Toaster } from "@/components/ui/sonner";
import Child from "./Child";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
// import { TooltipProvider } from "@radix-ui/react-tooltip";

const urbanist = Urbanist({ subsets: ["latin"] });

// const poppins = Poppins({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-poppins",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

export const metadata = {
  title: "Umazing Official",
  description: "",
};

interface RootLayoutProps {
  children: ReactNode; // Define the type for children
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Umazing Official</title>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
      </head>
      <body className={`${urbanist.className} w-screen min-h-screen`} suppressHydrationWarning>
        <Provider>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >

          <Child>{children}</Child>
          </ThemeProvider>
          <Toaster expand={false} position="top-right" richColors/>
        </Provider>
      </body>
    </html>
  );
}
