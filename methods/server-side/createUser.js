import serverClient from "./client.js";

const creatingUser = async (user_id) => {
  try {
    const updateResponse = serverClient.upsertUser({
      id: user_id,
      name: "crxss_bonex1",
      role: "admin",
      book: "NICE BOOK",
    });
    // user object is now {id: userID, role: 'admin', book: 'dune'}

    return updateResponse;
  } catch (error) {
    console.log("error >>>", error);
  }
};

creatingUser("crxss_bonex1").then((r) => console.log(r));
