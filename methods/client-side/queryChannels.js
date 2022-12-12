import { chatClient, user_id } from "./client.js";

const messagingMembers = async (user_id) => {
  // const channel = chatClient.channel("team", "company-3926-location-1609959");
  // a standard and recommended filter

  const filter = {
    // type: "team",
    members: { $in: [user_id] },
    // id: "company-3926-location-1609959",
  };
  const sort = { last_message_at: -1 };
  const result = await chatClient.queryChannels(filter, sort);
  return result;
};

// messagingMembers("63a71ee0-7c83-4e9a-9a5e-4a88d423cbe6").then((r) =>
//   console.log(r)
// );
// console.log(r[0].state.members);

const onlyMeAndMyFriend = async (friend) => {
  // filter for channels with only me and a friend
  const filter = {
    $and: [
      {
        members: {
          $in: ["katie"],
        },
      },
      {
        members: {
          $in: ["george"],
        },
      },
    ],
  };
  const sort = { last_message_at: -1 };
  const result = await chatClient.queryChannels(filter, sort);
  return result;
};

// onlyMeAndMyFriend("george").then((r) => console.log(r));
// app ID: 1203489
// user id: 63a71ee0-7c83-4e9a-9a5e-4a88d423cbe6
// channel id: 17A46A15-4732-4C05-94B0-9767A457364F

// const queryChannels = async (userId) => {
//   const filter = {
//     cid: "messaging:LearningTwo",
//   };
//   const sort = [{ last_message_at: -1 }];

//   const channels = await chatClient.queryChannels(filter, sort, {
//     watch: true, // this is the default
//     state: true,
//   });
//   // const testss = channels.map((channel) => {
//   //   console.log(channel.data.name, channel.cid);
//   // });

//   return channels;
// };
// queryChannels("LearningTwo").then((r) => console.log(r[0]));

// query("d1b44b75-ccd5-4eb0-e474-08daa77d683e").then((r) => console.log(r[0]));

const queryChannels = async (user_id) => {
  const filter = {
    type: "messaging",
    members: { $in: [user_id] },
    id: "26141946",
  };

  const channels = await chatClient.queryChannels(filter, {});

  return channels;
};
queryChannels("24688").then((r) => console.log(r[0]));
