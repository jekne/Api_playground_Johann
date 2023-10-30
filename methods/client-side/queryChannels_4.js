import { chatClient } from "./client.js";

//QUERY BY CUSTOM FIELD:

const queryChannels = async (user_id) => {
  const filter = {
    type: "messaging",
    // members: { $in: ["johann"] },
    // tag2: "filterByTag2",
    tag2: { $nin: ["filterByTag2"] },
  };
  const sort = { member_count: 1 };
  const channels = await chatClient.queryChannels(filter, sort, {
    limit: 30,
    offset: 0,
  });
  const totalCount = channels.length; // Total number of channels
  console.log("Number of channel that fits in the query", totalCount);
  const mapResult = channels.map((channel) => {
    console.log("THE CHANNEL>CID >>>>>>>>>>>>>>", channel.cid);
  });

  return mapResult;
};
queryChannels().then((r) => console.log(r));

//SORT CAN BE USED IN DIFERENT WAYS :You can sort based on last_updated, last_message_at, updated_at, created_at, member_count, unread_count or has_unread(unread status). Direction can be ascending (1) or descending (-1)
