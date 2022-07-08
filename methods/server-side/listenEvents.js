import serverClient from "./client.js";


// const listeningEvents= async ()=>{
//     try {
        const channel = serverClient.channel("commerce","Roland_Garros")


   const listen=     channel.on('message.deleted', event => {
            console.log('event', event);
            console.log('channel.state', channel.state);
        });
        
        console.log(listen)
//     } catch (error) {
//         console.log("error >>>",error)
//     }
// }

// listeningEvents().then((r)=>console.log(r))