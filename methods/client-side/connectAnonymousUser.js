import { StreamChat } from "stream-chat";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const app_key = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];

const chatClient = StreamChat.getInstance(app_key);

const connect = async () => {
  const connectResponse = await chatClient.connectAnonymousUser();
  console.log("CONNECTING AN ANONYMOUS USER >>>>>>>>>>", connectResponse.me);

  // Watch the channel with channel_id "52ccfcf6-ccc0-34e5-aa40-1607c4d5b959"
  const channel = chatClient.channel(
    "livestream",
    "52ccfcf6-ccc0-34e5-aa40-1607c4d5b959"
  );
  await channel.watch();

  // Query messages for the channel
  const messages = await channel.query();
  console.log("MESSAGES IN CHANNEL >>>>>>>>>>", messages);
  return connectResponse;
};

connect();

export { chatClient };
