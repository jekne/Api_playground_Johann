import serverClient from "./client.js";

// ban a user for 60 minutes from all channel

const banUser = async (userID) => {
  try {
    const channel = serverClient.channel("messaging", "testEvents");
    const data = await channel.banUser("zidane", {
      banned_by_id: userID,
      reason: "Profanity is not allowed here",
    });

    return data;
  } catch (error) {
    console.log("Error>>>", error);
  }
};

banUser("24688").then((r) => console.log(r));
