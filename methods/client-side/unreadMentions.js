import chatClient from "./client.js";

const unreadMentionsPerChannel = async () => {
  try {
    const channel = chatClient.channel("messaging", "LearningTwo");
    const result = channel.countUnreadMentions();
    return result;
  } catch (error) {
    console.log("ERROR >>>", error);
  }
};

unreadMentionsPerChannel().then((r) => console.log(r));
