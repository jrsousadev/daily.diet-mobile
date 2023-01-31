import moment from "moment";

export type FeedDTO = {
  createdAt: Date;
  name: string;
  description: string;
  insideDiet: boolean;
};

export type ObjectFeedList = {
  date: Date;
  data: FeedDTO[];
};

export const formattedFeedsToDate = (data: FeedDTO[]) => {
  const dates: string[] = [];
  const arrayFormatted: any[] = [];

  data.forEach((feed) => {
    const dateInString = moment(feed.createdAt).format("YYYY-MM-DD");

    if (!dates.includes(dateInString)) {
      dates.push(dateInString);
    }
  });

  dates.forEach((dateString) => {
    let object: any = {};
    object.date = new Date(`${dateString}T10:00:00`);
    object.data = [];

    data.forEach((feed) => {
      if (moment(feed.createdAt).format("YYYY-MM-DD") === dateString) {
        object.data.push(feed);
      }
    });

    arrayFormatted.push(object);
  });

  const sortedArray = arrayFormatted.sort((a, b) => {
    const dateA: any = new Date(a.date);
    const dateB: any = new Date(b.date);

    return dateB - dateA;
  });

  return sortedArray;
};

export const MeasureDiet = (data: FeedDTO[]) => {
  const totalFeeds = data.length;
  const inDiet: Number[] = [];
  const notDiet: Number[] = [];

  data.forEach((feed) => {
    if (feed.insideDiet) {
      inDiet.push(1);
    } else {
      notDiet.push(1);
    }
  });

  const percentage = (inDiet.length / totalFeeds) * 100;

  const isNan = isNaN(percentage);

  return {
    percentage: isNan ? 0 : percentage.toFixed(2),
    notDiet: notDiet.length,
    inDiet: inDiet.length,
  };
};
