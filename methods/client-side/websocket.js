import { chatClient,token } from "./client.js";
import createToken from '../server-side/createToken.js';

const websocket =async ()=>{
    try {      
// ✅ You should disconnect user once you are done with chatClient
const [chatClient, setChatClient] = useState(null);

useEffect(() => {
  const initChat = async () => {
    const client = StreamChat.getInstance('api_key');
    // open the WebSocket connection to start receiving events
    await client.connectUser({ id: 'user_id' }, 'user_token');
    setChatClient(client);
  };
  
  initChat();
  
  // close the WebSocket connection when component dismounts
  return () => chatClient.disconnectUser();
}, []);

if (!chatClient) return null;

<Chat client={chatClient}>{/** children of Chat component*/}</Chat>;


    } catch (error) {
      console.log("error >>>",error)  
    }
}
websocket().then((r)=>console.log(r))