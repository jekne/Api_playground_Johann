import { chatClient } from "./client.js";

const addMemberToChannel = async () => {
  const channel = chatClient.channel("messaging", "testEvents");
  const add = await channel.addMembers(["zidane"]);
  return add;
};

addMemberToChannel().then((r) => console.log(r));
// user_id: 24688;
// channel_id: 26141946;
