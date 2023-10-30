import { chatClient } from "./client.js";

const undeleteUsers = async () => {
  try {
    const response = chatClient.restoreUsers(["ioana"], ["michalvankodev"]);

    return response;
  } catch (error) {
    console.log("Error>>>", error);
  }
};

undeleteUsers().then((r) => console.log(r));

//
// okzQFFKkNsTIgxrmVteQrpGCOot2;
// GLAv3LcnpChFEP4lDOMPXMgHrBj2;
// LWdxPSdwxrXimmhqrNXIHVaFfCT2;
