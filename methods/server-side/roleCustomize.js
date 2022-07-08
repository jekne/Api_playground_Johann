import serverClient from "./client.js";

const customizeRole = async()=>{
    try {
       return await serverClient.partialUpdateUser({id: "johann", set: {role: "special_agent"}})
        
    } catch (error) {
        console.log("error >>>", error)
        
    }
}

customizeRole().then((r)=>console.log(r))


//await client.partialUpdateUser({id: "james_bond", {set: {role: "special_agent"}}})

//If i tried to place a new role (like special_agent), show an error : 'UpdateUsersPartial failed with error: "role "special_agent" provided but not defined"',
