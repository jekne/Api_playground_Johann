
import serverClient from "./client.js";


const sendingMessage = async ()=>{
    
 // //   send message
 const channel = serverClient.channel("commerce","Roland_Garros")
 const message = await channel.sendMessage({
  text: 'A new message was created!',
  user:{id:"Johann11"},
  mentioned_users: ["Johann9"],
 


})
return message}

sendingMessage().then((r) => console.log(r));


