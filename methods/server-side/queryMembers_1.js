import serverClient from "./client.js";

const findByName = async () => {
  try {
    const response = await serverClient.queryUsers({
      name: { $autocomplete: "crxs" },
    });
    return response;
  } catch (error) {
    console.log("Error >>>", error);
  }
};

findByName().then((r) => console.log(r));
