import { NextApiRequest, NextApiResponse } from "next";
import { Region } from "../../../interfaces/Regions";

const servedLocations: Region[] = [
  {
    ddd: 11,
    cities: ["Região Metropolitana"],
    costs: [
      { ddd: 11, cost: 0.19 },
      { ddd: 16, cost: 0.19 },
      { ddd: 18, cost: 0.19 },
    ],
  },
  {
    ddd: 16,
    cities: ["Araraquara", "Franca", "Ribeirão Preto", "São Carlos"],
    costs: [
      { ddd: 11, cost: 0.19 },
      { ddd: 16, cost: 0.19 },
      { ddd: 17, cost: 0.19 },
    ],
  },
  {
    ddd: 17,
    cities: ["Catanduva", "Barretos", "São José do Rio Preto", "Votuporanga"],
    costs: [
      { ddd: 16, cost: 0.19 },
      { ddd: 17, cost: 0.19 },
      { ddd: 18, cost: 0.19 },
    ],
  },
  {
    ddd: 18,
    cities: ["Presidente Prudente", "Araçatuba", "Birigui", "Assis"],
    costs: [
      { ddd: 11, cost: 0.19 },
      { ddd: 17, cost: 0.19 },
      { ddd: 18, cost: 0.19 },
    ],
  },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json(servedLocations);
}
