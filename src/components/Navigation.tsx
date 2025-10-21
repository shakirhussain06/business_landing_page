import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Apps", id: "apps" },
    { name: "Careers", id: "careers" },
    { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 pt-2 sm:pt-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/90 backdrop-blur-lg border border-border rounded-full shadow-lg">
          <div className="px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="flex items-center h-14 sm:h-16 gap-2 sm:gap-4 lg:gap-8">
              {/* Logo */}
              <button
                onClick={() => handleNavigate("home")}
                className="flex items-center gap-1.5 sm:gap-2 group flex-shrink-0"
              >
                <Logo width={32} height={32} className="sm:w-10 sm:h-10" />
                <span className="text-base sm:text-xl text-foreground font-semibold">Olena Group</span>
              </button>

              {/* Desktop Navigation - Centered */}
              <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`px-3 xl:px-4 py-2 rounded-lg transition-all text-sm xl:text-base ${
                      currentPage === item.id
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Right Side Buttons */}
              <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
                <button
                  onClick={() => handleNavigate("apps")}
                  className="px-4 xl:px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all text-sm xl:text-base"
                >
                  Our Apps
                </button>
                <button
                  onClick={() => handleNavigate("contact")}
                  className="px-4 xl:px-5 py-2 rounded-full bg-primary text-white hover:shadow-lg hover:scale-105 transition-all text-sm xl:text-base"
                >
                  Get Started
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-secondary ml-auto"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 bg-white/95 backdrop-blur-lg border border-border rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="px-3 sm:px-4 py-3 sm:py-4 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-full transition-all text-sm sm:text-base ${
                      currentPage === item.id
                        ? "text-primary bg-secondary"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-2 mt-2 border-t border-border space-y-1">
                  <button
                    onClick={() => handleNavigate("apps")}
                    className="block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-full border border-primary text-primary hover:bg-secondary transition-all text-sm sm:text-base"
                  >
                    Our Apps
                  </button>
                  <button
                    onClick={() => handleNavigate("contact")}
                    className="block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-full bg-primary text-white hover:shadow-lg transition-all text-sm sm:text-base"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
