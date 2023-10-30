import serverClient from "./client.js";

const findByName = async () => {
  try {
    const channel = serverClient.channel("try", "1682411647805");
    // console.log("CHANNELS", channel);
    // query all the members
    const allMembers = channel.queryMembers({});
    return allMembers;
  } catch (error) {
    console.log("Error >>>", error);
  }
};

findByName().then((r) => console.log(r));
