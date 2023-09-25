const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Dosa" },
    { name: "Bhaji Pav" },
    { name: "Sandwich" },
    { name: "Pulav" },
    { name: "Milk Shakes" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Sprind Dosa",
      category: categories[0]._id,
      price: 12.99,
    },
    {
      name: "Chocolate Dosa",
      category: categories[0]._id,
      price: 12.99,
    },
    {
      name: "Debang Dosa",
      category: categories[0]._id,
      price: 11.99,
    },
    {
      name: "Cheese Dosa",
      category: categories[0]._id,
      price: 10.99,
    },
    {
      name: "Mysore Plain Dosa",
      category: categories[0]._id,
      price: 12.99,
    },
    {
      name: "Bhaji Pav",
      category: categories[1]._id,
      price: 12.99,
    },
    {
      name: "Cheese Masala Bhaji Pav",
      category: categories[1]._id,
      price: 12.99,
    },
    {
      name: "Bhaji Pav with Cashew",
      category: categories[1]._id,
      price: 12.99,
    },
    {
      name: "Rajvadu special Bhaji Pav",
      category: categories[1]._id,
      price: 12.99,
    },
    {
      name: "Special Grilled Sandwich",
      category: categories[2]._id,
      price: 12.99,
    },
    {
      name: "Kattappa Grilled Sandwich",
      category: categories[2]._id,
      price: 11.99,
    },
    {
      name: "Cheese Jam Grilled Sandwich",
      category: categories[2]._id,
      price: 10.99,
    },
    {
      name: "Cheese Aloo Veggie Grill Sandwich",
      category: categories[2]._id,
      price: 13.99,
    },
    {
      name: "Cheese Pulav",
      category: categories[3]._id,
      price: 13.99,
    },
    {
      name: "Pulav Small Tray",
      category: categories[3]._id,
      price: 6.99,
    },
    {
      name: "Veg Tava Pulav Medium Tray",
      category: categories[3]._id,
      price: 7.99,
    },
    {
      name: "Ferrero Rocher Milkshake",
      category: categories[4]._id,
      price: 4.99,
    },
    {
      name: "Cold Coffee",
      category: categories[4]._id,
      price: 3.99,
    },
    {
      name: "Mango Milkshake",
      category: categories[4]._id,
      price: 3.99,
    },
    {
      name: "Chikoo Milkshake",
      category: categories[4]._id,
      price: 5.99,
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
