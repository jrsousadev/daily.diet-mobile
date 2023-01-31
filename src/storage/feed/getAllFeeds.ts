import { FeedDTO } from "@domain/Feed";
import { FEED_COLLECTION } from "@storage/storageConfig";

import AsyncStorage from "@react-native-async-storage/async-storage";

const data = [
  {name: 'Banana', isDiet: true},
  {name: 'Melão', isDiet: true},
  {name: 'Mamão', isDiet: false},
  {name: 'Uva', isDiet: true},
  {name: 'Laranja', isDiet: true},
  {name: 'Cajú', isDiet: true},
  {name: 'Melancia', isDiet: true},
  {name: 'Pêra', isDiet: false},
]

export async function getAllFeeds() {
  try {
    const storage = await AsyncStorage.getItem(FEED_COLLECTION);

    const feeds: FeedDTO[] = storage ? JSON.parse(storage) : [];

    return feeds;
  } catch (err) {
    throw err;
  }
}
