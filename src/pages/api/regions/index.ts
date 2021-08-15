import { NextApiRequest, NextApiResponse } from "next";
import { Region } from "../../../interfaces/Regions";

const servedLocations: Region[] = [
  {
    ddd: 11,
    cities: ["Região Metropolitana"],
    costs: {
      11: 0.19,
      16: 0.19,
      18: 0.19,
    },
  },
  {
    ddd: 16,
    cities: ["Araraquara", "Franca", "Ribeirão Preto", "São Carlos"],
    costs: {
      11: 0.19,
      16: 0.19,
      17: 0.19,
    },
  },
  {
    ddd: 17,
    cities: ["Catanduva", "Barretos", "São José do Rio Preto", "Votuporanga"],
    costs: {
      16: 0.19,
      17: 0.19,
      18: 0.19,
    },
  },
  {
    ddd: 18,
    cities: ["Presidente Prudente", "Araçatuba", "Birigui", "Assis"],
    costs: {
      11: 0.19,
      17: 0.19,
      18: 0.19,
    },
  },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json(servedLocations);
}
