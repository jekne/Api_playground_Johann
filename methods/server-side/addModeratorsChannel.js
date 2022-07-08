import serverClient from "./client.js";


const addModerators = async ()=>{
    try {
        const channel = serverClient.channel("commerce", "Roland_Garros");
return await channel.addModerators(["thierry", "tommaso"])

    } catch (error) {
        console.log("error >>>", error)
        
    }
}

addModerators().then((r)=>console.log(r))
