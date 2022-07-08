import serverClient from "./client.js";

const addReactions = async (messageID,userID)=>{
    try {
        const channel = serverClient.channel("commerce","Roland_Garros")

// Add reaction 'love' with custom field
// const reaction = await channel.sendReaction(messageID, {
//     type: 'love',
//     myCustomField: 123
// });

// Add reaction 'love' from the server side
const reaction = await channel.sendReaction(messageID, {
    type: 'love'
}, userID);

// Add reaction 'like' and replace all other reactions of this user by it
// const reaction = await channel.sendReaction(messageID, {
//     type: 'like'
// }, null, true);
     return reaction
    } catch (error) {
        console.log("error >>>", error);
        
    }
}

addReactions("220c3c8d-398b-409e-adc3-febcef049615","johann").then((r) => console.log(r));




