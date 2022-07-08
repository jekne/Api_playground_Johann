const app_key = "z2jhzngs67pg";
const secret =
  "cy9k5g87bqqbeyvq22w79w42c63jrtwb9n4d7rxuxath928wvdrgq9prjsrvdje7";

const StreamChat = require("stream-chat").StreamChat;

const serverClient = StreamChat.getInstance(app_key, secret);
const chatClient = StreamChat.getInstance(app_key);
// const user_id = "test1-test1";
// const token = serverClient.createToken(user_id);

const doTheThing = async () => {
  try {
    // const connectUser = await chatClient.connectUser({ id: user_id }, token);

    // create users
    // return await serverClient.upsertUsers([
    //   { id: "test-user1" },
    //   { id: "test-user2" },
    // ]);

    // //create channel
    const channel = serverClient.channel("messaging", {
      members: ["gui", "agata"],
      created_by_id: "gui",
    });
    return await channel.create();

    // // get channel instance
    // const channel = serverClient.channel("messaging", "test-channel-solbeg-6");

    // //   send message
    // return await channel.sendMessage({
    //   text: "Stream message beta",
    //   user: { id: "test-user1" },
    // });

    // // // add reaction
    // return await channel.sendReaction("058e18d6-c2f9-46f8-a2da-c8759a49ddde", {
    //   type: "like",
    //   user_id: "test-user2",
    // });

    // //delete user using delete many endpoint
    // return await serverClient.deleteUsers(["test-user2"], {
    //   delete_conversation_channels: false,
    //   user: "hard",
    //   messages: "hard",
    // });

    // //delete user using delete many endpoint
    // return await serverClient.deleteUsers(["test-user2"], {
    //   user: "hard",
    //   mark_messages_deleted: true, //Delete all of the users messages too
    //   delete_conversation_channels: false, //Delete all 1:1 channels with this user
    //   hard_delete: true, //Hard delete will remove data from everywhere on the server
    // });

    //check if task is completed
    // return await serverClient.getTask(["593a27b2-8bff-4ef6-9206-8503e4f457ce"]);

    // //Check the channel
    // return await channel.query({});

    // //channel search ({filter}, "keyword", {limit, offset})
    return await serverClient.search(
      { members: { $in: ["test-user1"] } },
      "beta"
    );
  } catch (error) {
    console.log("error >>>", error);
  }
};

doTheThing().then((r) => console.log(r));
