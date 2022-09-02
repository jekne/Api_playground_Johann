import serverClient from "./client.js";

const messagingMembers = async (user_id) => {
  // const channel = chatClient.channel("team", "company-3926-location-1609959");
  // a standard and recommended filter

  const filter = {
    // type: "team",
    members: { $in: [user_id] },
    // id: "company-3926-location-1609959",
  };
  const sort = { last_message_at: -1 };
  const result = await serverClient.queryChannels(filter, sort);
  return result;
};

messagingMembers("a1cdcadc-6b97-421d-a5c0-f9587fac0be1").then((r) =>
  console.log(r)
);
// console.log(r[0].state.members);

const onlyMeAndMyFriend = async (friend) => {
  // filter for channels with only me and a friend
  const filter = {
    $and: [
      {
        members: {
          $in: ["katie"],
        },
      },
      {
        members: {
          $in: ["george"],
        },
      },
    ],
  };
  const sort = { last_message_at: -1 };
  const result = await chatClient.queryChannels(filter, sort);
  return result;
};

// onlyMeAndMyFriend("george").then((r) => console.log(r));
