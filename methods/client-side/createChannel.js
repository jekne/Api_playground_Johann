import { chatClient, user_id } from "./client.js";

const createChannel = async (type, id, members, name) => {
  const channel = chatClient.channel(type, id, {
    members,
    name,
  });
  return channel.create();
};

// createChannel(
//   "messaging",
//   "testing-playground-03",
//   ["george"],
//   "snoopys secret channel"
// ).then((r) => console.log(r));



const createChannelJohannWay = async()=>{
  try {

    const channel = chatClient.channel('livestream', 'watch-this-channel', {
      name: 'created with the purpose of making pagination',
  });
  // Here, 'travel' will be the channel ID
 return    await channel.create();
  
    
  } catch (error) {
    console.log("error >>>",error)
  }
}
 // create a new channel of type “livestream” with name “watch-this-channel”
createChannelJohannWay().then((r)=>console.log(r))
