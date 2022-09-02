import serverClient from "./client.js";

const searchUser = async (userId) => {
  const messages = await serverClient.search(
    { team: { $in: ["c8da6346-a683-4718-8040-409a728cd0dd"] } },
    { "user.id": userId }
  );

  return messages;
};

searchUser("a1cdcadc-6b97-421d-a5c0-f9587fac0be1").then((r) => console.log(r));
// "4dfe5567-44e0-48db-998e-4fc17501ecd8"
