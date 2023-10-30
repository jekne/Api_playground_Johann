import serverClient from "./client.js";

const creatingChannel = async (user_id) => {
  try {
    const channel = serverClient.channel("messaging", "deactivate_user", {
      name: "Master class",
      created_by_id: user_id,
      class_id: "class Number 2",
      anyField: "Just need to be a string",
    });
    return await channel.create();
  } catch (error) {
    console.log("error >>>", error);
  }
};

creatingChannel("Johann").then((r) => console.log(r));

// const channel = await serverClient.channel(channelType, channelID, {
//   name: title,
//   created_by_id: teacherID,
//   class_id: classID,
// });
