import { chatClient, user_id } from "./client.js";

const paginationReactions = async (messageID)=>{
    try {

        const channel = chatClient.channel("commerce","Roland_Garros")

      // get the first 10 reactions
const response = await channel.getReactions(messageID, { limit: 10 });

// get 3 reactions past the first 10
// const response = await channel.getReactions(messageID, { limit: 3, offset: 10 });


    return response
    } catch (error) {
        console.log("error >>>", error);
        
    }
}

paginationReactions("220c3c8d-398b-409e-adc3-febcef049615").then((r) => console.log(r));


