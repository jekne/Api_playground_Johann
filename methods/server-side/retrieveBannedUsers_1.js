import serverClient from "./client.js";

const listofbanUser = async () => {
  try {
    // retrieve the list of banned users
    const response = await serverClient.queryUsers(
      { banned: true },

      { limit: 10, offset: 1 }
    );

    return response;
  } catch (error) {
    console.log("Error>>>", error);
  }
};

listofbanUser().then((r) => console.log(r));
