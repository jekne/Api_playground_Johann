import serverClient from "./client.js"

// To check your permissions version (server side only)
const { app } = await serverClient.getAppSettings()
console.log(app.permission_version)


