import { FeedDTO } from "@domain/Feed";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { FEED_COLLECTION } from "@storage/storageConfig";

export async function getAllFeeds() {
  try {
    const storage = await AsyncStorage.getItem(FEED_COLLECTION);

    const feeds: FeedDTO[] = storage ? JSON.parse(storage) : [];

    return feeds;
  } catch (err) {
    throw err;
  }
}
