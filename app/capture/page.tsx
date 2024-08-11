import React from "react";
import Header from "@/components/app/Header";

export default async function Capture() {
  return (
    <>
      <Header />
      <main className="flex h-screen flex-col items-center justify-center gap-2 text-center">
        <p className="lead">Capture a screenshot</p>
        <p className="text-muted-foreground">
          Enter the URL of the page you’d like to capture
        </p>
      </main>
    </>
  );
}
