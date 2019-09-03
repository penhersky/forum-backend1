import mongoose from "mongoose";

export default async (url, productStatus) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true
    });
  } catch (error) {
    if (productStatus) console.log(error);
    throw Error("Connection to the database did not take place");
  }
};