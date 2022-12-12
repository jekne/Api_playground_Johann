import { chatClient, user_id } from "./client.js";
const channel = chatClient.channel(
  "team",
  "705c3dbf-c019-442b-8b9d-133d7d1b8c97"
);

const channelCapabilities = async (type, id, data) => {
  const channelData = await channel.query({});
  const capabilities = channelData.channel.own_capabilities;
  const userCanDeleteOwnMessage = capabilities.includes("delete-own-message");
  const userCanUpdateAnyMessage = capabilities.includes("update-any-message");

  return capabilities;
};

channelCapabilities().then((r) => console.log(r));
// app ID: 1203489
// user id: 63a71ee0-7c83-4e9a-9a5e-4a88d423cbe6
// channel id: 17A46A15-4732-4C05-94B0-9767A457364F
