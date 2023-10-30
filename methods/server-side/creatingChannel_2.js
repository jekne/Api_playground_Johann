import serverClient from "./client.js";

const createChannel = async (type, channel_id, members, name) => {
  try {
    const channel = serverClient.channel(type, channel_id, {
      members,
      name,
    });

    const toCreate = channel.create();
    return toCreate;
  } catch (error) {
    console.log("error >>>", error);
  }
};

createChannel(
  "team",
  "team_test",
  ["jose", "johann", "luis"],
  "this name wil be here"
).then((r) => console.log(r));
