const categories = [
  {
    name: "Dining",
    image: "/src/dining.jpg",
  },
  {
    name: "Living",
    image: "/src/living.jpg",
  },
  {
    name: "Bedroom",
    image: "/src/bedroom.jpg",
  },
];

function BrowseRange() {
  return (
    <section className="browse-section">
      <div className="section-heading">
        <h2>Browse The Range</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="category-container">
        {categories.map((category) => (
          <div className="category-card" key={category.name}>
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrowseRange;