import { CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-hero-gradient text-white py-16 md:py-24 relative overflow-hidden">
      {/* Crypto pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">₿</div>
        <div className="absolute top-40 right-20 text-5xl">Ξ</div>
        <div className="absolute bottom-20 left-1/4 text-4xl">₿</div>
        <div className="absolute bottom-32 right-1/3 text-5xl">Ξ</div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Trust Wallet Customer Support Center
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            We're here to help you with all your cryptocurrency and wallet needs. Our expert team is available 24/7 to provide secure and reliable support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-success" />
              <span className="font-medium">Support Team Online</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full" />
            <div className="text-white/90">
              Average Response: &lt; 2 minutes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
