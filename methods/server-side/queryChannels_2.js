import serverClient from "./client.js";

const queryChannels = async (user_id) => {
  const filter = {
    type: "messaging",
    members: { $in: ["21274164"] },
    // banned: true,
  };
  const sort = [{ last_message_at: -1 }];
  const channels = await serverClient.queryChannels(filter, sort, {
    limit: 30,
    offset: 0,
  });
  const mapResult = channels.map((channel) => {
    console.log("THE CHANNEL.CID >>>>>>>>>>>>>>>>>>>>>>>>>>>", channel.cid);
  });

  return mapResult;
};
queryChannels().then((r) => console.log(r));
