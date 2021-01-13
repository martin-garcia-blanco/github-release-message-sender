"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wait = exports.run = void 0;
const core_1 = require("@actions/core");
const github_1 = require("@actions/github");
const sendMessage_1 = require("./helpers/sendMessage");
const token = core_1.getInput("token") || process.env.GH_PAT || process.env.GITHUB_TOKEN;
const slackChannelURL = core_1.getInput("SLACK_CHANNEL_URL") || process.env.SLACK_CHANNEL_URL;
const run = async () => {
    if (!token)
        throw new Error("GitHub token not found");
    if (!slackChannelURL)
        throw new Error("Slack channel url not found");
    const octokit = github_1.getOctokit(token);
    const ms = core_1.getInput("milliseconds");
    core_1.debug(`Waiting ${ms} milliseconds ...`);
    core_1.debug(new Date().toTimeString());
    await exports.wait(parseInt(ms, 10));
    core_1.debug(new Date().toTimeString());
    core_1.setOutput("time", new Date().toTimeString());
    await sendMessage_1.sendMessage(slackChannelURL);
};
exports.run = run;
const wait = (milliseconds) => {
    return new Promise((resolve) => setTimeout(() => resolve(), milliseconds));
};
exports.wait = wait;
exports.run()
    .then(() => { })
    .catch((error) => {
    console.error("ERROR", error);
    core_1.setFailed(error.message);
});
//# sourceMappingURL=index.js.map