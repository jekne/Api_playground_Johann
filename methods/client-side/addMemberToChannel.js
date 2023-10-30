import { chatClient } from "./client.js";

const addMemberToChannel = async () => {
  const channel = chatClient.channel("messaging", "test_reactions");
  const add = await channel.addMembers(["@antonio"]);
  return add;
};

addMemberToChannel().then((r) => console.log(r));
// user_id: 24688;
// channel_id: 26141946;
