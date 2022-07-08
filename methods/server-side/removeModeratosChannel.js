import serverClient from "./client.js";

const removeModerator = async ()=>{
    try {
        const channel = serverClient.channel("commerce", "Roland_Garros")
      return  await channel.demoteModerators(["thierry"]);

        
    } catch (error) {
        console.log("error >>>", error)
        
    }
}

removeModerator().then((r)=>console.log(r))