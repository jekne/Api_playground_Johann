import serverClient from "./client.js";

const onlyMeAndMyFriend = async () => {
  // filter for channels with only me and a friend
  const filter = {
    $and: [
      {
        members: {
          $in: [
            "20975944",
            // "dc3a0abf-6f17-11ed-8e8d-0e2a3b146184",
          ],
        },
      },
    ],
  };
  const sort = { last_message_at: -1 };
  const result = await serverClient.queryChannels(filter, sort);

  const mapResult = result.map((channel) => {
    console.log(channel.data.name, channel.cid);
  });
  return mapResult;
};

onlyMeAndMyFriend().then((r) => console.log(r));
//messaging:!members-blci7Ok2fvc3sCsD7Zrr46rb0oVsxpr4HjvUG5XWXk4
//messaging:!members-bptzaJT0h_bFJgWcuepyEOASHEBTdynR7l6u1Io4jvI
