// when you truncate the channel you are deleting all the messages without exclude the channel

import serverClient from "./client.js";

const truncateChannel = async ()=>{
    try {

        const channel = serverClient.channel("livestream","watch-this-channel")

        // delete all the messages at once.
       return await channel.truncate();

// Or with parameters:
// await channel.truncate({
//   'hard_delete': true,
//   'skip_push': false,
//   'message': {
//     'text': 'Dear Everyone. The channel has been truncated.'
//     'user_id': user['id']
//   }
// });

// Setting user_id server side:
// await channel.truncate({
//   'user_id': user['id']
// // 'user_id': user_id
//  });

        
    } catch (error) {
        console.log("Error >>>", error)
        
    }
}

truncateChannel("Johann11").then((r)=>console.log(r))

// it is working with first one, excluding all at once, not with the user_id, need to find out