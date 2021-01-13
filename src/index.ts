import { getInput, setFailed } from "@actions/core";
import { getOctokit } from "@actions/github";
import { sendMessage } from "./helpers/sendMessage";

const token =
  getInput("token") || process.env.GH_PAT || process.env.GITHUB_TOKEN;
const slackChannelURL = getInput("SLACK_CHANNEL_URL") || process.env.SLACK_CHANNEL_URL;

export const run = async () => {
  if (!token) throw new Error("GitHub token not found");
  if (!slackChannelURL) throw new Error("Slack channel url not found");
  const octokit = getOctokit(token);

  await sendMessage(slackChannelURL);
};

run()
  .then(() => {})
  .catch((error) => {
    console.error("ERROR", error);
    setFailed(error.message);
  });
