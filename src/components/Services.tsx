import { Camera, Heart, Sparkles, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Weddings",
      description: "Timeless documentation of your love story, from intimate elopements to grand celebrations.",
      starting: "From $3,500",
    },
    {
      icon: Users,
      title: "Portraits",
      description: "Personal and professional portraits that capture your authentic essence and personality.",
      starting: "From $500",
    },
    {
      icon: Sparkles,
      title: "Editorial",
      description: "Fashion and lifestyle photography for brands, magazines, and creative campaigns.",
      starting: "From $2,000",
    },
    {
      icon: Camera,
      title: "Fine Art",
      description: "Limited edition prints and commissioned pieces for collectors and art enthusiasts.",
      starting: "From $1,500",
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subheading">What I Offer</p>
          <h2 className="section-heading">Services</h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 border border-border bg-background hover:border-accent/50 transition-all duration-500"
            >
              <service.icon 
                size={32} 
                strokeWidth={1} 
                className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300" 
              />
              <h3 className="font-serif text-2xl mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <p className="text-sm uppercase tracking-wider text-accent">
                {service.starting}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Every project is unique. Let's discuss your vision.
          </p>
          <a href="#contact" className="btn-primary">
            Get Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
