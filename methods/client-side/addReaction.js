import { chatClient } from "./client.js";

const addReactions = async (messageID) => {
  try {
    const channel = chatClient.channel("messaging", "test_reactions", {});
    // Add reaction 'love' with custom field
    const reaction = await channel.sendReaction(messageID, {
      type: "love",
    });

    return reaction;
  } catch (error) {
    console.log("error >>>", error);
  }
};

addReactions("77f4098a-8bcf-43d2-ae22-65df342f46b4").then((r) =>
  console.log(r)
);
