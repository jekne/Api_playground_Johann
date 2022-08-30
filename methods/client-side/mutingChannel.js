import { chatClient } from "./client.js";

// const reply = await client.setUser(user, token);

// // reply.me.channel_mutes contains the list of channel mutes
// console.log(reply.me.channel_mutes);

// const channel = client.channel("messaging", "channel-id");

// // mute channel for current user
// await channel.mute();

// // mute channel for a user (server-side)
// await channel.mute({ user_id: userId });

// // mute a channel for 2 weeks
// await channel.mute({ expiration: moment.duration(2, "weeks") });

// // mute a channel for 10 seconds
// await channel.mute({ expiration: 10000 });

// // check if channel is muted
// // { muted: true | false, createdAt: Date | null, expiresAt: Date | null}
// channel.muteStatus();

const mutingChannel = async () => {
  try {
    const channel = chatClient.channel("team", "company-3926-location-1609959");
    //console.log("CHANNELS", channel);

    //const reply = await chatClient.setUser(user, token);
    // console.log("replyyyyyyyy", reply.me.channel_mutes);

    // const muted = channel.muteStatus();
    // console.log("MUTED>>>>>", muted);
    // // mute channel for current user
    const muteUser = channel.mute();
    // console.log("MUTED  USER>>>>>", muteUser);
    return muteUser;

    // mute channel for a user (server-side)

    // return channel.mute({ user_id: userId });
  } catch (error) {
    console.log("error >>>", error);
  }
};
// create a new channel of type “livestream” with name “watch-this-channel”
mutingChannel().then((r) => console.log(r));

//channel id = team:company-3926-location-1609959
