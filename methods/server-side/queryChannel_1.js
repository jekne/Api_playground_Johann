import serverClient from "./client.js";

const queryAllteams = async () => {
  // const channel = chatClient.channel("team", "company-3926-location-1609959");

  const result = await serverClient.queryChannels({ team: {} });

  return result;
};

queryAllteams().then((r) => console.log(r));

// await client.queryChannels({ team: {} });
