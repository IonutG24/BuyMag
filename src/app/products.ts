import { Allergies } from './enums/Allergies';
import { Currency } from './enums/Currency';
import { FoodGroup } from './enums/FoodGroup';
import { Season } from './enums/Season';
import { Item } from './productsModel/items';

export let foods: Item[] = [
  {
    name: 'Chocolate Laptop Hp 15-db1200ny cu procesor AMD Ryzen',
    type: 'food',
    foodGroup: FoodGroup.Food_Group_1,
    description:
      'You think it is a laptop but it tastes better... Chocolate Laptop',
    alergies: [Allergies.Nuts, Allergies.Lactose],
    taste: 'Great',
    season: Season.All,
    weightInKg: 2,
    url: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?cs=srgb&dl=pexels-pixabay-4158.jpg&fm=jpg',
    stock: 100,
    price: 100,
    currency: Currency.Lei,
    reviews: {
      star: 4,
      reviewers: ['andra07', 'test'],
    },
    order: 1,
  },
  {
    name: 'Chocolate Laptop Hp 15-db1200ny cu procesor AMD Ryzen',
    type: 'food',
    foodGroup: FoodGroup.Food_Group_1,
    description:
      'You think it is a laptop but it tastes better... Chocolate Laptop',
    alergies: [Allergies.Nuts, Allergies.Lactose],
    taste: 'Great',
    season: Season.All,
    weightInKg: 2,
    url: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?cs=srgb&dl=pexels-pixabay-4158.jpg&fm=jpg',
    stock: 100,
    price: 100,
    currency: Currency.Lei,
    reviews: {
      star: 4,
      reviewers: ['andra07', 'test'],
    },
    order: 1,
  },
  {
    name: 'Chocolate Laptop Hp 15-db1200ny cu procesor AMD Ryzen',
    type: 'food',
    foodGroup: FoodGroup.Food_Group_1,
    description:
      'You think it is a laptop but it tastes better... Chocolate Laptop',
    alergies: [Allergies.Nuts, Allergies.Lactose],
    taste: 'Great',
    season: Season.All,
    weightInKg: 2,
    url: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?cs=srgb&dl=pexels-pixabay-4158.jpg&fm=jpg',
    stock: 100,
    price: 100,
    currency: Currency.Lei,
    reviews: {
      star: 4,
      reviewers: ['andra07', 'test'],
    },
    order: 1,
  },
  {
    name: 'Chocolate Laptop Hp 15-db1200ny cu procesor AMD Ryzen',
    type: 'food',
    foodGroup: FoodGroup.Food_Group_1,
    description:
      'You think it is a laptop but it tastes better... Chocolate Laptop',
    alergies: [Allergies.Nuts, Allergies.Lactose],
    taste: 'Great',
    season: Season.All,
    weightInKg: 2,
    url: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?cs=srgb&dl=pexels-pixabay-4158.jpg&fm=jpg',
    stock: 100,
    price: 100,
    currency: Currency.Lei,
    reviews: {
      star: 4,
      reviewers: ['andra07', 'test'],
    },
    order: 1,
  },
];
export let stuffs: Item[] = [
  {
    name: 'Hammer of Greed',
    type: 'stuff',

    url: 'https://cdn.pixabay.com/photo/2018/08/01/14/04/gavel-3577254_960_720.jpg',
    description: 'Gold Hammer to show your justice',
    weightInKg: 0.5,
    stock: 1,
    reviews: {
      star: 4,
      reviewers: ['New User', 'Great'],
    },
    price: 80,
    currency: Currency.Euro,
    order: 2,
  },
  {
    name: 'Hammer of Greed',
    type: 'stuff',
    url: 'https://cdn.pixabay.com/photo/2018/08/01/14/04/gavel-3577254_960_720.jpg',
    description: 'Gold Hammer to show your justice',
    weightInKg: 0.5,
    stock: 1,
    reviews: {
      star: 4,
      reviewers: ['New User', 'Great'],
    },
    price: 80,
    currency: Currency.Euro,
    order: 2,
  },
];
