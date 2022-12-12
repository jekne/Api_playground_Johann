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

searchUser("johann").then((r) => console.log(r));
