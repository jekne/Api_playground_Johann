import { chatClient, user_id } from "./client.js";

const addReactions = async (messageID)=>{
    try {
        const channel = chatClient.channel("commerce","Roland_Garros")

// Add reaction 'love' with custom field
const reaction = await channel.sendReaction(messageID, {
    type: 'smile',
    myCustomField: 123
});

// Add reaction 'like' and replace all other reactions of this user by it
// const reaction = await channel.sendReaction(messageID, {
//     type: 'like'
// }, null, true);

     return reaction
    } catch (error) {
        console.log("error >>>", error);
        
    }
}

addReactions("220c3c8d-398b-409e-adc3-febcef049615").then((r) => console.log(r));




