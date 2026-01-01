import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "/pricing", isPage: true },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="font-serif text-2xl tracking-wide">
            Elena Morgan
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) =>
              item.isPage ? (
                <Link key={item.label} to={item.href} className="nav-link">
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className="nav-link">
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col gap-6">
              {navItems.map((item) =>
                item.isPage ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="font-serif text-2xl"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="font-serif text-2xl"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
