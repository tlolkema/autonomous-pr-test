"use client";

import { useState } from "react";

export default function Home() {
  const [errorMessage] = useState("");

  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      style={{
        backgroundImage: "url('/ai-background.webp')",
        backgroundSize: "60%",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mt-60">
        <ol className="list-inside list-decimal text-lg text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>
            This is a demo of a pipeline that uses AI to autonomously test pull
            requests.
          </li>
          <li>
            Based on the pull request content, it comes up with a test plan.
          </li>
          <li>
            Those tests are performed by MultiOn for autonomous browser
            automation.
          </li>
          <li>The final report will be posted as a GitHub comment.</li>
        </ol>

        {errorMessage && (
          <div className="mt-4 text-red-500">{errorMessage}</div>
        )}
      </main>
    </div>
  );
}
