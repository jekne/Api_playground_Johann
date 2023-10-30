import { chatClient } from "./client.js";
import { StreamChat } from "stream-chat";
const enableTeams = async (type, channel_id, members, name) => {
  try {
    // Enable multi-tenant in app settings.
    const client = new StreamChat(
      "9aeeanam46wq",
      "24bvgzgh7844ae2geby63rw7r2f7cy637cjavtnvwcqb8kjaxf5d4pksqfamaka3"
    );
    const enable = await client.updateAppSettings({
      multi_tenant_enabled: true,
    });

    return enable;
  } catch (error) {
    console.log("error >>>", error);
  }
};

enableTeams().then((r) => console.log(r));
