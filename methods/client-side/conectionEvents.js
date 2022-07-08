import { chatClient } from "./client";

const conectionEvent = async () =>{
    try {
        chatClient.on('connection.changed', e => {
            if (e.online) {
                console.log('the connection is up!');
            } else {
                console.log('the connection is down!');
            }
        });
        
    } catch (error) {
        console.log("error >>>", error)
    }
}

conectionEvent().then((r)=>console.log(r))