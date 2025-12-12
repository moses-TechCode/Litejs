import ProductCard from "./Mojact.js";
import Text from "./Code.js";
import { mount } from "./Blueprint.js";

// Create component object
const card = new ProductCard({
  src: "./Homepod.png",
  
});

  const text = new Text({
    text:"moses"
  })

mount([card], "root");


function word(String){
 let wr= prompt("enter text")
 console.log(wr)
}
word()