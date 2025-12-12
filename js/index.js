import ProductCard from "./Litejs.js";
import { mount } from "./Blueprint.js";

// Create component object
const card = new ProductCard({
  src: "./Homepod.png",
  
});

  

mount([card], "root");