import moment from "moment";

export type FeedDTO = {
  createdAt: Date;
  name: string;
  description: string;
  insideDiet: boolean;
};

export type ObjectFeedList = {
  title: string;
  data: FeedDTO[];
};

export const formattedFeedsToDate = (data: FeedDTO[]) => {
  const dates: string[] = [];
  const arrayFormatted: any[] = [];

  data.forEach((feed) => {
    const date = moment(feed.createdAt).format("DD.MM.YYYY");

    if (!dates.includes(date)) {
      dates.push(date);
    }
  });

  dates.forEach((dateString) => {
    let object: any = {};
    object.title = dateString;
    object.data = [];

    data.forEach((feed) => {
      if (moment(feed.createdAt).format("DD.MM.YYYY") === dateString) {
        object.data.push(feed);
      }
    });

    arrayFormatted.push(object);
  });

  return arrayFormatted;
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
    percentage: isNan ? 0 : percentage,
    notDiet: notDiet.length,
    inDiet: inDiet.length,
  };
};
