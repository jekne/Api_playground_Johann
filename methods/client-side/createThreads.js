import { chatClient, user_id } from "./client.js";


const createThreads = async (parentID)=>{
    try {
const channel = chatClient.channel("commerce","Roland_Garros")
        const reply = await channel.sendMessage({
            text: 'Hey, I am replying to a message!',
            parent_id: parentID,
            show_in_channel: false,
        });
        
return reply
    } catch (error) {
        console.log("error >>>", error);
        
    }
}

createThreads("220c3c8d-398b-409e-adc3-febcef049615").then((r) => console.log(r));

//the way it works, when  you have the message you have the id of this message (big number on the dashboard), the tread will reply on the message id.
