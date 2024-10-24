# Autonomous Pull Request Testing

## How it works

1. This is a demo of a pipeline that uses AI to autonomously test pull requests.
2. Based on the pull request content, it comes up with a test plan.
3. Those tests are performed by MultiOn for autonomous browser automation.
4. The final report will be posted as a GitHub comment.

## Autonomous browsing

Using a simple script the browsing is performed fully autonomously based on a simple prompt.

- The first browse session is to gather a test plan based on the contents of the Pull Request.
- The second browse session is performed against the preview environment of the Pull Request to verify the functionality.

```javascript
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
```

## Results

The results of this POC can be found at this pull request:

> https://github.com/tlolkema/autonomous-pr-test/pull/2

### Content of the PR

A feature is added: "extra button which triggers a confetti effect".

The feature itself however breaks on purpose, as you can see in the generated comment this bug is correctly identified.

While this is a very simple demo autonomous browsing can be used to verify more complex scenario's as well.

### Generated comment

![pr-comment](https://github.com/user-attachments/assets/dc676d43-3b13-40e4-bcde-0beaab2e1f9b)
