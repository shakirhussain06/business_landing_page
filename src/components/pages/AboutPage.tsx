import { motion } from "motion/react";
import { Card } from "../ui/card";
import { CheckCircle2, Users, Rocket, Award } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function AboutPage() {
  const team = [
    {
      name: "Shakir Hussain",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1561731885-e0591a34659c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400",
      bio: "Visionary entrepreneur and tech innovator with over 15 years of experience building successful digital products. Passionate about creating technology that empowers people and transforms industries."
    },
    {
      name: "David Kim",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
      bio: "Expert in scalable architecture and modern frameworks."
    },
    {
      name: "Sarah Thompson",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Award-winning designer passionate about user experience."
    },
    {
      name: "Marcus Johnson",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Product strategist driving innovation and growth."
    },
    {
      name: "Lisa Chen",
      role: "VP of Engineering",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
      bio: "Leading our talented engineering team to excellence."
    },
    {
      name: "James Wilson",
      role: "Head of Marketing",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Digital marketing expert building our global presence."
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Olena Group was established with a vision to transform digital experiences.",
      icon: Rocket
    },
    {
      year: "2019",
      title: "First App Launch",
      description: "TaskFlow Pro launched, reaching 100K downloads in the first month.",
      icon: CheckCircle2
    },
    {
      year: "2020",
      title: "Team Expansion",
      description: "Grew to a team of 50+ talented professionals across multiple disciplines.",
      icon: Users
    },
    {
      year: "2021",
      title: "5 Million Users",
      description: "Our apps reached 5 million active users worldwide.",
      icon: Award
    },
    {
      year: "2022",
      title: "International Expansion",
      description: "Opened offices in London, Singapore, and Toronto.",
      icon: Rocket
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Won Best Mobile App Developer Award and multiple design accolades.",
      icon: Award
    },
    {
      year: "2024",
      title: "10+ Apps Published",
      description: "Expanded portfolio to over 10 successful applications across categories.",
      icon: CheckCircle2
    },
    {
      year: "2025",
      title: "20 Million Users",
      description: "Reached 20 million active users and continuing to grow.",
      icon: Users
    }
  ];

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
            <h1 className="mb-4 sm:mb-6">About Olena Group</h1>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              We're a passionate team of innovators, designers, and developers committed to building digital experiences that inspire and empower.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="mb-4 sm:mb-6">Our Story</h2>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground text-base sm:text-lg">
                <p>
                  Olena Group was founded in 2018 with a simple yet powerful vision: to create digital products that make a real difference in people's lives. What started as a small team of passionate developers has grown into a thriving company with offices around the world.
                </p>
                <p>
                  Our founder, Shakir Hussain, saw a gap in the market for beautifully designed, intuitive applications that prioritize user experience above all else. This philosophy continues to guide everything we do today.
                </p>
                <p>
                  Today, we're proud to serve over 20 million users worldwide across our suite of innovative applications. Each app is crafted with care, tested rigorously, and refined based on real user feedback.
                </p>
                <p>
                  We believe technology should be accessible, empowering, and delightful. That's why we invest heavily in research, design, and development to ensure our apps not only meet but exceed user expectations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 sm:space-y-6 mt-8 lg:mt-0"
            >
              <Card className="p-4 sm:p-6 bg-gradient-to-br from-primary/10 to-purple-300/20 border-primary/20">
                <h3 className="mb-3 sm:mb-4">Our Philosophy</h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-sm sm:text-base">User experience is paramount in every decision we make</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-sm sm:text-base">Innovation drives us to constantly improve and evolve</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-sm sm:text-base">Quality is never compromised, no matter the deadline</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-sm sm:text-base">Collaboration and transparency build trust with our users</span>
                  </li>
                </ul>
              </Card>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <Card className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl text-primary mb-1 sm:mb-2">20M+</div>
                  <div className="text-muted-foreground text-xs sm:text-base">Active Users</div>
                </Card>
                <Card className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl text-primary mb-1 sm:mb-2">10+</div>
                  <div className="text-muted-foreground text-xs sm:text-base">Published Apps</div>
                </Card>
                <Card className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl text-primary mb-1 sm:mb-2">150+</div>
                  <div className="text-muted-foreground text-xs sm:text-base">Team Members</div>
                </Card>
                <Card className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl text-primary mb-1 sm:mb-2">25+</div>
                  <div className="text-muted-foreground text-xs sm:text-base">Awards Won</div>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-3 sm:mb-4">Meet Our Leadership Team</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Experienced leaders driving innovation and excellence at Olena Group.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/10 to-purple-300/20">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1 font-semibold">{member.name}</h3>
                    <p className="text-sm text-primary mb-3 font-medium">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-3 sm:mb-4">Our Journey</h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              Key milestones that shaped Olena Group into what it is today.
            </p>
          </motion.div>

          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-3 sm:gap-4 md:gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-purple-700 flex items-center justify-center text-white">
                    <milestone.icon size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>
                </div>
                <Card className="flex-1 p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                    <h3 className="text-base sm:text-lg">{milestone.title}</h3>
                    <span className="text-primary text-sm sm:text-base">{milestone.year}</span>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base">{milestone.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
