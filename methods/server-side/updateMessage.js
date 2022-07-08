import serverClient from "./client.js";

const updateMessage = async ()=>{
    try {
        const message = { id: "220c3c8d-398b-409e-adc3-febcef049615", user_id: "Johann11", text: 'I am updating the message' };
        const update = await serverClient.updateMessage(message);
        return update
        
    } catch (error) {
        console.log("error >>>", error);
        
    }
}

// updateMessage().then((r) => console.log(r));



//Partial Update
const partialUpdate = async ()=>{
  
try {
    const update = await serverClient.partialUpdateMessage("220c3c8d-398b-409e-adc3-febcef049615",{
        set:{text:"This a partial update!!!"}},{id:"Johann11"} )

    return update  
            
    } catch (error) {
        console.log("error >>>", error);
         }
      
}

partialUpdate().then((r) => console.log(r));

