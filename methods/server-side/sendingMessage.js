import serverClient from "./client.js";

const sendingMessage = async () => {
  // //   send message
  const channel = serverClient.channel("messaging", "channel_to_delete");
  const message = await channel.sendMessage({
    text: "A Test from stream!",
    user: { id: "luis" },

    // mentioned_users: ["luis"],
    // message_type: "system",
  });
  return message;
};

sendingMessage().then((r) => console.log(r));
