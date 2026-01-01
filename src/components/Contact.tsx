import { Mail, MapPin, Instagram } from "lucide-react";

interface ContactProps {
  contactImage: string;
}

const Contact = ({ contactImage }: ContactProps) => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Content */}
          <div>
            <p className="section-subheading">Get in Touch</p>
            <h2 className="section-heading mb-8">Let's Create<br />Something Beautiful</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              Whether you're planning a wedding, need professional portraits, 
              or have a creative project in mind—I'd love to hear from you.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              <a 
                href="mailto:hello@elenamorgan.com" 
                className="flex items-center gap-4 text-foreground hover:text-accent transition-colors"
              >
                <Mail size={20} strokeWidth={1.5} />
                <span>hello@elenamorgan.com</span>
              </a>
              <div className="flex items-center gap-4 text-foreground">
                <MapPin size={20} strokeWidth={1.5} />
                <span>San Francisco, CA</span>
              </div>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground hover:text-accent transition-colors"
              >
                <Instagram size={20} strokeWidth={1.5} />
                <span>@elenamorgan</span>
              </a>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-accent outline-none transition-colors placeholder:text-muted-foreground"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-accent outline-none transition-colors placeholder:text-muted-foreground"
                />
              </div>
              <select
                className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-accent outline-none transition-colors text-muted-foreground"
              >
                <option value="">Select Service</option>
                <option value="wedding">Wedding Photography</option>
                <option value="portrait">Portrait Session</option>
                <option value="editorial">Editorial / Commercial</option>
                <option value="fine-art">Fine Art Prints</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="Tell me about your project..."
                rows={4}
                className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-accent outline-none transition-colors placeholder:text-muted-foreground resize-none"
              />
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="sticky top-32">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={contactImage}
                  alt="Contact"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
