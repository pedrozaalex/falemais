import { useState, useEffect } from "react";
import { fetchWrapper } from "../helpers/fetchWrapper";
import { Region } from "../interfaces/Regions";

export function useRegions(selectedDDD: number | undefined) {
  const [regions, setRegions] = useState<Region[]>([]);
  const [callableOptions, setCallableOptions] = useState<number[]>([]);

  useEffect(() => {
    async function fetchRegions() {
      const res = await fetchWrapper.get("/api/regions");
      setRegions(res);
    }

    fetchRegions();
  }, []);

  useEffect(() => {
    if (regions && regions.length) {
      const selectedRegion = regions.find((r) => r.ddd === selectedDDD);
      const available = selectedRegion.costs.map((c) => c.ddd);

      setCallableOptions(available);
    }
  }, [selectedDDD]);

  return { regions, callableOptions };
}
