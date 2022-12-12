import { chatClient } from "./client.js";

const removeMemberFromChannel = async () => {
  const channel = chatClient.channel("messaging", "testEvents");
  const add = await channel.removeMembers(["guilherme"]);
  return add;
};

removeMemberFromChannel().then((r) => console.log(r));
