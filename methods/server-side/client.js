import dotenv from 'dotenv';
import { StreamChat } from 'stream-chat';

dotenv.config({path: './.env'});

const app_key = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];

//Cinstead to use .env
// const app_key = "chxfbypw4qgn"
// const secret ="wy5fev32cfry2rxbdgghsaqrr5eybu7yutaxvfjvywkbcq9nme8n9xaynn9xaf3z"

// const StreamChat = require("stream-chat").StreamChat;  // you may see this  - replaced by getInstance() below

// For server-side auth the client uses app_key and secret
const serverClient = StreamChat.getInstance(app_key, secret);


const chatClient = StreamChat.getInstance(app_key);

export default serverClient;
