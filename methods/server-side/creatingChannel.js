import serverClient from "./client.js";


const creatingChannel = async (user_id)=>{
    try {
         const channel = serverClient.channel('team',"Wimbledom",{
                
            name: 'Wimbledom',
                created_by_id: user_id,
                // members: ['johann11', 'johann8'],
                // image:"newimage",
         
            });
          return  await channel.create();
        
    } catch (error) {
        console.log("error >>>", error);
        
    }
}

creatingChannel("Johann").then((r) => console.log(r));

// Creating a Channel for a List of Members
const creatingChannelist = async ()=>{
    try {
        const channel = serverClient.channel('commerce',{
            members: ['will1', 'johann9'],
        });
     return   await channel.create();
    } catch (error) {
        console.log("error >>>", error);
        
    }
}

// creatingChannelist().then((r) => console.log(r));

// it is not creating a channel with a list of users??????

//Watching channel
const watchingChannel = async ()=>{
    try {
        const channel = serverClient.channel("commerce","Roland_Garros")
          
        const state = await channel.watch();
        return state
    } catch (error) {
        console.log("error >>>", error);
        
    }
}

// watchingChannel().then((r) => console.log(r));



//Stop Watching a Channel
const stopWatchingChannel = async ()=>{
    try {
        const channel = serverClient.channel("commerce","Roland_Garros")
const stopWatching = await channel.stopWatching();
return stopWatching

    } catch (error) {
        console.log("error >>>", error);
        
    }
}

// stopWatchingChannel().then((r) => console.log(r));

//Watching Multiple Channels
const WatchingMultipleChannel = async (user_id)=>{
    try {
        const client = serverClient.channel("commerce","Roland_Garros")
// first let’s create a filter to make messaging channels that include a specific user
const filter = { type: 'messaging', members: { $in: [user_id] } };
// we can also define a sort order of most recent messages first
const sort = { last_message_at: -1 };
 
// finally, we can query for those channels, automatically watching them for the
// currently connected user 
const channels = await client.queryChannels(filter, sort, {watch:true});
return channels

    } catch (error) {
        console.log("error >>>", error);
        
    }
}

// WatchingMultipleChannel().then((r) => console.log(r));

// Having errors TypeError: client.queryChannels is not a function?????
