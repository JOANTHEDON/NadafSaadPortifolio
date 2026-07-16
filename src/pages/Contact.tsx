import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Using Web3Forms for direct email delivery to saadnadaf1210@gmail.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/body",
        },
        body: JSON.stringify({
          // This is a free public key mapped to saadnadaf1210@gmail.com
          // Web3Forms automatically forwards form submissions to your email
          access_key: "51c9d646-cd9d-4c33-a3d8-e390c5fa6359",
          name,
          email,
          message,
          subject: `New Portfolio Message from ${name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-foreground mb-6">Contact</h1>
      <div className="w-12 h-1 bg-gradient-primary rounded mb-8"></div>

      {/* Map Section */}
      <section className="mb-12">
        <div className="bg-card border border-border rounded-lg overflow-hidden shadow-card h-80 relative">
          <iframe
            title="Satara, Maharashtra, India Map"
            src="https://www.google.com/maps?q=Satara,+Maharashtra,+India&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded px-3 py-2 z-10">
            <h3 className="text-lg font-semibold text-foreground mb-1">Satara</h3>
            <p className="text-muted-foreground">Maharashtra, India</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">Contact Form</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input 
                placeholder="Full name"
                className="bg-card border-border"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <Input 
                type="email"
                placeholder="Email address"
                className="bg-card border-border"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div>
            <Textarea 
              placeholder="Your message"
              rows={6}
              className="bg-card border-border resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          
          <div className="flex justify-end">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}