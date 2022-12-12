import { chatClient } from "./client.js";

const inviteMemberToChannel = async () => {
  const channel = chatClient.channel("messaging", "testEvents");
  const invite = await channel.inviteMembers(["guilherme"]);

  return invite;
};

inviteMemberToChannel().then((r) => console.log(r));

//inivite and add member are doing the same funciton, instead to invite it adds
