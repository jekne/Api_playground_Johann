import { chatClient } from "./client.js";

const unreadMessagesPerChannel = async () => {
  try {
    const channel = chatClient.channel(
      "messaging",
      "test_unread_counts_1f41aacb-72a2-4fbf-b0a2-b495c630324d"
    );
    const count = await channel.countUnread();
    console.log("message count = ", count);
    // console.log(
    //   "returns the unread count _________________________",
    //   count.me.total_unread_count
    // );
    return count;
  } catch (e) {
    console.log("error >>>", e);
  }
};

unreadMessagesPerChannel().then((r) => console.log(r));
