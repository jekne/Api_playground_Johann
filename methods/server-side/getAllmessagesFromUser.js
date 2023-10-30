import serverClient from "./client.js";

const searchUser = async (userId) => {
  const messages = await serverClient.search(
    { team: { $in: ["eb7f4de8-5f45-4842-b682-f044a74b5862"] } },
    { "user.id": userId }
  );

  return messages;
};

searchUser("d80bc332-99d8-4460-9101-769d81f0cd73").then((r) => console.log(r));
// "4dfe5567-44e0-48db-998e-4fc17501ecd8"
const filters = { members: { $in: ["john"] } };

const search = await serverClient.search(
  filters,
  "supercalifragilisticexpialidocious",
  { limit: 2, offset: 0 }
);
