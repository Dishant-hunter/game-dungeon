import { ShoppingCart, Zap } from "lucide-react";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />

        <div className="product-tag">
          {product.category}
        </div>

        
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-bottom">
          <span className="price">{product.price}</span>

          <button className="add-cart">
            <ShoppingCart size={18} />
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;