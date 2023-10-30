import { chatClient } from "./client.js";

const sendingMessage = async (text) => {
  // //   send message
  const channel = chatClient.channel(
    "messaging",
    "!members-d9JgZcDeRNmSZdtI7ZZkefv9lPjJRGUvvyo-ex-Y0aU"
  );
  const message = await channel.sendMessage({
    text: text,
    // user: { id: "Johann" },

    // mentioned_users: ["luis"],
    // message_type: "system",
  });
  return message;
};

sendingMessage("MESSAGE FROM TEODORO 1 ").then((r) => console.log(r));
