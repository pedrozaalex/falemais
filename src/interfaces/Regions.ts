export interface Region {
  cities: string[];
  ddd: number;
  costs: { ddd: number; cost: number }[];
}
