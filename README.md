# Litejs
📦 LiteJS — A Lightweight JavaScript UI Framework
LiteJS is a small, fast, component-based UI framework built with plain JavaScript.
It allows developers to create reusable components—just like React—but without npm, without build tools, and without dependencies.

Perfect for:

Developers coding on Android phones

Beginners learning UI architecture

Lightweight websites

Projects that don’t need the complexity of React/Vue

Offline or low-power environments



---

🚀 Features

✔ Component-based UI architecture

✔ Reusable components with props

✔ Very lightweight and fast

✔ Works on mobile browsers

✔ Zero dependencies

✔ Renders multiple components in one root

✔ Tailwind CSS support

✔ Pure JavaScript (no build step required)



---

📁 Project Structure

your-project/
│── index.html
│── main.js
│── Blueprint.js
│── components/
│     ├── ProductCard.js
│     └── Text.js
│── images/
      └── example.jpg


---

📥 Installation

LiteJS works with just one script import.

1. Add this to index.html:

<script type="module" src="main.js"></script>

And that's it — no build tools, no npm.


---

🧱 Creating a Component

All components extend the main App class:

import { App } from "./Blueprint.js";

export default class ProductCard extends App {
    render() {
        return `
        <div class="card">
            <img src="${this.props.src}" alt="${this.props.alt}" />
            <h2>${this.props.title}</h2>
            <p>${this.props.description}</p>
            <p>${this.props.price}</p>
        </div>
        `;
    }
}


---

🧩 Using the Component

import ProductCard from "./components/ProductCard.js";
import { mount } from "./Blueprint.js";

const card = new ProductCard({
    src: "./images/example.jpg",
    alt: "product",
    title: "Shoes",
    description: "Comfortable running shoes",
    price: "$20"
});

mount([card], "root");


---

🎨 Using Tailwind CSS (Optional)

Add this to your <head>:

<script src="https://cdn.tailwindcss.com"></script>

Tailwind will now work inside all components:

<div class="p-4 bg-white shadow-lg rounded-xl">


---

🔧 Blueprint.js (Core File)

Your main framework functions:

App — base class for all components

mount() — renders one or multiple components

Automatic HTML injection

Supports props



---

🖼 Rendering Images

Images must be inside the same server folder or a subfolder:

src: "./images/myImage.jpg"

If using a server:

python3 -m http.server


---

🧪 Example Output

Your components can create:

Product cards

Text components

Buttons

UI blocks

Dashboard sections


All reusable across pages.


---

🛠 Roadmap

[ ] Add state management

[ ] Add event handling

[ ] Add routing system

[ ] Publish a CDN version

[ ] Create official documentation website

[ ] Create component library (LiteUI)



---

🤝 Contributing

Pull requests are welcome!
You can help by:

Improving performance

Creating new example components

Fixing bugs

Suggesting new features



---

📄 License

MIT License — free to use, modify, and distribute.


---

⭐ Created by Moses (Moses TechCode)

A lightweight JavaScript UI framework made for speed, simplicity, and mobile-friendly development.
