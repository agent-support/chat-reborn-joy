import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SupportOptions from "@/components/SupportOptions";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  useEffect(() => {
    // Load Jivo chat widget
    const script = document.createElement("script");
    script.src = "//code.jivosite.com/widget/yVr5IjNNXW";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SupportOptions />
      <Testimonials />
    </div>
  );
};

export default Index;
