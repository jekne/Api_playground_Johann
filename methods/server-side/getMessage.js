import serverClient from "./client.js";

const getMessage = async (messageID)=>{
    try {
      return  await serverClient.getMessage(messageID);
        
    } catch (error) {
        console.log("error >>>", error);
        
    }
}

getMessage("220c3c8d-398b-409e-adc3-febcef049615").then((r) => console.log(r));

//I need the spcefic Id 220c3c8d-398b-409e-adc3-febcef049615 found on the dashboard
//not working with Johann11??? I think it is normal