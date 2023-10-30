import serverClient from "./client.js";

const getMessage = async (messageID) => {
  try {
    const message = await serverClient.getMessage(messageID);
    // console.log("latest reactions", theMessage.text);
    // const mapResult = theMessage.map((channel) => {
    //   console.log(channel.data.name, channel.cid);
    // });
    return message;
  } catch (error) {
    console.log("error >>>", error);
  }
};

getMessage("77f4098a-8bcf-43d2-ae22-65df342f46b4").then((r) => console.log(r));

//I need the spcefic Id 220c3c8d-398b-409e-adc3-febcef049615 found on the dashboard
//not working with Johann11??? I think it is normal
// f003871a-a5a3-4355-8831-2730a7e153d9
// 91703799-336e-4572-9e85-26c67e562811
