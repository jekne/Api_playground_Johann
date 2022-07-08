import serverClient from "./client.js";

const uploadFileImage = async ()=>{
    try {
        const channel = serverClient.channel("commerce","Roland_Garros")
        const promises = [
            channel.sendImage(
                fs.createReadStream('./helloworld.jpg'),
                'hello_world1.jpg',
            ),
            channel.sendImage(
                fs.createReadStream('./helloworld.jpg'),
                'hello_world2.jpg',
            ),
        ];
        
        const results = await Promise.all(promises);
        
        const attachments = results.map(response => {
            return {
                type: 'image',
                thumb_url: response.file,
                asset_url: response.file,
            };
        });
        
        const response = await channel.sendMessage({
            text: 'Check out what I have uploaded in parallel',
            attachments,
        });
        
        expect(response.message.attachments).to.equal(attachments);
      
        
     
    } catch (error) {
        console.log("error >>>", error);
        
    }
}

uploadFileImage().then((r) => console.log(r));

//ReferenceError: fs is not defined      /what it is fs it is package file system
//expect parting of jest
//Still not working same error
