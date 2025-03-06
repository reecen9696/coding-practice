// ========================
// ☁️ CONCEPT: AWS SAM & Lambda Functions
// 🏷️ NAME: AWS SAM Lambda Deployment & Testing
`AWS Serverless Application Model (SAM) simplifies building, deploying, and testing serverless applications, including AWS Lambda functions.`;
// ========================

// 📄 QUESTION:
// 1️⃣ Add a new handler function named `processRequest` to an existing AWS SAM project.
//    - The function should log incoming event data and return a JSON response.
//    - Place the function inside `handlers/process.js` and reference it in `template.yaml`.
//
// 2️⃣ Populate `template.yaml` to define the new Lambda function with:
//    - Runtime: `nodejs18.x`
//    - Timeout: `10` seconds
//    - Events: An HTTP API trigger at `POST /process`
//    - Environment variable: `LOG_LEVEL=info`
//
// 3️⃣ Write Jest tests to ensure:
//    - The function returns a `200` status with the correct response body.
//    - The function logs the received event data.

// 🧩 GENERIC FUNCTION:

// 🚀 Step 1: Create a new Lambda handler (handlers/process.js)
export async function processRequest(event) {
  console.log("Received event:", JSON.stringify(event, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Request processed successfully" }),
  };
}

// 🚀 Step 2: Define the function in template.yaml
/*
Resources:
  ProcessRequestFunction:
    Type: AWS::Serverless::Function
    Properties:
      FunctionName: ProcessRequest
      Handler: handlers/process.processRequest
      Runtime: nodejs18.x
      Timeout: 10
      Environment:
        Variables:
          LOG_LEVEL: info
      Events:
        ApiTrigger:
          Type: HttpApi
          Properties:
            Path: /process
            Method: POST
*/

// 🚀 Step 3: Write Jest tests for the function (tests/process.test.js)
import { processRequest } from "../handlers/process";

describe("processRequest Lambda Function", () => {
  test("should return 200 status and success message", async () => {
    const mockEvent = { body: JSON.stringify({ key: "value" }) };
    const response = await processRequest(mockEvent);

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toEqual({
      message: "Request processed successfully",
    });
  });

  test("should log the event data", async () => {
    console.log = jest.fn();
    const mockEvent = { body: JSON.stringify({ key: "value" }) };

    await processRequest(mockEvent);

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("Received event:")
    );
  });
});

// ========================================================================
// 📝 YOUR ANSWER:

// 🚀 Step 1: Implement processRequest handler

// ========================================================================

// 🚀 Step 2: Populate template.yaml with the new function definition

// ========================================================================

// 🚀 Step 3: Write Jest tests for processRequest function

// ========================================================================
