import { motion } from "motion/react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { 
  Download, 
  ExternalLink, 
  Smartphone, 
  Globe,
  CheckCircle2,
  Star
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function AppsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Productivity", "Lifestyle", "Developer Tools", "Education", "Entertainment"];

  const apps = [
    {
      name: "TaskFlow Pro",
      description: "Streamline your workflow with intelligent task management and team collaboration features.",
      category: "Productivity",
      platforms: ["iOS", "Android", "Web"],
      rating: 4.8,
      downloads: "2M+",
      features: ["Real-time collaboration", "Smart notifications", "Analytics dashboard", "Cloud sync"],
      image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5NzU4NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "MindSpace",
      description: "Your personal wellness companion for meditation, mindfulness, and mental health.",
      category: "Lifestyle",
      platforms: ["iOS", "Android"],
      rating: 4.9,
      downloads: "5M+",
      features: ["Guided meditations", "Sleep stories", "Mood tracking", "Breathing exercises"],
      image: "https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc1OTgyNjgwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "CodeSnap",
      description: "Beautiful code screenshots and snippets sharing for developers.",
      category: "Developer Tools",
      platforms: ["Web", "iOS", "Android"],
      rating: 4.7,
      downloads: "1M+",
      features: ["Syntax highlighting", "Custom themes", "Export options", "Social sharing"],
      image: "https://images.unsplash.com/photo-1515355252367-42ae86cb92f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5ODEyMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "LearnHub",
      description: "Interactive learning platform with courses on programming, design, and business.",
      category: "Education",
      platforms: ["Web", "iOS", "Android"],
      rating: 4.8,
      downloads: "3M+",
      features: ["Video lessons", "Interactive quizzes", "Certificates", "Progress tracking"],
      image: "https://images.unsplash.com/photo-1665360755361-d8cd03c82b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwb2ZmaWNlJTIwdGVhbXxlbnwxfHx8fDE3NTk3Nzk1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "BudgetWise",
      description: "Smart budgeting and expense tracking to help you achieve your financial goals.",
      category: "Productivity",
      platforms: ["iOS", "Android", "Web"],
      rating: 4.6,
      downloads: "4M+",
      features: ["Expense tracking", "Budget planning", "Bill reminders", "Financial insights"],
      image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5NzU4NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "FitJourney",
      description: "Personalized fitness plans, workout tracking, and nutrition guidance.",
      category: "Lifestyle",
      platforms: ["iOS", "Android"],
      rating: 4.7,
      downloads: "6M+",
      features: ["Workout plans", "Nutrition tracker", "Progress photos", "Community support"],
      image: "https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc1OTgyNjgwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "SoundScape",
      description: "Discover and stream millions of songs, podcasts, and audio content.",
      category: "Entertainment",
      platforms: ["iOS", "Android", "Web"],
      rating: 4.9,
      downloads: "10M+",
      features: ["High-quality audio", "Offline mode", "Personalized playlists", "Podcast library"],
      image: "https://images.unsplash.com/photo-1515355252367-42ae86cb92f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5ODEyMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "DevDocs",
      description: "Offline documentation browser for developers with 100+ programming languages.",
      category: "Developer Tools",
      platforms: ["Web", "iOS", "Android"],
      rating: 4.8,
      downloads: "2M+",
      features: ["Offline access", "Quick search", "Code examples", "API references"],
      image: "https://images.unsplash.com/photo-1665360755361-d8cd03c82b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwb2ZmaWNlJTIwdGVhbXxlbnwxfHx8fDE3NTk3Nzk1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "QuizMaster",
      description: "Create and take interactive quizzes on any topic. Perfect for students and teachers.",
      category: "Education",
      platforms: ["Web", "iOS", "Android"],
      rating: 4.6,
      downloads: "1.5M+",
      features: ["Custom quizzes", "Flashcards", "Study groups", "Performance analytics"],
      image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5NzU4NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const filteredApps = selectedCategory === "All" 
    ? apps 
    : apps.filter(app => app.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="mb-4 sm:mb-6">Our Apps</h1>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              Explore our collection of innovative applications designed to enhance your digital life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-4 sm:py-6 md:py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full text-xs sm:text-sm px-3 sm:px-4"
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredApps.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-purple-300/20">
                    <ImageWithFallback
                      src={app.image}
                      alt={app.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="mb-1 font-semibold">{app.name}</h3>
                        <Badge variant="secondary" className="text-xs font-medium">
                          {app.category}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 flex-1">{app.description}</p>

                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="text-yellow-400 fill-yellow-400" size={16} />
                        <span>{app.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download size={16} className="text-muted-foreground" />
                        <span className="text-muted-foreground">{app.downloads}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm mb-2 font-medium">Key Features:</p>
                      <div className="space-y-1">
                        {app.features.slice(0, 3).map((feature) => (
                          <div key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={14} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {app.platforms.map((platform) => (
                        <div
                          key={platform}
                          className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {platform === "Web" ? <Globe size={12} /> : <Smartphone size={12} />}
                          <span>{platform}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm">
                        <Download size={16} className="mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredApps.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No apps found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-3 sm:mb-4">Have an App Idea?</h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 px-4">
              We're always looking for innovative ideas. Let's discuss how we can bring your vision to life.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 w-full xs:w-auto">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
