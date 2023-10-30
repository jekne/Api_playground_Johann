import { chatClient } from "./client.js";

const unreadTest = async () => {
  try {
    const channel = chatClient.channel(
      "messaging",
      "test_unread_counts_1f41aacb-72a2-4fbf-b0a2-b495c630324d"
    );
    const toWatch = await await channel.watch();
    console.log("CHANNEL STATE READ ", channel.state.read);

    return toWatch;
  } catch (e) {
    console.log("error >>>", e);
  }
};

unreadTest().then((r) => console.log(r));

// const channel = client.channel("messaging", "test");
// await channel.watch();

// console.log(channel.state.read);

//{ '2fe6019c-872f-482a-989e-ecf4f786501b':
//  { user:
//    {
//      id: '2fe6019c-872f-482a-989e-ecf4f786501b',
//      role: 'user',
//      created_at: '2019-04-24T13:09:19.664378Z',
//      updated_at: '2019-04-24T13:09:23.784642Z',
//      last_active: '2019-04-24T13:09:23.781641Z',
//      online: true
//    },
//    last_read: 2019-04-24T13:09:21.623Z
//  }
//}
