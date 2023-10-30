import serverClient from "./client.js";

const undeleteUsers = async () => {
  try {
    const response = await serverClient.restoreUsers(["michalvankodev"]);
    console.log(response);
    return response;
  } catch (error) {
    console.log("Error>>>", error);
  }
};

undeleteUsers().then((r) => console.log(r));

// await client.restoreUsers(["userID1", "userID2"]);
