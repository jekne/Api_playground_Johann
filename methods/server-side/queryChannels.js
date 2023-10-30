import serverClient from "./client.js";

const messagingMembers = async (user_id) => {
  // const channel = chatClient.channel("team", "company-3926-location-1609959");

  // a standard and recommended filter

  const filter = {
    type: "messaging",
    // members: { $in: [user_id] },
    id: "!members-blci7Ok2fvc3sCsD7Zrr46rb0oVsxpr4HjvUG5XWXk4",
  };
  // const sort = { last_message_at: -1 };
  // const result = await serverClient.queryChannels(filter, sort);
  const result = await serverClient.queryChannels(filter);
  return result;
};

messagingMembers().then((r) => console.log(r));
// console.log(r[0].state.members);

const onlyMeAndMyFriend = async (friend) => {
  // filter for channels with only me and a friend
  const filter = {
    $and: [
      {
        members: {
          $in: [
            "533a062a-6ed3-11ed-8e8d-0e2a3b146184",
            "dc3a0abf-6f17-11ed-8e8d-0e2a3b146184",
          ],
        },
      },
      // {
      //   members: {
      //     $in: ["dc3a0abf-6f17-11ed-8e8d-0e2a3b146184"],
      //   },
      // },
    ],
  };
  const sort = { last_message_at: -1 };
  const result = await serverClient.queryChannels(filter, sort);
  const testss = result.map((channel) => {
    console.log(channel.data.name, channel.cid);
  });
  return testss;
};

// onlyMeAndMyFriend().then((r) => console.log(r));

const query = async (userId) => {
  const channels1 = await serverClient.queryChannels(
    // {
    // members: { $in: [userId] },
    // team: { $in: [input.tenantId] },
    // disabled: true,
    // }
    // {}
    // { user_id: input.userId }
    { members: { $in: [userId] } }
  );
  console.log(query);
  return channels1;
};
// query("d1b44b75-ccd5-4eb0-e474-08daa77d683e").then((r) => console.log(r[0]));

const queryChannels = async (user_id) => {
  const filter = {
    type: "player-comments",
    // members: { $in: [user_id] },
    // id: "26141946",
  };
  // const sort = [{ last_message_at: -1 }];

  const channels = await serverClient.queryChannels(filter, {
    // watch: true, // this is the default
    // state: true,
  });
  // const testss = channels.map((channel) => {
  //   console.log(channel.data.name, channel.cid);
  // });

  return channels;
};
// queryChannels().then((r) => console.log(r[0]));

//USER-ID = 24688
//CHANNEL_ID = 26141946

// "messaging:!members-blci7Ok2fvc3sCsD7Zrr46rb0oVsxpr4HjvUG5XWXk4";
// "'messaging:!members-bptzaJT0h_bFJgWcuepyEOASHEBTdynR7l6u1Io4jvI'";
// created_at: '2022-12-15T09:08:12.967787Z',
//     updated_at: '2022-12-15T09:08:29.16292Z',

//  created_at: '2022-11-28T12:47:20.921478Z',
//     updated_at: '2022-11-28T12:47:20.921478Z',
