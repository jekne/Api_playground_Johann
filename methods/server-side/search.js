import serverClient from "./client.js";
const searchOn = async () => {
  try {
    const channel = serverClient.channel("messaging", "learning-React-SDKUI");
    const filters = { members: { $in: ["johann"] } };

    const search = await serverClient.search(filters, "update", {
      limit: 2,
      offset: 0,
    });
    console.log(search);
    return search;
  } catch (error) {
    console.log("error >>>", error);
  }
};

searchOn("2196591010848784753").then((r) => console.log(r.results));

//the way it works, when  you have the message you have the id of this message (big number on the dashboard), the tread will reply on the message id.filter channel and after fitler  the message
//results after the console log i have the output clear
