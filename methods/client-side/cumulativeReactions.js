import { chatClient, user_id } from "./client.js";


//ex of clap hands on a message
const cumulativeReactions = async (messageID)=>{
    try {

        const channel = chatClient.channel("commerce","Roland_Garros")

// user claps 5 times on a message
// return await channel.sendReaction(messageID, {
//     type: 'clap',
//     score: 5,
// });

// same user claps 20 times more
return await channel.sendReaction(messageID, {
    type: 'clap',
   score: 25,
});



    return response
    } catch (error) {
        console.log("error >>>", error);
        
    }
}

cumulativeReactions("220c3c8d-398b-409e-adc3-febcef049615").then((r) => console.log(r));
//changing the score you can change the amounth of clap hands

