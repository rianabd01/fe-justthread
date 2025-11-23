import "./global.css";
import type { Metadata } from "next";
import ReduxProvider from "./provider";

export const metadata: Metadata = {
  title: "JustThread",
  description: "Productivity Threads",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <ReduxProvider>{children}</ReduxProvider>
        </div>
      </body>
    </html>
  );
}
