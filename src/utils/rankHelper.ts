import { advertisementMeta } from "@/types";

const RANKING_WEIGHT = 0.44;

//纯函数
export const getRankedAds = (ads: advertisementMeta[]): advertisementMeta[] => {
  return [...ads].sort((a, b) => {
    const scoreA =
      (a.price || 0) + ((a.price || 0) + (a.clickCount || 0)) * RANKING_WEIGHT;
    const scoreB =
      (b.price || 0) + ((b.price || 0) + (b.clickCount || 0)) * RANKING_WEIGHT;
    return scoreB - scoreA;
  });
};
