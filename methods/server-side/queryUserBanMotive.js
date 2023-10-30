import serverClient from "./client.js";

const queryUser = async (userId) => {
  try {
    const sort = { created_at: -1 };

    const filter = {
      user_id: { $eq: userId },
      // channel_cid: "messaging:26575086-25596091",
    };

    const result = await serverClient.queryBannedUsers(filter, sort);

    return result;
  } catch (error) {
    console.log("Error>>>", error);
  }
};

queryUser("21276654").then((r) => console.log(r));
