import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Portrait Session",
    price: "$350",
    duration: "1 Hour",
    description: "Perfect for headshots, personal branding, or individual portraits",
    features: [
      "1-hour session at location of choice",
      "Professional editing & retouching",
      "15 high-resolution digital images",
      "Online gallery for viewing & sharing",
      "Print release included",
    ],
  },
  {
    name: "Couples & Family",
    price: "$550",
    duration: "2 Hours",
    description: "Capture your love story or family moments in stunning detail",
    features: [
      "2-hour session at your preferred location",
      "Up to 6 family members",
      "30 high-resolution digital images",
      "Professional editing & retouching",
      "Online gallery with download access",
      "Print release included",
    ],
    popular: true,
  },
  {
    name: "Wedding Coverage",
    price: "From $2,800",
    duration: "Full Day",
    description: "Comprehensive documentation of your special day",
    features: [
      "8+ hours of coverage",
      "Second photographer included",
      "Engagement session add-on available",
      "300+ edited digital images",
      "Custom online gallery",
      "USB with all images",
      "Print release included",
    ],
  },
];

const addOns = [
  { name: "Additional Hour", price: "$200" },
  { name: "Rush Editing (48hrs)", price: "$150" },
  { name: "Premium Album (20 pages)", price: "$450" },
  { name: "Canvas Print (16x24)", price: "$175" },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="font-serif text-2xl tracking-wide">
              Elena Morgan
            </Link>
            <Link to="/" className="nav-link">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Investment
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every session is tailored to capture your unique story. Below you'll find 
            my most popular packages, though I'm always happy to create a custom 
            experience just for you.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-card rounded-lg p-8 border ${
                  pkg.popular
                    ? "border-primary shadow-xl scale-105"
                    : "border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="font-serif text-2xl mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {pkg.duration}
                  </p>
                  <p className="text-4xl font-light">{pkg.price}</p>
                </div>
                <p className="text-muted-foreground text-center mb-8 text-sm">
                  {pkg.description}
                </p>
                <ul className="space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/#contact"
                  className={`block mt-8 text-center py-3 rounded-lg transition-colors ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  Book This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 px-6 lg:px-12 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl text-center mb-12">
            Enhance Your Experience
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between bg-background p-6 rounded-lg border border-border"
              >
                <span className="font-medium">{addon.name}</span>
                <span className="text-muted-foreground">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-serif text-3xl mb-6">Have Questions?</h2>
          <p className="text-muted-foreground mb-8">
            I'd love to chat about your vision and how we can bring it to life. 
            Every project is unique, and I'm here to guide you through the process.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Elena Morgan Photography. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
