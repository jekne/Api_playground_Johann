import { chatClient } from "./client.js";

const queryChannels = async (user_id) => {
  const filter = {
    type: "messaging",
    members: { $in: ["19462810"] },
    // banned: true,
  };
  const sort = { last_message_at: -1 };
  const channels = await chatClient.queryChannels(filter, sort, {
    limit: 30,
    offset: 0,
  });
  const mapResult = channels.map((channel) => {
    console.log("THE CHANNEL.CID >>>>>>>>>>>>>>>", channel.cid);
  });

  return mapResult;
};
queryChannels().then((r) => console.log(r[0]));

//SORT CAN BE USED IN DIFERENT WAYS :You can sort based on last_updated, last_message_at, updated_at, created_at, member_count, unread_count or has_unread(unread status). Direction can be ascending (1) or descending (-1)
