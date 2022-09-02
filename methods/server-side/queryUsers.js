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

queryUser("a1cdcadc-6b97-421d-a5c0-f9587fac0be1").then((r) => console.log(r));
