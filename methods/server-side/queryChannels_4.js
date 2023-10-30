import serverClient from "./client.js";

const messagingMembers = async (user_id) => {
  // const channel = chatClient.channel("team", "company-3926-location-1609959");

  // a standard and recommended filter

  const filter = {
    // type: "try",
    // members: { $in: [user_id] },
    id: "channel_to_delete",
  };
  // const sort = { last_message_at: -1 };
  // const result = await serverClient.queryChannels(filter, sort);
  const result = await serverClient.queryChannels(filter, {});
  console.log("the rresukt", result);
  return result;
};

messagingMembers().then((r) => console.log(r));
// console.log(r[0].state.members);
