import { chatClient } from "./client.js";

const paginationChannel = async () =>{
    try {
        // create a new channel of type “livestream” with name “watch-this-channel”
const channel = chatClient.channel("livestream", "watch-this-channel", {}); 
 
// now query the newly created channel for watchers, retrieving the first 5
const result = await channel.query({
   watchers: { limit: 5, offset: 0 },
 });
 
 return result.watchers;

    } catch (error) {
        console.log("error >>>",error)
    }
}

paginationChannel().then((r)=>console.log(r))