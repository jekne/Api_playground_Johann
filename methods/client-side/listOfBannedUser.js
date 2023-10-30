import { chatClient } from "./client.js";

const listofbanUser = async (user_id) => {
  try {
    // retrieve the list of banned users
    const response = await chatClient.queryUsers(
      { banned: true },

      { limit: 10, offset: 1 }
    );

    return response;
  } catch (error) {
    console.log("Error>>>", error);
  }
};

listofbanUser().then((r) => console.log(r));
