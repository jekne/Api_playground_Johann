import { chatClient } from "./client.js";

const unreadMessagesPerChannel = async () => {
  try {
    const channel = chatClient.channel("messaging", "LearningTwo");
    const count = channel.countUnread();
    console.log("message count = ", count);
    return count;
  } catch (e) {
    console.log("error >>>", e);
  }
};

unreadMessagesPerChannel().then((r) => console.log(r));
