const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Dosa" },
    { name: "Pav Bhaji" },
    { name: "Pulav" },
    { name: "Chole Puri" },
    { name: "Milk Shake" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Dosa",
      description: "Dosa with noodles masala, Chuntney and safar.",
      image: "dosa1.jpeg",
      category: categories[0]._id,
      price: 11.99,
      quantity: 500,
    },
    {
      name: "Spring Dosa",
      description: "Dosa with noodles masala, Chuntney and safar.",
      image: "dosa2.jpeg",
      category: categories[0]._id,
      price: 11.99,
      quantity: 500,
    },
    {
      name: "Fudina Dosa",
      description: "Dosa with Fudina chutney layer with garlic chutney.",
      image: "dosa3.jpeg",
      category: categories[0]._id,
      price: 13.99,
      quantity: 500,
    },
    {
      name: "Mumbai Style Mysore Masala Dosa",
      category: categories[0]._id,
      description:
        "Masala Dosa with mysore chuntey filling with safar and chutney.",
      image: "dosa4.jpeg",
      price: 12.99,
      quantity: 20,
    },
    {
      name: "Mysore Msala Dosa",
      category: categories[0]._id,
      description:
        "Masala Dosa with mysore chuntey filling with safar and  green chutney.",
      image: "dosa5.jpeg",
      price: 13.99,
      quantity: 50,
    },
    {
      name: "Pav Bhaji",
      category: categories[1]._id,
      description: "Mixed Vegetables sabji with pav and onions with butter.",
      image: "pavbhaji1.jpeg",
      price: 14.99,
      quantity: 100,
    },
    {
      name: "Speical Pav Bhaji",
      category: categories[1]._id,
      description:
        "Speical Masala with Mixed Vegetables sabji with pav and onions with butter.",
      image: "pavbhaji2.jpeg",
      price: 15.99,
      quantity: 30,
    },
    {
      name: "Rajvadu speical Pav Bhaji",
      category: categories[1]._id,
      description:
        "Rajvadu Speical Masala with Mixed Vegetables sabji with pav and onions with butter.",
      image: "pavbhaji3.jpeg",
      price: 10.99,
      quantity: 30,
    },
    {
      name: "Mixed Pulav",
      category: categories[2]._id,
      description: "Pulav with mixed vegetables and masala.",
      image: "pulav1.jpeg",
      price: 9.99,
      quantity: 100,
    },
    {
      name: "Veg Pulav",
      category: categories[2]._id,
      description: "Pulav with mixed vegetables.",
      image: "pulav2.jpeg",
      price: 10.99,
      quantity: 100,
    },
    {
      name: "Shadi Wali Veg Pulav",
      category: categories[2]._id,
      description: "Special like shadi Pulav with mixed vegetables.",
      image: "pulav3.jpeg",
      price: 11.99,
      quantity: 100,
    },
    {
      name: "Pulav with dry fruits",
      category: categories[2]._id,
      description: "Special Pulav with mixed vegetables and dry fruits.",
      image: "pulav4.jpeg",
      price: 12.99,
      quantity: 100,
    },
    {
      name: "Masala Pulao",
      category: categories[2]._id,
      description: "Pulav with special rajvadu masala.",
      image: "pulav5.jpeg",
      price: 12.99,
      quantity: 1000,
    },
    {
      name: "Chole Puri",
      category: categories[3]._id,
      description: "Chole puri .",
      image: "cholepuri.jpeg",
      price: 12.99,
      quantity: 1000,
    },
    {
      name: "Strawberry Milkshake",
      category: categories[4]._id,
      description: "Strawberry Milkshake .",
      image: "milkshak1.jpeg",
      price: 4.99,
      quantity: 1000,
    },
    {
      name: "Chocolate Milkshake",
      category: categories[4]._id,
      description: "Chocolate Milkshake .",
      image: "milkshak2.jpeg",
      price: 4.99,
      quantity: 1000,
    },
    {
      name: "Vanila Milkshake",
      category: categories[4]._id,
      description: "Vanila Milkshake",
      image: "milkshak3.jpeg",
      price: 3.99,
      quantity: 1000,
    },
    {
      name: "pineapple Milkshake",
      category: categories[4]._id,
      description: "pineapple Milkshake",
      image: "milkshak4.jpeg",
      price: 4.99,
      quantity: 1000,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Avani",
    lastName: "Jadeja",
    email: "avani@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Ashok",
    lastName: "Parmar",
    email: "ashok@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
