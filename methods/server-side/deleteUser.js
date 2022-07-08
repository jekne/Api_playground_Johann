import serverClient from './client.js';

const deleteManyUsers = async () => {
    try {
      //delete user using delete many endpoint
      return await serverClient.deleteUsers(["Johann5"], {
        delete_conversation_channels: false,
        user: "soft",
        messages: "hard",
      });
    } catch (error) {
      console.log("error >>>", error);
    }
  };
  
//   deleteManyUsers().then((r) => console.log(r));

  //OBS: Once a user has been deleted, it cannot be un-deleted and the user_id cannot be used again. If I create user johann and delete johann, it is not possible to create anpother Johann.


  //Delete a specific User (One user per time)
const destroySpecificUser = async ()=>{
    try {
      const destroy = await serverClient.deleteUser("will2", {
        mark_messages_deleted: true,
    });
    } catch (error) {
        console.log("error >>>", error);
        
    }
}
console.log(" the destroy sepcific", destroySpecificUser("will2"))
destroySpecificUser().then((r)=> console.log(r))

// response: the destroy sepcific Promise { <pending> } undefined , but delete the user



  


  //following the snippet of Deleting Many Users (https://getstream.io/chat/docs/javascript/update_users/?language=javascript&q=reactions), it is possible to delete but appears as undefined, on the dashboard is it deleted

//   const deleteUser = async () => {
//     try {
//   let response = await serverClient.deleteUsers(['Johann3', 'Johann4'], {
//     user: 'soft',
//     messages: 'hard',
// });

// response = await serverClient.getTask(response['task_id']);

// if(response['status'] === 'completed') {
//     // success!
// }

//     } catch (error) {
//       console.log("error >>>", error);
//     }
//   };
//   deleteUser().then((r) => console.log(r));