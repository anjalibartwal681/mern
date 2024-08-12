const router = require("express").Router();
const ensureAuthenticated = require("../Middlewares/Auth");
router.get("/", ensureAuthenticated, (req, res) => {
  console.log("---logged in user details---", req.user); // Corrected typo: 'req.uesr' to 'req.user'

  res.status(200).json([
    {
      id: 1,
      category: "mobiles",
      title: "Apple iPhone 14",
      imgSrc: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg",
      amazonLink: "https://amzn.to/3PuckZp",
      description: "Apple iPhone 14 (128 GB) - Blue",
      price: 89999,
    },
    {
      id: 2,
      category: "mobiles",
      title: "Apple iPhone 14",
      imgSrc: "https://m.media-amazon.com/images/I/51b9LjzmPCL._SL1080_.jpg",
      amazonLink: "https://amzn.to/3PuckZp",
      description: "Apple iPhone 14 (128 GB) - Blue",
      price: 89999,
    },
    {
      id: 2,
      category: "mobiles",
      title: "Apple iPhone 14",
      imgSrc: "https://m.media-amazon.com/images/I/51b9LjzmPCL._SL1080_.jpg",
      amazonLink: "https://amzn.to/3PuckZp",
      description: "Apple iPhone 14 (128 GB) - Blue",
      price: 89999,
    },
    {
      id: 2,
      category: "mobiles",
      title: "Apple iPhone 14",
      imgSrc: "https://m.media-amazon.com/images/I/51b9LjzmPCL._SL1080_.jpg",
      amazonLink: "https://amzn.to/3PuckZp",
      description: "Apple iPhone 14 (128 GB) - Blue",
      price: 89999,
    },
    {
      id: 2,
      category: "mobiles",
      title: "Apple iPhone 14",
      imgSrc: "https://m.media-amazon.com/images/I/51b9LjzmPCL._SL1080_.jpg",
      amazonLink: "https://amzn.to/3PuckZp",
      description: "Apple iPhone 14 (128 GB) - Blue",
      price: 89999,
    },
    {
      id: 2,
      category: "mobiles",
      title: "Apple iPhone 14",
      imgSrc: "https://m.media-amazon.com/images/I/51b9LjzmPCL._SL1080_.jpg",
      amazonLink: "https://amzn.to/3PuckZp",
      description: "Apple iPhone 14 (128 GB) - Blue",
      price: 89999,
    },
    {
      id: 2,
      category: "mobiles",
      title: "Apple iPhone 14",
      imgSrc: "https://m.media-amazon.com/images/I/51b9LjzmPCL._SL1080_.jpg",
      amazonLink: "https://amzn.to/3PuckZp",
      description: "Apple iPhone 14 (128 GB) - Blue",
      price: 89999,
    },
    {
      id: 2,
      category: "mobiles",
      title: "Apple iPhone 14",
      imgSrc: "https://m.media-amazon.com/images/I/51b9LjzmPCL._SL1080_.jpg",
      amazonLink: "https://amzn.to/3PuckZp",
      description: "Apple iPhone 14 (128 GB) - Blue",
      price: 89999,
    },
    {
      id: 2,
      category: "mobiles",
      title: "Apple iPhone 14",
      imgSrc: "https://m.media-amazon.com/images/I/51b9LjzmPCL._SL1080_.jpg",
      amazonLink: "https://amzn.to/3PuckZp",
      description: "Apple iPhone 14 (128 GB) - Blue",
      price: 89999,
    },
    {
      id: 2,
      category: "mobiles",
      title: "Apple iPhone 14",
      imgSrc: "https://m.media-amazon.com/images/I/51b9LjzmPCL._SL1080_.jpg",
      amazonLink: "https://amzn.to/3PuckZp",
      description: "Apple iPhone 14 (128 GB) - Blue",
      price: 89999,
    },
    {
      id: 2,
      category: "mobiles",
      title: "Apple iPhone 14",
      imgSrc: "https://m.media-amazon.com/images/I/51b9LjzmPCL._SL1080_.jpg",
      amazonLink: "https://amzn.to/3PuckZp",
      description: "Apple iPhone 14 (128 GB) - Blue",
      price: 89999,
    },
  ]);
});

module.exports = router;
