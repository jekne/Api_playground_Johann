import { chatClient } from "./client.js";
import createToken from '../server-side/createToken.js';

const WatchingMultipleChannel = async(user_id)=>{
    try {
        // first let’s create a filter to make messaging channels that include a specific user
const filter = { type: 'commerce', members: { $in: [user_id] } };
// we can also define a sort order of most recent messages first
const sort = { last_message_at: -1 };
 
// finally, we can query for those channels, automatically watching them for the
// currently connected user 
const channels = await chatClient.queryChannels(filter, sort, {watch:true});
return channels
    } catch (error) {
        console.log("error >>>", error)
        
    }
}

WatchingMultipleChannel("johann").then((r)=>console.log(r))



// watcher_count: 2,