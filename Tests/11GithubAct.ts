// ========================
// ⚙️ CONCEPT: GitHub Actions & CI/CD
// 🏷️ NAME: GitHub Actions Workflow
`GitHub Actions allows you to automate software workflows such as testing, building, and deploying applications.`;
// ========================

// 📄 QUESTION:
// Create a GitHub Actions workflow file named `.github/workflows/test.yml`.
// The workflow should:
// 1. Trigger on `push` and `pull_request` events for the `main` branch.
// 2. Run on `ubuntu-latest`.
// 3. Install dependencies using `npm ci`.
// 4. Run the test suite using `npm test`.
// 5. Cache `node_modules` to speed up subsequent runs.

// 🧩 GENERIC FUNCTION:
// ```yaml
// name: Run Tests
//
// on:
//   push:
//     branches:
//       - main
//   pull_request:
//     branches:
//       - main
//
// jobs:
//   test:
//     runs-on: ubuntu-latest
//
//     steps:
//       - name: Checkout repository
//         uses: actions/checkout@v3
//
//       - name: Setup Node.js
//         uses: actions/setup-node@v3
//         with:
//           node-version: 18
//           cache: 'npm'
//
//       - name: Install dependencies
//         run: npm ci
//
//       - name: Run tests
//         run: npm test
// ```

// ========================================================================
// 📝 YOUR ANSWER:

// ========================================================================

// 🏗️ TEST: Validate workflow behavior
describe("GitHub Actions Workflow", () => {
  test("should trigger on push and pull_request events", () => {
    expect(workflowConfig.on.push.branches).toContain("main");
    expect(workflowConfig.on.pull_request.branches).toContain("main");
  });

  test("should use ubuntu-latest as the runner", () => {
    expect(workflowConfig.jobs.test["runs-on"]).toBe("ubuntu-latest");
  });

  test("should cache dependencies", () => {
    expect(workflowConfig.jobs.test.steps).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "Setup Node.js",
          uses: "actions/setup-node@v3",
        }),
        expect.objectContaining({
          with: expect.objectContaining({ cache: "npm" }),
        }),
      ])
    );
  });

  test("should run tests after installing dependencies", () => {
    expect(workflowConfig.jobs.test.steps).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "Install dependencies",
          run: "npm ci",
        }),
        expect.objectContaining({ name: "Run tests", run: "npm test" }),
      ])
    );
  });
});
