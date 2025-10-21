import { motion } from "motion/react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { 
  MapPin, 
  Briefcase, 
  Clock,
  Heart,
  Coffee,
  Laptop,
  Rocket,
  GraduationCap,
  TrendingUp,
  Users
} from "lucide-react";

export function CareersPage() {
  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "We're looking for an experienced frontend developer to build beautiful, performant web applications using React and modern technologies."
    },
    {
      title: "iOS Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      description: "Join our mobile team to create amazing iOS applications that delight millions of users worldwide."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / London",
      type: "Full-time",
      description: "Help us design intuitive and beautiful user experiences that make complex tasks simple and enjoyable."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco",
      type: "Full-time",
      description: "Lead product strategy and execution for one of our flagship applications, working with cross-functional teams."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Singapore",
      type: "Full-time",
      description: "Build and maintain our cloud infrastructure, ensuring high availability and performance of our applications."
    },
    {
      title: "Content Marketing Manager",
      department: "Marketing",
      location: "Remote / Toronto",
      type: "Full-time",
      description: "Create compelling content that tells our story and engages our global audience across multiple channels."
    },
    {
      title: "Mobile QA Engineer",
      department: "Quality Assurance",
      location: "Remote",
      type: "Full-time",
      description: "Ensure the quality of our mobile applications through comprehensive testing and automation."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote / Austin",
      type: "Full-time",
      description: "Help our enterprise customers succeed with our products through training, support, and relationship building."
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance for you and your family"
    },
    {
      icon: Laptop,
      title: "Remote-First",
      description: "Work from anywhere with flexible hours and home office stipend"
    },
    {
      icon: Coffee,
      title: "Unlimited PTO",
      description: "Take the time you need to recharge and maintain work-life balance"
    },
    {
      icon: Rocket,
      title: "Career Growth",
      description: "Professional development budget and mentorship opportunities"
    },
    {
      icon: GraduationCap,
      title: "Learning Budget",
      description: "$2,000 annual allowance for courses, conferences, and books"
    },
    {
      icon: TrendingUp,
      title: "Equity Options",
      description: "Competitive equity packages to share in our success"
    },
    {
      icon: Users,
      title: "Team Events",
      description: "Regular team building activities and annual company retreats"
    },
    {
      icon: Briefcase,
      title: "Latest Equipment",
      description: "Top-of-the-line hardware and software to do your best work"
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
            <h1 className="mb-4 sm:mb-6">Join Olena Group</h1>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              Build the future of digital experiences with a team of passionate innovators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-3 sm:mb-4">Why Work With Us</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              We believe in creating an environment where talented people can do their best work and grow their careers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-700 flex items-center justify-center mb-4">
                    <benefit.icon className="text-white" size={24} />
                  </div>
                  <h3 className="mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-3 sm:mb-4">Open Positions</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Find your next opportunity and join our growing team.
            </p>
          </motion.div>

          <div className="space-y-3 sm:space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                        <h3 className="font-semibold text-base sm:text-lg">{position.title}</h3>
                        <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          {position.department}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">{position.description}</p>
                      
                      <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <MapPin size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <Clock size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                          <span>{position.type}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="lg:self-start w-full lg:w-auto">
                      Apply Now
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Our Culture</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  At Olena Group, we've built a culture that values creativity, collaboration, and continuous learning. We believe that diverse perspectives make us stronger and that everyone's voice matters.
                </p>
                <p>
                  We're committed to maintaining a healthy work-life balance, supporting remote work, and providing opportunities for professional growth. Our team members are passionate about what they do and supportive of one another.
                </p>
                <p>
                  Whether you're an early-career professional or a seasoned expert, you'll find opportunities to learn, grow, and make a meaningful impact on millions of users worldwide.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-purple-300/10 border-primary/20">
                <h3 className="mb-6">Our Values</h3>
                <ul className="space-y-4">
                  {[
                    "Innovation: We embrace new ideas and challenge the status quo",
                    "Excellence: We strive for the highest quality in everything we do",
                    "Collaboration: We work together to achieve shared goals",
                    "Integrity: We act with honesty and transparency",
                    "User Focus: We put our users at the center of every decision",
                    "Growth: We invest in personal and professional development"
                  ].map((value) => (
                    <li key={value} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                      <span className="text-muted-foreground">{value}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-3 sm:mb-4">Don't See the Right Role?</h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 px-4">
              We're always looking for talented people. Send us your resume and let's talk about future opportunities.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 w-full xs:w-auto">
              Send General Application
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
