import serverClient from "./client.js";

const roleManagement = async ()=>{
    try {


     return await serverClient.partialUpdateUser({id: "johann", set: {role: "special_agent"}})
   


    } catch (error) {
        console.log("error >>>", error)
        
    }
}

roleManagement().then((r)=>console.log(r))






//check the documentation it is going with one more bractes//