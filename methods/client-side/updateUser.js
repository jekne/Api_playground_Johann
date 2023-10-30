import { chatClient } from "./client.js";

const updateUser = async () => {
  try {
    const add = await chatClient.partialUpdateUser({
      id: "johann1",
      userName: "johann123",
    });

    return add;
  } catch (error) {}
};
updateUser().then((r) => console.log(r));
