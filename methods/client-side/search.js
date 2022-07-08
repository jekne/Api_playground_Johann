import { chatClient, user_id } from "./client.js";


const searchOn = async ()=>{
    try {
// const channel = chatClient.channel("commerce","Roland_Garros")
const filters = { members: { $in: ['Johann11'] } };

const search = await chatClient.search(
   filters,
   'update',
   { limit: 2, offset: 0 },
);

        
return search
    } catch (error) {
        console.log("error >>>", error);
        
    }
}

searchOn("220c3c8d-398b-409e-adc3-febcef049615").then((r) => console.log(r.results));

//the way it works, when  you have the message you have the id of this message (big number on the dashboard), the tread will reply on the message id.filter channel and after fitler  the message
//results after the console log i have the output clear
