import serverClient from "./client.js";

const deactivate = async (userID) => {
  try {
    return await serverClient.deactivateUser(userID, {
      mark_messages_deleted: true,
      // created_by_id: "god",
    });
  } catch (error) {
    console.log("error >>>", error);
  }
};

deactivate("jose").then((r) => console.log(r));

const reactivate = async (userID) => {
  try {
    return await serverClient.reactivateUser(userID, {
      restore_messages: true,
      name: "I am back",
      // created_by_id: "god",
    });
  } catch (error) {
    console.log("error >>>", error);
  }
};

// reactivate("jose").then((r) => console.log(r));

//OBS: When we use created_by_id: "god" on deactivate or reactivate the task complete but having a error 404, ask about the created_by_id (Where on the dashboard?)
//OBS2: The user can be deleted before you perform when the user us deactivate, this means that the user will not appear at the dashboard anymore.error 404 'ReactivateUser failed with error: "the user bill4 was deleted"
