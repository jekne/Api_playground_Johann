import { chatClient } from "./client.js";

const queryUser = async (userId) => {
  try {
    const response = await chatClient.queryUsers({
      id: userId,
    });
    // const results = await response.queryBannedUsers({
    //   channel_cid: "messaging:18183045-32090367",
    // });

    // return results;

    return response;
  } catch (error) {
    console.log("Error>>>", error);
  }
};

queryUser("19462810").then((r) => console.log(r));
