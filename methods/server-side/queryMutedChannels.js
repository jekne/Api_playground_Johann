import serverClient from "./client.js";

// retrieve all muted channels
const queryMutedChannels = async () => {
  try {
    const response = await serverClient.queryChannels({ muted: true });
    console.log("check", response);

    return response;
  } catch (error) {
    console.log("Error>>>", error);
  }
};

// queryMutedChannels().then((r) => console.log(r));

// retrieve all channels excluding muted ones
const allChannelsExcludingMuted = async (userId) => {
  try {
    const response = await serverClient.queryChannels({
      members: { $in: [userId] },
      muted: false,
    });
    console.log("check", response);

    return response;
  } catch (error) {
    console.log("Error>>>", error);
  }
};

allChannelsExcludingMuted("johann").then((r) => console.log(r));
