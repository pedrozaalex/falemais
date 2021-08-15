import { useState, useEffect } from "react";
import { fetchWrapper } from "../helpers/fetchWrapper";
import { Region } from "../interfaces/Regions";

export default function useRegions() {
  const [regions, setRegions] = useState<Region[] | null>(null);

  useEffect(() => {
    fetchWrapper
      .get("/api/regions")
      .then((res) => setRegions(res))
      .catch(() => setRegions(null));
  }, []);

  return regions;
}
