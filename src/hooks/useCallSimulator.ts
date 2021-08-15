import { CostsPerPlan } from "../interfaces/CostsPerPlan";
import { Region } from "../interfaces/Regions";

export function useCallSimulator(
  callerDDD: number,
  receiverDDD: number,
  duration: number,
  regions: Region[]
): CostsPerPlan | null {
  if (!callerDDD || !receiverDDD || !regions) return null;

  const callerRegion = regions.find((r) => r.ddd === callerDDD);
  const receiverRegion = callerRegion.costs.find((c) => c.ddd === receiverDDD);

  if (!receiverRegion) return null;

  const costPerMinute = receiverRegion.cost;

  const costs = {
    noFM: costPerMinute * duration,
    fm30cost: Math.max(costPerMinute * 1.1 * (duration - 30), 0),
    fm60cost: Math.max(costPerMinute * 1.1 * (duration - 60), 0),
    fm120cost: Math.max(costPerMinute * 1.1 * (duration - 120), 0),
  };

  return costs;
}
