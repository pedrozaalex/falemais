import { Request, Response } from "express";
import { Region } from "../../../interfaces/Regions";

const servedLocations: Region[] = [
  {
    id: 1,
    cities: ["Região Metropolitana"],
    ddd: 11,
    costs: {
      11: 0.19,
      16: 0.19,
      17: 0.19,
      18: 0.19,
    },
  },
  {
    id: 2,
    cities: ["Araraquara", "Franca", "Ribeirão Preto", "São Carlos"],
    ddd: 16,
    costs: {
      11: 0.19,
      16: 0.19,
      17: 0.19,
      18: 0.19,
    },
  },
  {
    id: 3,
    cities: ["Catanduva", "Barretos", "São José do Rio Preto", "Votuporanga"],
    ddd: 17,
    costs: {
      11: 0.19,
      16: 0.19,
      17: 0.19,
      18: 0.19,
    },
  },
  {
    id: 4,
    cities: ["Presidente Prudente", "Araçatuba", "Birigui", "Assis"],
    ddd: 18,
    costs: {
      11: 0.19,
      16: 0.19,
      17: 0.19,
      18: 0.19,
    },
  },
];

export default function handler(_req: Request, res: Response) {
  res.status(200).json(servedLocations);
}
