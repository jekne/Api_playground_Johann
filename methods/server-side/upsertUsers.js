import serverClient from './client.js';

const userArray = [
  { id: "thierry" },
  { id: "tommaso" },
  { id: "bill5" },
  { id: "bill6" },
  { id: "bill7" },
];

const upsertMany = async (users) => {
  return await serverClient.upsertUsers(userArray);
};

const upsertOne = async (user_id) => {
  return await serverClient.upsertUser({ id: user_id ,role:"admin"});
};



const makeAdmin = async (user_id) => {
  return await serverClient.upsertUser({
    id: user_id,
    role: "user",
    text:" this is Nice!",
    message:"great",
    test:"test",
    name:"Andre"
  });
};

//OBS: I can pass new message, text or new strings...
// upsertMany(userArray).then((r) => console.log(r));
// makeAdmin("johann8").then((r) => console.log(r));
upsertOne("Johann").then((r)=>console.log(r))

//Obs: If the name already exist, 404 

// const updateResponse = async(id)=>{
// return await chatClient.upsertUser({ 
//   id: userID, 
//   role: 'admin', 
//   book: 'dune'
// })
// }
// console.log(" updateresponse",updateResponse("first"))
// // user object is now {id: userID, role: 'admin', book: 'dune'}
// updateResponse("first").then((r) => console.log(r));

// const destroy = await client.deleteUser(userID, {
//   mark_messages_deleted: false,
// });

  // //delete user using delete many endpoint
    // return await serverClient.deleteUsers(["test-user2"], {
    //   delete_conversation_channels: false,
    //   user: "hard",
    //   messages: "hard",
    // });

// console.log(" destroy", destroy)

// const doTheThing = async () => {
//   try {
   

//     // // get channel instance
//     // const channel = serverClient.channel("messaging", "test-channel-solbeg-6");

//     // //   send message
//     // return await channel.sendMessage({
//     //   text: "Stream message beta",
//     //   user: { id: "test-user1" },
//     // });

//     // // // add reaction
//     // return await channel.sendReaction("058e18d6-c2f9-46f8-a2da-c8759a49ddde", {
//     //   type: "like",
//     //   user_id: "test-user2",
//     // });

//     // //delete user using delete many endpoint
//     return await serverClient.deleteUsers(["Johann"], {
//       delete_conversation_channels: false,
//       user: "soft",
//       messages: "hard",
//     });

  
//     // return await serverClient.search(
//     //   { members: { $in: ["test-user1"] } },
//     //   "beta"
//     // );
//   } catch (error) {
//     console.log("error >>>", error);
//   }
// };

// doTheThing().then((r) => console.log(r));