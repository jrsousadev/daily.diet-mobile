import { FEED_COLLECTION } from "@storage/storageConfig";
import { getAllFeeds } from "./getAllFeeds";

import AsyncStorage from "@react-native-async-storage/async-storage";

export async function deleteFeed(id: string) {
  try {
    const storedFeeds = await getAllFeeds();

    const removeFeed = storedFeeds.filter(feed => feed.id !== id);

    const storage = JSON.stringify([...removeFeed]);

    await AsyncStorage.setItem(FEED_COLLECTION, storage);
  } catch (err) {
    throw err;
  }
}
