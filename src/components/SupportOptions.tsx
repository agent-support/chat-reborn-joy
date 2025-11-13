import { MessageCircle, Phone, HelpCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    action: "Start Chat",
    color: "text-primary",
  },
  {
    icon: Phone,
    title: "Contact Support",
    description: "Get in touch with our expert team",
    action: "Contact Us",
    color: "text-primary",
  },
  {
    icon: HelpCircle,
    title: "FAQs",
    description: "Find answers to common questions",
    action: "Browse FAQs",
    color: "text-primary",
  },
  {
    icon: Send,
    title: "Submit a Ticket",
    description: "Submit a detailed support request",
    action: "Submit Ticket",
    color: "text-primary",
  },
];

const SupportOptions = () => {
  return (
    <section id="support" className="py-10 sm:py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">How Can We Help You?</h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg px-2">
            Choose the support option that works best for you. Our team is ready to assist with any questions or issues.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {supportOptions.map((option, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3 sm:pb-6">
                <div className="mx-auto mb-3 sm:mb-4 bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <option.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${option.color}`} />
                </div>
                <CardTitle className="text-base sm:text-lg md:text-xl">{option.title}</CardTitle>
                <CardDescription className="text-xs sm:text-sm">{option.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button className="w-full text-sm sm:text-base" size="default">
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportOptions;
