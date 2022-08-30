import { chatClient, user_id } from "./client.js";

const messagingMembers = async () => {
  const channel = chatClient.channel("team", "company-3926-location-1609959");
  // a standard and recommended filter

  const filter = {
    type: "team",
    members: { $in: [user_id] },
    id: "company-3926-location-1609959",
  };
  const sort = { last_message_at: -1 };
  const result = await chatClient.queryChannels(filter, sort);
  return result;
};

messagingMembers().then((r) => console.log(r[0].state.members));

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
