import { MultiOnClient } from "multion";
import dotenv from "dotenv";
import assert from "assert";

dotenv.config();

assert(process.env.MULTION_API_KEY, "MULTION_API_KEY is not set");

const multion = new MultiOnClient({ apiKey: process.env.MULTION_API_KEY });

const prUrl = process.argv[2];
const previewUrl = process.argv[3];

const prResponse = await multion.browse({
  cmd: "Based on the content of the PR, output a clear test to perform on the preview site.",
  url: prUrl,
  maxSteps: 3,
});

console.log("### PR analysis:\n" + prResponse.message);

const browseResponse = await multion.browse({
  cmd: "Output the results of the performed test: " + prResponse.message,
  url: previewUrl,
  maxSteps: 5,
});

console.log("### Test results:\n" + browseResponse.message);
