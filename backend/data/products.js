const products = [
  {
    name: "Airpods",
    image: "/images/airpods.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    price: 8999,
    countInStock: 3,
    rating: 4.5,
    numReviews: 4,
  },
  {
    name: "Fidget Spinner",
    image: "/images/toy1.webp",
    description:
      "This Spinner is a top that combines the best of the Yeezy Boost 350 and the best of the Boost 350 V2. The upper features a full-length, responsive design, while the laces and tongue provide comfort and support.",
    brand: "Toy Factory",
    category: "Toys",
    price: 99,
    countInStock: 5,
    rating: 2,
    numReviews: 1,
  },
  {
    name: "Cannon EOS 80D DSLR Camera",
    image: "/images/camera.jpg",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    price: 9299,
    countInStock: 5,
    rating: 3,
    numReviews: 3,
  },
  {
    name: "NMD R1",
    image: "/images/shoe1.jpeg",
    description:
      "The NMD R1 is a running shoe that combines the best of the NMD and the best of the R1. The upper features a full-length, responsive design, while the laces and tongue provide comfort and support.",
    brand: "Nike",
    category: "Shoes",
    price: 2799,
    countInStock: 5,
    rating: 2.5,
    numReviews: 3,
  },
  {
    name: "Yeezy Boost 350 V2",
    image: "/images/shoe2.jpeg",
    description:
      "The Yeezy Boost 350 V2 is a shoe that combines the best of the Yeezy Boost 350 and the best of the Boost 350 V2. The upper features a full-length, responsive design, while the laces and tongue provide comfort and support.",
    brand: "Nike",
    category: "Shoes",
    price: 1799,
    countInStock: 5,
    rating: 3.8,
    numReviews: 1,
  },
  {
    name: "Adidas Joyride Run",
    image: "/images/shoe3.jpeg",
    description:
      "The Adidas Joyride Run is a shoe that combines the best of the Yeezy Boost 350 and the best of the Boost 350 V2. The upper features a full-length, responsive design, while the laces and tongue provide comfort and support.",
    brand: "Adidas",
    category: "Shoes",
    price: 1799,
    countInStock: 5,
    rating: 4,
    numReviews: 1,
  },
  {
    name: "Sony Playstation 4 Pro White",
    image: "/images/playstation.jpg",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    price: 3999,
    countInStock: 10,
    rating: 5,
    numReviews: 3,
  },
  {
    name: "Logitech G-Series Gaming Mouse",
    image: "/images/mouse.jpg",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    price: 499,
    countInStock: 7,
    rating: 5,
    numReviews: 2,
  },
  {
    name: "Amazon Echo Dot 3rd Generation",
    image: "/images/alexa.jpg",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    price: 29,
    countInStock: 0,
    rating: 1,
    numReviews: 4,
  },
  {
    name: "Skechers Classic Sneakers",
    image: "/images/shoe4.jpeg",
    description:
      "The Sketchers Classic Sneakers is a shoe that combines the best of the Yeezy Boost 350 and the best of the Boost 350 V2. The upper features a full-length, responsive design, while the laces and tongue provide comfort and support.",
    brand: "Adidas",
    category: "Shoes",
    price: 1799,
    countInStock: 5,
    rating: 4,
    numReviews: 1,
  },
  {
    name: "Georgette Fancy Tops",
    image: "/images/top1.jpeg",
    description:
      "The Stylish Tops is a top that combines the best of the Yeezy Boost 350 and the best of the Boost 350 V2. The upper features a full-length, responsive design, while the laces and tongue provide comfort and support.",
    brand: "Dolce & Gabbana",
    category: "Clothing",
    price: 1799,
    countInStock: 5,
    rating: 3.1,
    numReviews: 1,
  },
  {
    name: "iPhone 11 Pro 256GB Memory",
    image: "/images/phone.jpg",
    description:
      "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    category: "Electronics",
    price: 5999,
    countInStock: 10,
    rating: 3.0,
    numReviews: 4,
  },
  {
    name: "Stylish Tops",
    image: "/images/top2.jpeg",
    description:
      "The Stylish Tops is a top that combines the best of the Yeezy Boost 350 and the best of the Boost 350 V2. The upper features a full-length, responsive design, while the laces and tongue provide comfort and support.",
    brand: "Dolce & Gabbana",
    category: "Clothing",
    price: 1299,
    countInStock: 5,
    rating: 4.1,
    numReviews: 2,
  },
  {
    name: "Bomber Jacket",
    image: "/images/men1.jpeg",
    description:
      "The Bomber Jacket is a top that combines the best of the Yeezy Boost 350 and the best of the Boost 350 V2. The upper features a full-length, responsive design, while the laces and tongue provide comfort and support.",
    brand: "Adidas",
    category: "Clothing",
    price: 1799,
    countInStock: 5,
    rating: 1,
    numReviews: 1,
  },

  {
    name: "Gold Spinner",
    image: "/images/toy2.jpeg",
    description:
      "This Spinner is a top that combines the best of the Yeezy Boost 350 and the best of the Boost 350 V2. The upper features a full-length, responsive design, while the laces and tongue provide comfort and support.",
    brand: "Toy Factory",
    category: "Toys",
    price: 199,
    countInStock: 5,
    rating: 4,
    numReviews: 1,
  },
];

export default products;
