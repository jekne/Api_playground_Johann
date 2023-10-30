import serverClient from "./client.js";

const unreadMessagesPerChannel = async () => {
  try {
    const channel = serverClient.channel("messaging", "LearningTwo");
    const count = channel.countUnread();
    return count;
  } catch (e) {
    console.log("error >>>", e);
  }
};

unreadMessagesPerChannel().then((r) => console.log(r));
