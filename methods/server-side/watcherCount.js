import serverClient from "./client.js";

const watchCount = async (channelCID) => {
  try {
    console.log("channel cid", channelCID);
    // filter on a specific channel cid
    const filter = { cid: channelCID };
    // sort by most recent messages first
    const sort = { last_message_at: -1 };

    // retrieve our channels
    const channels = await serverClient.queryChannels(filter, sort);

    // each channel object has a state collection with a watcher_count property
    return channels[0].state.watcher_count;
  } catch (e) {}
};

watchCount("livestream:living").then((r) => console.log(r));
// queryUser("johann").then((r) => console.log(r));
