import { Allergies } from '../enums/Allergies';
import { Currency } from '../enums/Currency';
import { FoodGroup } from '../enums/FoodGroup';
import { Season } from '../enums/Season';

export interface Item {
  name: string;
  type: string;
  foodGroup?: FoodGroup;
  description: string;
  alergies?: Allergies[];
  taste?: string;
  season?: Season;
  weightInKg: number;
  url: string;
  stock: number;
  price: number;
  currency: Currency;
  reviews: {
    star: number;
    reviewers: string[];
  };
  order: number;
}
