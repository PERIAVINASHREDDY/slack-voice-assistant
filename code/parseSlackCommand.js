/**
 * Parses Slack app mentions and extracts
 * - target user (user1, user2, ...)
 * - message to be delivered
 */

const event = $input.all()[0].json;

const text = event.text || "";

// Remove bot mention and normalize text
const cleanText = text.replace(/<@[^>]+>/g, "").trim().toLowerCase();

const CONTACT_NAMES = [
  "user1",
  "user2",
  "user3",
  "user4",
  "user5",
  "user6",
  "user7",
  "user8",
  "user9",
  "user10"
];

let targetName = null;

for (const name of CONTACT_NAMES) {
  if (cleanText.includes(`call ${name}`)) {
    targetName = name;
    break;
  }
}

if (!targetName) {
  return [{ json: { error: true, message: "No valid contact found" } }];
}

const messageToDeliver = cleanText
  .replace(`call ${targetName}`, "")
  .replace(/^and\s+(tell|let)\s+(them|him|her)\s+(know\s+)?/, "")
  .trim();

return [{
  json: {
    targetName,
    messageToDeliver
  }
}];
