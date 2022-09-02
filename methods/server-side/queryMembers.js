import serverClient from "./client.js";

const queryMebers = async () => {
  try {
    const channel = serverClient.channel(
      "groupchat",
      "cea4546d-86ad-4889-0f94-06eac8cc829d"
    );
    console.log("CHANNELS", channel);
    // query all the members
    channel.queryMembers({});
  } catch (error) {
    console.log("Error >>>", error);
  }
};

queryMebers().then((r) => console.log(r));
