import serverClient from "./client.js";

const deleteMessage = async (messageID)=>{
    try {
 const erase = await serverClient.deleteMessage(messageID);
 return erase

// await client.deleteMessage(messageID, true);
     
    } catch (error) {
        console.log("error >>>", error);
        
    }
}

deleteMessage("a27861e9-6a8b-4af2-b1f3-0b5f08ad6a60").then((r) => console.log(r));

//Using true you hard delete the message, remove from the dashboard