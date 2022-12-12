import { chatClient } from "./client.js";

const sendingMessage = async (text) => {
  // //   send message
  const channel = chatClient.channel("messaging", "testEvents");
  const message = await channel.sendMessage({
    text: text,
    // user: { id: "Johann" },

    // mentioned_users: ["luis"],
    // message_type: "system",
  });
  return message;
};

sendingMessage("one").then((r) => console.log(r));
