interface PortfolioProps {
  images: string[];
}

const Portfolio = ({ images }: PortfolioProps) => {
  const categories = ["Portraits", "Weddings", "Editorial", "Nature"];

  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subheading">Selected Work</p>
          <h2 className="section-heading">Portfolio</h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`nav-link ${index === 0 ? "text-foreground after:w-full" : ""}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`gallery-item ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "aspect-square" : "aspect-[4/5]"}`}>
                <img
                  src={image}
                  alt={`Portfolio image ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Hover overlay with text */}
                <div className="absolute inset-0 z-20 flex items-end p-6 opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <div className="text-white">
                    <p className="text-sm uppercase tracking-[0.2em] mb-2">Portrait Series</p>
                    <h3 className="font-serif text-2xl">Golden Hour</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a href="#" className="btn-outline">
            View All Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
