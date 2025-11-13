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
    <section id="support" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Can We Help You?</h2>
          <p className="text-muted-foreground text-lg">
            Choose the support option that works best for you. Our team is ready to assist with any questions or issues.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {supportOptions.map((option, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <option.icon className={`h-8 w-8 ${option.color}`} />
                </div>
                <CardTitle className="text-xl">{option.title}</CardTitle>
                <CardDescription className="text-sm">{option.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg">
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
