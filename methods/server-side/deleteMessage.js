import serverClient from "./client.js";

const deleteMessage = async (messageID) => {
  try {
    const erase = await serverClient.deleteMessage(messageID);
    return erase;

    // await client.deleteMessage(messageID, true);
  } catch (error) {
    console.log("error >>>", error);
  }
};

deleteMessage("bcd9d576-a3e4-48de-9a92-28bd62aa9758").then((r) =>
  console.log(r)
);

//Using true you hard delete the message, remove from the dashboard
