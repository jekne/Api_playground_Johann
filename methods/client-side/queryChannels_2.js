import { chatClient } from "./client.js";

const onlyMeAndMyFriend = async (friend) => {
  // filter for channels with only me and a friend
  const filter = {
    $and: [
      {
        members: {
          $in: ["johann"],
        },
      },
      {
        members: {
          $in: ["teodoro"],
        },
      },
    ],
  };
  const sort = { last_message_at: -1 };

  const result = await chatClient.queryChannels(filter, sort);

  result.forEach((result) => {
    console.log("Channel ID (cid):", result.cid);
  });
  return result;
};
onlyMeAndMyFriend().then((r) => console.log(r));

//SORT CAN BE USED IN DIFERENT WAYS :You can sort based on last_updated, last_message_at, updated_at, created_at, member_count, unread_count or has_unread(unread status). Direction can be ascending (1) or descending (-1)
