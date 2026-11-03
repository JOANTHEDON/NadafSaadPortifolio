import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Navigation } from "./components/Navigation";
import { ScrollExperience } from "./components/ScrollExperience";
import GlowCursorTrail from "./components/GlowCursorTrail";
import CustomAimCursor from "./components/CustomAimCursor";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Cursors only enabled on non-touch devices with fine pointers */}
      <div className="hidden md:block">
        <GlowCursorTrail />
        <CustomAimCursor />
      </div>
      <BrowserRouter>
        <ScrollExperience />
        <div className="min-h-screen text-foreground flex flex-col lg:flex-row overflow-x-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col relative min-w-0">
            <Navigation />
            <main className="flex-1 relative pb-16 space-y-12 sm:space-y-16">
              <section id="about" className="scroll-mt-24">
                <About />
              </section>

              <section id="resume" className="scroll-mt-24">
                <Resume />
              </section>

              <section id="projects" className="scroll-mt-24">
                <Portfolio />
              </section>

              <section id="contact" className="scroll-mt-24">
                <Contact />
              </section>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
