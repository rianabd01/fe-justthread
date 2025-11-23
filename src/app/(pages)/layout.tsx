"use client";

import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Navigation from "../../components/Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Loading />
        <div className="container contents-wrap">
          <Navigation />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
