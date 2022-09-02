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

searchUser("a1cdcadc-6b97-421d-a5c0-f9587fac0be1").then((r) => console.log(r));
