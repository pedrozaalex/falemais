export interface Region {
  id: number;
  cities: string[];
  ddd: number;
  costs: { [ddd: number]: number };
}
