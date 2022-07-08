import { chatClient } from "./client.js";


const listeningEvents= async ()=>{
    try {
        const channel = chatClient.channel("commerce","Roland_Garros")

        //You can hook into specific events

        channel.on('message.deleted', event => {
            console.log('event', event);
            console.log('channel.state', channel.state);
        });

        // or You can also listen to all events at once

        // channel.on(event => {
        //     console.log('event', event);
        //     console.log('channel.state', channel.state);
        // });
        
    } catch (error) {
        console.log("error >>>",error)
    }
}

listeningEvents().then((r)=>console.log(r))