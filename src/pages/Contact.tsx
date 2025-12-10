import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-foreground mb-6">Contact</h1>
      <div className="w-12 h-1 bg-gradient-primary rounded mb-8"></div>

      {/* Map Section */}
      <section className="mb-12">
        <div className="bg-card border border-border rounded-lg overflow-hidden shadow-card h-80">
          <iframe
            title="Pune, Maharashtra, India Map"
            src="https://www.google.com/maps?q=Pune,+Maharashtra,+India&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded px-3 py-2 z-10">
            <h3 className="text-lg font-semibold text-foreground mb-1">Pune</h3>
            <p className="text-muted-foreground">Maharashtra, India</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">Contact Form</h2>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input 
                placeholder="Full name"
                className="bg-card border-border"
              />
            </div>
            <div>
              <Input 
                type="email"
                placeholder="Email address"
                className="bg-card border-border"
              />
            </div>
          </div>
          
          <div>
            <Textarea 
              placeholder="Your message"
              rows={6}
              className="bg-card border-border resize-none"
            />
          </div>
          
          <div className="flex justify-end">
            <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}