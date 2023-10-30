import serverClient from "./client.js";

const listofbanUser = async () => {
  try {
    // retrieve the list of banned users with the reason

    // query for banned members from one channel
    const results = await serverClient.queryBannedUsers({
      channel_cid: "messaging:testEvents",
    });
    return results;
  } catch (error) {
    console.log("Error>>>", error);
  }
};

listofbanUser().then((r) => console.log(r));
