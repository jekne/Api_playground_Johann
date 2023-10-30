import serverClient from "./client.js";

const listOfDevices = async (userId) => {
  try {
    const response = await serverClient.getDevices(userId);

    return response;
  } catch (error) {
    console.log("Error>>>", error);
  }
};

listOfDevices("organization-6527").then((r) => console.log(r));

//organization-6527
