import { chatClient } from "./client.js";

const addReactions = async (messageID) => {
  try {
    const channel = chatClient.channel("messaging", "testEvents", {});

    // Add reaction 'like' and replace all other reactions of this user by it
    const reaction = await channel.sendReaction(
      messageID,
      {
        type: "love",
      },
      null,
      true
    );

    return reaction;
  } catch (error) {
    console.log("error >>>", error);
  }
};

addReactions("5cc0f194-93b5-443f-b7f5-d8c46ecdcbce").then((r) =>
  console.log(r)
);
