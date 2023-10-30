import serverClient from "./client.js";

const exportUsers = async (userID) => {
  try {
    const data = await serverClient.exportUser(userID);

    return data;
  } catch (error) {
    console.log("Error>>>", error);
  }
};

exportUsers("johann").then((r) => console.log(r));
