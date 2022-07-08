import serverClient from "./client.js";

const deleteFileImage = async (fileURL)=>{
    try {
        const channel = serverClient.channel("commerce","Roland_Garros")
        // Delete File
const erase = await channel.deleteFile(fileURL);
return erase

// Delete Image
// await channel.deleteImage(imageURL);

     
    } catch (error) {
        console.log("error >>>", error);
        
    }
}

deleteFileImage("Johann9").then((r) => console.log(r));


//'DeleteFile failed with error: "url param missing or invalid"' / Because i dont have the file yet

