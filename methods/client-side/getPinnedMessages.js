import { chatClient } from "./client.js";

const getPinnedMessages = async (channelId) => {
  try {
    // get channel state
    const channelState = await chatClient
      .channel("messaging", channelId)
      .query();
    // console.log("CHANNEL STAETE", channelState);
    // get pinned messages from it
    const pinnedMessages = channelState.pinned_messages;

    return pinnedMessages;
  } catch (error) {
    console.log("error >>>", error);
  }
};

getPinnedMessages("Rk1eCLk3VQQAtFty9POlkROCxJW2_1667463064054").then((r) =>
  console.log(r)
);
