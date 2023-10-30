import { chatClient } from "./client.js";

const searchUser = async (userId) => {
  const messages = await chatClient.search(
    {
      $and: [{ members: { $in: [userId] } }, { id: userId }],
    },
    { text: { $ne: " " } }
  );

  return messages;
};

searchUser("831d9b69-3c95-47b0-86d6-395c1fbaa257").then((r) => console.log(r));
