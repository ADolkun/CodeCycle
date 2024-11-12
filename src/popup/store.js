import { problemSorters } from "./util/sort";

export const store = {
  needReviewProblems: null,
  reviewScheduledProblems: null,
  completedProblems: null,
  toReviewPage: 1,
  scheduledPage: 1,
  completedPage: 1,
  toReviewMaxPage: null,
  scheduledMaxPage: null,
  completedMaxPage: null,
  tooltipTriggerList: null,
  tooltipList: null,
  easyIntv: [0, 1, 3, 4],
  mediumIntv: [0, 1, 3, 4],
  hardIntv: [0, 1, 2, 3, 4],
  problemSortBy: problemSorters.sortByReviewTimeAsc,
  isCloudSyncEnabled: false,
};
