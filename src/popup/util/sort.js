import { getDelayedDays, getNextReviewTime } from "./utils";

const reverse = (sorter) => {
  return (p1, p2) => -sorter(p1, p2);
};

const problemReviewTimeComparator = (p1, p2) => {
  return getNextReviewTime(p1).valueOf() - getNextReviewTime(p2).valueOf();
};

const problemDelayTimeComparator = (p1, p2) => {
  return getDelayedDays(p2).valueOf() - getDelayedDays(p1).valueOf();
};

// functions used to sort problems
export const problemSorters = {
  // reviewTimeSorter:
  sortByReviewTimeDesc: reverse(problemReviewTimeComparator),
  sortByReviewTimeAsc: problemReviewTimeComparator,
  sortByDelayHoursDesc: problemDelayTimeComparator,
  sortByDelayHoursAsc: reverse(problemDelayTimeComparator),
};

export const problemSorterArr = [
  problemSorters.sortByReviewTimeAsc,
  problemSorters.sortByReviewTimeDesc,
  problemSorters.sortByDelayHoursAsc,
  problemSorters.sortByDelayHoursDesc,
];

export const idOf = (sorter) => {
  return problemSorterArr.indexOf(sorter);
};

export const getSorterById = (id) => {
  return problemSorterArr[id];
};

export const descriptionOf = (sorter) => {
  let description;
  switch (sorter) {
    case problemSorters.sortByDelayHoursAsc:
      description = "Sort By Review Delayed Hours (ASC)";
      break;
    case problemSorters.sortByDelayHoursDesc:
      description = "Sort By Review Delayed Hours (DESC)";
      break;
    case problemSorters.sortByReviewTimeAsc:
      description = "Sort By Next Scheduled Due Day (ASC)";
      break;
    case problemSorters.sortByReviewTimeDesc:
      description = "Sort By Next Scheduled Due Day (DESC)";
      break;
    default:
      description = "";
  }
  return description;
};
