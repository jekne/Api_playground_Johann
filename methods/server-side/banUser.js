import serverClient from "./client.js";

// ban a user for 60 minutes from all channel

const banUser = async (userID) => {
  try {
    const data = await serverClient.banUser("21276654", {
      banned_by_id: userID, // ID of the user who is performing the ban (Server-side auth)
      timeout: 1,
      reason: "Banned for one hour",
    });
    // console.log("here", data.banned_by_id);

    return data;
  } catch (error) {
    console.log("Error>>>", error);
  }
};

banUser("1777055").then((r) => console.log(r));
