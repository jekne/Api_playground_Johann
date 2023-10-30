import { chatClient } from "./client.js";

// query for banned members from one channel

const listofbanUser = async () => {
  try {
    const results = await chatClient.queryBannedUsers({
      channel_cid: "messaging:18183045-32090367",
    });

    return results;
  } catch (error) {
    console.log("Error>>>", error);
  }
};

listofbanUser().then((r) => console.log(r));
