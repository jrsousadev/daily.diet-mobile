import { FeedDTO } from "@domain/Feed";
import { FEED_COLLECTION } from "@storage/storageConfig";
import { getAllFeeds } from "./getAllFeeds";

import AsyncStorage from "@react-native-async-storage/async-storage";

export async function createFeed(newFeed: FeedDTO) {
  try {
    const storedFeeds = await getAllFeeds();

    const storage = JSON.stringify([...storedFeeds, newFeed]);

    await AsyncStorage.setItem(FEED_COLLECTION, storage);
  } catch (err) {
    throw err;
  }
}
