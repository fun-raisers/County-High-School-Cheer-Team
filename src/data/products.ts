
interface Product {
    id: number;
    productName: string;
    productDescription: string;
    price: number;
    // TODO: add image back in once we have images
  }
//   find out how the products value is shaped and initialize a new array with that data.
  // {"endDate":"2023-08-31","fundraiserName":"blarg","location":"Dickson","products":[{"productDescription":"Laundry Soap, 3 Dryer Balls, Scent Booster, Wooden Scoop.","productName":"Laundry Bundle"},{"productDescription":"Shave Soap, Body Scrub, Shower Oil.","productName":"Smooth Shave Bundle"},{"productDescription":"Body Butter, Moisturizing Shea Soap Bar, Silicone Soap Dish.","productName":"Moisturizing Body Butter Bundle"},{"productDescription":"Epsom Salt, Bath Bomb, Wooden Scoop.","productName":"Relaxing Bath Bundle"},{"productDescription":"Buff’s 5 Best-Selling Soap Bars.","productName":"Buff’s 5 Best Soap Bundle"},{"productDescription":"Buff’s 5 Best-Selling Bath Bombs.","productName":"Buff’s 5 Best Bath Bomb Bundle"},{"productDescription":"{Narcissist | All Hail the Queen | Good Morning Sunshine | Island Nectar | Commando} Soap + Soap Sleeve.","productName":"Single Shea Soap + Soap Sleeve"},{"productDescription":"Custom productDescription","productName":"Custom Soap productName?"}]}
  const products: Product[] = [
    {
      id: 1,
      productName: "Laundry Bundle",
      productDescription: "Laundry Soap, 3 Dryer Balls, Scent Booster, Wooden Scoop",
      price: 50
    },
    {
      id: 2,
      productName: "Smooth Shave Bundle",
      productDescription: "Shave Soap, Body Scrub, Shower Oil",
      price: 45
    },
    {
      id: 3,
      productName: "Moisturizing Body Butter Bundle",
      productDescription: "Body Butter, Moisturizing Shea Soap Bar, Silicone Soap Dish",
      price: 35
    },
    {
      id: 4,
      productName: "Relaxing Bath Bundle",
      productDescription: "Epsom Salt, Bath Bomb, Wooden Scoop",
      price: 35
    },
    {
      id: 5,
      productName: "Buff’s 5 Best Soap Bundle",
      productDescription: "Buff’s 5 Best-Selling Soap Bars",
      price: 35
    },
    {
      id: 6,
      productName: "Buff’s 5 Best Bath Bomb Bundle",
      productDescription: "Buff’s 5 Best-Selling Bath Bombs",
      price: 35
    },
    {
      id: 7,
      productName: "Single Shea Soap + Soap Sleeve",
      productDescription: "Choice of Narcissist, All Hail the Queen, Good Morning Sunshine, Island Nectar, or Commando + Soap Sleeve",
      price: 15
    },
    {
      id: 8,
      productName: "Custom Soap",
      productDescription: "Show your Team Spirit with a custom soap! Pick your own scents and colors and design a one-of-a-kind soap for your organization!!",
      price: 10
    }
  ];
  
  export default products;
  