import { chatClient } from "./client.js";

const stopWatching = async ()=>{
    try {
        const channel = chatClient.channel("commerce","Roland_Garros")
const stopWatching = await channel.stopWatching();

        return stopWatching
    } catch (error) {
        console.log("error >>>", error)
        
    }
}

stopWatching().then((r)=>console.log(r))

//is it ok to see just the duration, go to the log on the dashboard and you can see.