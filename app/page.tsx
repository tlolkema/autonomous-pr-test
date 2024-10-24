"use client";

import { useState } from "react";

export default function Home() {
  const [errorMessage, setErrorMessage] = useState("");

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

        {/* It's important that this button will have a confetti effect when clicked and no error message is shown */}
        <div className="mt-4 flex items-center gap-4">
          <button
            onClick={() => {
              // confetti();=
              setErrorMessage("An error occurred!"); // Set the error message
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Click Me For Confetti
          </button>

          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        </div>
      </main>
    </div>
  );
}
