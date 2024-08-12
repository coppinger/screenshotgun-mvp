import React from "react";
import Header from "@/components/app/Header";
import { AppMenu } from "@/components/app/Menu";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 p-16">
      <Header />
      <div className="flex w-full gap-8">
        <AppMenu />
        <main className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl border p-16 text-center">
          {children}
        </main>
      </div>
    </div>
  );
}
