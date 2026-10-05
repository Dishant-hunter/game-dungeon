import { useState } from "react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Grand Theft Auto 6",
    category: "GAME",
    price: "5,999",
    description: "We know you waited for 13 years.",
    image:
      "https://imgs.search.brave.com/2KcPDrjjemKTmshVjCwrbBvuinxGTcQQQjb63DS7qDw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3RhdmljZS5uZXQv/Y29udGVudC9pbWFn/ZXMvZ2FsbGVyeS9n/dGEtdmktb2ZmaWNp/YWwtYm94LWFydC1w/bGFjZWhvbGRlci5q/cGc_ZXRhZz02ODFk/MWNjZQ"
  },

  {
    id: 2,
    name: "CYBERPUNK 2077",
    category: "GAME",
    price: "₹2,999",
    description: "Explore dystopian night-city in 2077.",
    image:
      "https://imgs.search.brave.com/Z3Vk2PbtrC3D7fserlBkzgjANw7yTfDPpRVB2VrQ-uY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/OS85Zi9DeWJlcnB1/bmtfMjA3N19ib3hf/YXJ0LmpwZy8yNTBw/eC1DeWJlcnB1bmtf/MjA3N19ib3hfYXJ0/LmpwZz91dG1fc291/cmNlPWVuLndpa2lw/ZWRpYS5vcmcmdXRt/X2NhbXBhaWduPXBh/cnNlciZ1dG1fY29u/dGVudD10aHVtYm5h/aWw"
  },

  {
    id: 3,
    name: "Ghost Recon Breakpoint",
    category: "GAME",
    price: "₹2,999",
    description: "Tactical open world shooter game",
    image:
      "https://imgs.search.brave.com/T_KK-fJT8MaYczD-j-mBHKXkmHI4cTgR2IYe6kJtNNk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Yi9iYS9Db3Zlcl9B/cnRfb2ZfVG9tX0Ns/YW5jeSUyN3NfR2hv/c3RfUmVjb25fQnJl/YWtwb2ludC5wbmcv/MjUwcHgtQ292ZXJf/QXJ0X29mX1RvbV9D/bGFuY3klMjdzX0do/b3N0X1JlY29uX0Jy/ZWFrcG9pbnQucG5n/P3V0bV9zb3VyY2U9/ZW4ud2lraXBlZGlh/Lm9yZyZ1dG1fY2Ft/cGFpZ249cGFyc2Vy/JnV0bV9jb250ZW50/PXRodW1ibmFpbA"
  },

  {
    id: 4,
    name: "Resident Evil Requiem",
    category: "GAME",
    price: "₹3,499",
    description: "Hands down Game of the Year 2026.",
    image:
      "https://imgs.search.brave.com/FYre0yf4iVEigXOqO2KRgpqM1x3p2f2QRYQkYgwDW6E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/MS8xNS9SZXNpZGVu/dF9FdmlsX1JlcXVp/ZW1fQ292ZXJfQXJ0/LmpwZy8yNTBweC1S/ZXNpZGVudF9Fdmls/X1JlcXVpZW1fQ292/ZXJfQXJ0LmpwZz91/dG1fc291cmNlPWVu/Lndpa2lwZWRpYS5v/cmcmdXRtX2NhbXBh/aWduPXBhcnNlciZ1/dG1fY29udGVudD10/aHVtYm5haWw"
  },

  {
    id: 5,
    name: "Neural X9 Processor",
    category: "CPU",
    price: "₹39,999",
    description: "Extreme processing power for gaming systems.",
    image:
      "https://images.unsplash.com/photo-1555617981-dac3880eac6e"
  },

  {
    id: 6,
    name: "Voidwalker Headset",
    category: "PERIPHERAL",
    price: "₹12,999",
    description: "Immersive surround sound for deep gaming sessions.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  }
];

function Store() {
  const [filter, setFilter] = useState("ALL");

  const categories = [
    "ALL",
    "GAME",
    "GPU",
    "CPU",
    "PERIPHERAL"
  ];

  const filteredProducts =
    filter === "ALL"
      ? products
      : products.filter(
          product => product.category === filter
        );

  return (
    <section className="store-page container">

      <div className="page-header">

        <span>/// GAME DUNGEON INVENTORY</span>

        <h1>
          THE <span>ARMORY</span>
        </h1>

        <p>
          Browse games, hardware and equipment
          engineered for serious players.
        </p>

      </div>


      <div className="filters">

        {categories.map(category => (
          <button
            key={category}
            className={
              filter === category ? "active-filter" : ""
            }
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}

      </div>


      <div className="product-grid">

        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default Store;