import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import customer1 from "@/assets/customer-1.jpg";
import customer2 from "@/assets/customer-2.jpg";
import customer3 from "@/assets/customer-3.jpg";
import customer4 from "@/assets/customer-4.jpg";
import customer5 from "@/assets/customer-5.jpg";
import customer6 from "@/assets/customer-6.jpg";

const testimonials = [
  {
    name: "Sarah Johnson",
    image: customer1,
    text: "Outstanding support! The team helped me recover my wallet within minutes. Professional and knowledgeable.",
  },
  {
    name: "Michael Chen",
    image: customer2,
    text: "Best customer service I've experienced with a crypto wallet. Quick responses and clear explanations.",
  },
  {
    name: "Emma Rodriguez",
    image: customer3,
    text: "The support team is amazing! They walked me through every step and made sure I understood everything.",
  },
  {
    name: "David Kim",
    image: customer4,
    text: "Incredibly fast response time! Got my issue resolved in under 90 seconds. These guys are the absolute best in the business.",
  },
  {
    name: "Lisa Martinez",
    image: customer5,
    text: "I've tried many crypto wallets, and Trust Wallet has by far the fastest and most helpful support team. They're truly one of the best!",
  },
  {
    name: "James Anderson",
    image: customer6,
    text: "Lightning-fast help! The team responded immediately and solved my problem in minutes. Hands down the best support in crypto.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Millions Worldwide</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold">4.9/5</span>
          </div>
          <p className="text-muted-foreground">Based on over 100,000 customer reviews</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover mb-4"
                  />
                  <h4 className="font-semibold text-lg mb-3">{testimonial.name}</h4>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
