import { chatClient, user_id } from "./client.js";

const removingReactions = async (messageID)=>{
    try {
        const channel = chatClient.channel("commerce","Roland_Garros")

      return  await channel.deleteReaction(messageID, 'love');

    
    } catch (error) {
        console.log("error >>>", error);
        
    }
}

removingReactions("220c3c8d-398b-409e-adc3-febcef049615").then((r) => console.log(r));


// you just can delete the reaction if the reaction was create by you


// reaction_counts: { lov: 1, like: 2, love: 4 },
// reaction_scores: { lov: 1, like: 2, love: 4 },


// reaction_counts: { love: 4, lov: 1, like: 2 },
//     reaction_scores: { lov: 1, like: 2, love: 4 },