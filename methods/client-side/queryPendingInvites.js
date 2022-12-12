import { chatClient } from "./client.js";

const pendingInvites = async () => {
  // const channel = serverClient.channel("messaging", "testEvents");
  // const invite = await channel.inviteMembers(["guilherme"]);
  const rejected = chatClient.queryChannels({
    invite: "pending",
  });

  return rejected;
};

pendingInvites().then((r) => console.log(r));
