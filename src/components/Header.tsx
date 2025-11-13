import { Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary rounded-xl p-2">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Trust Wallet</h1>
              <p className="text-xs text-muted-foreground">Customer Support</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#support" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Support
            </a>
            <a href="#faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
