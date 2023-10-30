import serverClient from "./client.js";

const pendingInvites = async () => {
  // const channel = serverClient.channel("messaging", "testEvents");
  // const invite = await channel.inviteMembers(["guilherme"]);
  const invites = await serverClient.queryChannels(
    {
      invite: "pending",
    },
    {},
    { user_id: "guilherme" }
  );

  return invites;
};

pendingInvites().then((r) => console.log(r));
