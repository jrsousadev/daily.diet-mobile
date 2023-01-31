import { getAllFeeds } from "./getAllFeeds";

export async function getOneFeed(id: string) {
  try {
    const storedFeeds = await getAllFeeds();

    const feed = storedFeeds.find((feed) => feed.id === id);

    return feed;
  } catch (err) {
    throw err;
  }
}
