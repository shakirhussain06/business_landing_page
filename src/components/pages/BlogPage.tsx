import { motion } from "motion/react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function BlogPage() {
  const blogPosts = [
    {
      title: "Introducing TaskFlow Pro 2.0: Reimagined Collaboration",
      excerpt: "We're excited to announce the biggest update to TaskFlow Pro yet, with new real-time collaboration features, AI-powered insights, and a redesigned interface.",
      author: "Sarah Thompson",
      date: "October 5, 2025",
      readTime: "5 min read",
      category: "Product Updates",
      image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5NzU4NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "The Future of Mobile App Development in 2025",
      excerpt: "Explore the latest trends shaping mobile development, from AI integration to cross-platform frameworks and what they mean for developers.",
      author: "David Kim",
      date: "October 1, 2025",
      readTime: "8 min read",
      category: "Tech Insights",
      image: "https://images.unsplash.com/photo-1515355252367-42ae86cb92f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5ODEyMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "How MindSpace Helped 1 Million Users Find Peace",
      excerpt: "A look at the journey of our wellness app and the real impact it's having on mental health and mindfulness worldwide.",
      author: "Lisa Chen",
      date: "September 28, 2025",
      readTime: "6 min read",
      category: "Success Stories",
      image: "https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc1OTgyNjgwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Building Accessible Apps: Our Design Philosophy",
      excerpt: "Learn about our commitment to accessibility and how we ensure our apps are usable by everyone, regardless of ability.",
      author: "Marcus Johnson",
      date: "September 25, 2025",
      readTime: "7 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1665360755361-d8cd03c82b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwb2ZmaWNlJTIwdGVhbXxlbnwxfHx8fDE3NTk3Nzk1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Behind the Scenes: A Day in the Life at Olena Group",
      excerpt: "Get an inside look at what it's like to work at Olena Group, from our remote-first culture to our commitment to work-life balance.",
      author: "James Wilson",
      date: "September 20, 2025",
      readTime: "5 min read",
      category: "Company Culture",
      image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5NzU4NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Scaling Apps to 20 Million Users: Lessons Learned",
      excerpt: "Technical insights into how we scaled our infrastructure to support millions of concurrent users while maintaining performance.",
      author: "David Kim",
      date: "September 15, 2025",
      readTime: "10 min read",
      category: "Tech Insights",
      image: "https://images.unsplash.com/photo-1515355252367-42ae86cb92f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5ODEyMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "CodeSnap Goes Open Source: Contributing to the Community",
      excerpt: "We're excited to announce that CodeSnap's core engine is now open source. Learn how you can contribute and what this means for developers.",
      author: "Elena Martinez",
      date: "September 10, 2025",
      readTime: "4 min read",
      category: "Product Updates",
      image: "https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc1OTgyNjgwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "User Privacy: How We Protect Your Data",
      excerpt: "Transparency about our data practices, privacy policies, and the steps we take to ensure your information is secure.",
      author: "Lisa Chen",
      date: "September 5, 2025",
      readTime: "6 min read",
      category: "Tech Insights",
      image: "https://images.unsplash.com/photo-1665360755361-d8cd03c82b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwb2ZmaWNlJTIwdGVhbXxlbnwxfHx8fDE3NTk3Nzk1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Celebrating 5 Years of Innovation",
      excerpt: "Reflecting on our journey from a small startup to a company serving 20 million users worldwide. Here's to the next chapter!",
      author: "Elena Martinez",
      date: "August 30, 2025",
      readTime: "8 min read",
      category: "Company Culture",
      image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5NzU4NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const categories = ["All", "Product Updates", "Tech Insights", "Design", "Success Stories", "Company Culture"];

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
            <h1 className="mb-4 sm:mb-6">Blog & News</h1>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              Insights, updates, and stories from the Olena Group team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8 sm:py-12 bg-white -mt-8 sm:-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto overflow-hidden bg-gradient-to-br from-primary/10 to-purple-300/20">
                  <ImageWithFallback
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-3 sm:mb-4 text-xs sm:text-sm">{blogPosts[0].category}</Badge>
                  <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl">{blogPosts[0].title}</h2>
                  <p className="text-muted-foreground mb-4 sm:mb-6 text-base sm:text-lg">{blogPosts[0].excerpt}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>

                  <Button>
                    Read More
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Latest Articles</h2>
            <p className="text-lg text-muted-foreground">
              Stay up to date with our latest insights and updates.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col group cursor-pointer">
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-purple-300/20">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <Badge variant="secondary" className="w-fit mb-3 text-xs font-medium">
                      {post.category}
                    </Badge>
                    
                    <h3 className="mb-3 line-clamp-2 font-semibold">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Button variant="ghost" className="w-full justify-between group-hover:bg-secondary">
                      Read Article
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Never Miss an Update</h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for the latest product updates, tech insights, and company news.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
