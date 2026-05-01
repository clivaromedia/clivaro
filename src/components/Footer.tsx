import { Mail, Instagram} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6 inline-flex cursor-pointer">
              {/* <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold font-heading text-xl">C</span>
              </div> */}
              <a href="/" className="flex items-center gap-2">
        {/* <img src="/public/images/clivaro_icon.png" alt="Clivaro Icon" className="w-8 h-8"/> */}
        <img src="/images/clivaro_icon_blue.png" alt="Clivaro Media" className="h-14 w-auto"/>
        </a>
              {/* <span className="font-heading font-bold text-xl tracking-tight text-foreground">Clivaro Media</span> */}
            </a>
            <p className="text-muted-foreground max-w-sm mb-6">
              The creator-focused studio for high-retention short-form clips and conversion-optimized websites.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold font-heading text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Short-Form Clipping</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Web Development</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm">Pricing</a></li>
              {/* <li><a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm">Portfolio</a></li> */}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold font-heading text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Clivaro Media. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social Links Placeholders */}
            <a
            href="https://instagram.com/clivaromedia" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>

          {/* Email */}
          <a
            href="mailto:clivaromedia@gmail.com"
            className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
            {/* <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              X
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              IG
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              TT
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}