import serverClient from "./client.js";

const queryUser = async (userId) => {
  try {
    const response = await serverClient.queryUsers({
      id: userId,
    });

    return response;
  } catch (error) {
    console.log("Error>>>", error);
  }
};

queryUser("1777055").then((r) => console.log(r));
