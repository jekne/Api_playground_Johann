import { chatClient } from "./client.js";

const addReactions = async (messageID) => {
  try {
    const channel = chatClient.channel("messaging", "testEvents", {});
    // Add reaction 'love' with custom field
    const reaction = await channel.sendReaction(messageID, {
      type: "star",
      myCustomField: 123,
    });

    // Add reaction 'like' and replace all other reactions of this user by it
    // const reaction = await channel.sendReaction(messageID, {
    //     type: 'like'
    // }, null, true);

    return reaction;
  } catch (error) {
    console.log("error >>>", error);
  }
};

addReactions("46c0c446-8433-40bd-8ee2-559cfc8b5138").then((r) =>
  console.log(r)
);
