import serverClient from "./client.js";

const addMemberToChannel = async () => {
  try {
    const channel = serverClient.channel("messaging", "testEvents");

    const addMember = await channel.addMembers(["test_1"]);

    return addMember;
  } catch (error) {
    console.log("Error>>>", error);
  }
};

addMemberToChannel().then((r) => console.log(r));
