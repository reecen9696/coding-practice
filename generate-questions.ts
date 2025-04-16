import dotenv from 'dotenv';
dotenv.config();

import fs from 'fs';
import path from 'path';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const originalTestsDir = path.join(__dirname, 'OriginalTests');

async function regenerateFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf8');

  const prompt = `
You are a creative TypeScript educator.

Rewrite all the QUESTIONS and FUNCTION NAMES in the following file using fresh, different wording and structure — but keep the functionality and tests exactly the same.

Your goal is to generate new practice questions that test the same concepts using different descriptions, variable names, and formatting.

DO NOT include explanations or notes — just return the full new file only, as valid TypeScript code

\`\`\`ts
${content}
\`\`\`
`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.85,
  });

  let newContent = response.choices[0].message.content || '';
  newContent = newContent.replace(/```ts\n?/g, '').replace(/```/g, '');

  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`✅ Regenerated: ${filePath}`);
}

async function main() {
  const files = fs.readdirSync(originalTestsDir);

  for (const file of files) {
    const filePath = path.join(originalTestsDir, file);
    const stat = fs.statSync(filePath);

    if (stat.isFile() && file.endsWith('.ts')) {
      console.log(`🛠️ Processing: ${filePath}`);
      await regenerateFile(filePath);
    } else {
      console.log(`⏭️ Skipping: ${filePath}`);
    }
  }
}

main().catch(console.error);