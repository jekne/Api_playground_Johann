import { chatClient } from "./client.js";

const banUser = async (userID) => {
  // ban a user for 60 minutes from all channel
  let data = await chatClient.banUser("thierry", {
    banned_by_id: userID, // ID of the user who is performing the ban (Server-side auth)
    timeout: 5,
    reason: "Banned for one hour",
  });

  return data;
};

banUser("johann").then((r) => console.log(r));
// ban a user for 60 minutes from all channel
