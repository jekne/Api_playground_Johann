import serverClient from "./client.js";

const getPinnedMessages = async (channelId) => {
  try {
    const channelState = await serverClient.channel("team", channelId).query();
    const pinnedMessages = channelState.pinned_messages;
    return pinnedMessages;
  } catch (error) {
    console.log("error >>>", error);
  }
};
getPinnedMessages("Rk1eCLk3VQQAtFty9POlkROCxJW2_1667463064054").then((r) =>
  console.log(r)
);
