interface AboutProps {
  aboutImage: string;
}

const About = ({ aboutImage }: AboutProps) => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={aboutImage}
                alt="Elena Morgan - Photographer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/30 -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="section-subheading">About Me</p>
            <h2 className="section-heading mb-8">The Story Behind<br />the Lens</h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                With over a decade of experience capturing life's most precious moments, 
                I've developed a style that blends fine art aesthetics with authentic emotion. 
                My approach is intimate and intentional—every frame tells a story.
              </p>
              <p>
                Based in San Francisco, I work with clients worldwide, from intimate elopements 
                in the Scottish Highlands to editorial campaigns in New York. My work has been 
                featured in Vogue, Harper's Bazaar, and numerous international publications.
              </p>
              <p>
                When I'm not behind the camera, you'll find me exploring hidden trails, 
                collecting vintage cameras, or savoring a perfect cup of coffee.
              </p>
            </div>

            <div className="flex gap-12 mt-10 pt-10 border-t border-border">
              <div>
                <span className="font-serif text-4xl text-accent">12+</span>
                <p className="text-sm uppercase tracking-wider text-muted-foreground mt-2">Years Experience</p>
              </div>
              <div>
                <span className="font-serif text-4xl text-accent">500+</span>
                <p className="text-sm uppercase tracking-wider text-muted-foreground mt-2">Happy Clients</p>
              </div>
              <div>
                <span className="font-serif text-4xl text-accent">15</span>
                <p className="text-sm uppercase tracking-wider text-muted-foreground mt-2">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
