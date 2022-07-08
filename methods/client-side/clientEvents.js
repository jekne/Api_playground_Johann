import { chatClient } from "./client.js";

const clientEvents = async ()=>{
    try {
        
        // subscribe to all client events and log the unread_count field
chatClient.on(event => {
	if (event.total_unread_count !== null) {
		console.log(`unread messages count is now: ${event.total_unread_count}`);
	}
 
	if (event.unread_channels !== null) {
		console.log(`unread channels count is now: ${event.unread_channels}`);
	}
});

// the initial count of unread messages is returned by client.connectUser
const user = await chatClient.connectUser(user, userToken);
console.log(`you have ${user.me.total_unread_count} unread messages on ${user.me.unread_channels} channels.`);

    } catch (error) {
        console.log("error >>>",error)
    }
}

clientEvents().then((r)=>console.log(r))