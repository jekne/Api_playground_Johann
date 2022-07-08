import serverClient from "./client.js";

const deleteReaction = async (messageID)=>{
    try {
        const channel = serverClient.channel("commerce","Roland_Garros")
        // Delete reaction
const erase = await channel.deleteReaction(messageID, 'love');
return erase




     
    } catch (error) {
        console.log("error >>>", error);
        
    }
}

deleteReaction("220c3c8d-398b-409e-adc3-febcef049615").then((r) => console.log(r));




