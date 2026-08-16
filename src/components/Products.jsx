const products = [
  {
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    image: "/src/product1.jpg",
    badge: "-30%",
  },
  {
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: "/src/product2.jpg",
  },
  {
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    image: "/src/product1.jpg",
    badge: "-50%",
  },
  {
    name: "Slytherine",
    description: "Outdoor bar table",
    price: "Rp 500.000",
    image: "/src/product2.jpg",
    badge: "New",
  },
  
];

function Products() {
  return (
    <section className="products-section">
      <div className="section-heading">
        <h2>Our Products</h2>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.name}>
            
            <div className="product-image">
              <img src={product.image} alt={product.name} />

              {product.badge && (
                <span
                  className={
                    product.badge === "New"
                      ? "badge new"
                      : "badge"
                  }
                >
                  {product.badge}
                </span>
              )}

              <div className="product-overlay">
                <button>Add to cart</button>

                <div className="product-actions">
                  <span>↗ Share</span>
                  <span>♡ Like</span>
                </div>
              </div>
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <div className="price">
                <strong>{product.price}</strong>

                {product.oldPrice && (
                  <span>{product.oldPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="show-more">
        Show More
      </button>
    </section>
  );
}

export default Products;