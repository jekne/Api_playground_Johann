import serverClient from "./client.js";

const watchinChannel = async () => {
  try {
    const channel = serverClient.channel("messaging", "learning-React-SDKUI");
    return await channel.watch();
  } catch (error) {
    console.log("error >>>", error);
  }
};

watchinChannel().then((r) => console.log(r));

//watcher count: 1 why?
//use   channel.query
// "messaging:learning-React-SDKUI";
