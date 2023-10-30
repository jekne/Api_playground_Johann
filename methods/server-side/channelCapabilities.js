import serverClient from "./client.js";
const channel = serverClient.channel(
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
// app ID: 1192292
// user id: "a36c49da-cb0a-4308-a7bd-6b87471c204d"
// channel id: "705c3dbf-c019-442b-8b9d-133d7d1b8c97"
