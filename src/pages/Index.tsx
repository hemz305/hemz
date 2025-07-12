import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download, Menu, X } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = {
    "Programming Languages": ["Java", "Python", "SQL", "C", "JavaScript", "DSA"],
    "Web Technologies": ["HTML", "CSS", "Bootstrap", "React.js"],
    "Frameworks & Libraries": ["Spring Boot", "Hibernate"],
    "Databases": ["MySQL"],
    "Version Control": ["Git", "GitHub"],
    "Tools & Platforms": ["VS Code", "Notepad", "Eclipse", "Maven"]
  };

  const projects = [
    {
      title: "Doctor Appointment Booking System",
      description: "A healthcare appointment booking system where patients can book doctor consultations",
      features: [
        "Booking System: Patients book & manage appointments",
        "Doctor Dashboard: View schedule & accept/reject appointments", 
        "Admin Panel: Manage doctors & patient records",
        "Hibernate Mapping: One-to-Many (Doctor - Appointments), Many-to-One (Patient - Doctor)"
      ],
      tech: ["HTML", "CSS", "Bootstrap", "Frontend", "Spring Boot", "Hibernate", "MySQL", "Backend"],
      category: "Healthcare"
    },
    {
      title: "Laundry Management System",
      description: "Complete laundry management solution for efficient operations",
      features: [
        "Operating System: Windows Application",
        "Server: Apache",
        "Front End: HTML5, CSS3, JavaScript", 
        "Backend: PHP, MySQL Database (PDO/PHP Data Objects)",
        "Browser: Google Chrome, Mozilla Firefox"
      ],
      tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
      category: "Business Management"
    },
    {
      title: "Personal Portfolio Website",
      description: "Responsive personal portfolio showcasing projects and skills",
      features: [
        "Responsive design for all devices",
        "Modern UI/UX with smooth animations",
        "Project showcase with detailed descriptions",
        "Contact form integration"
      ],
      tech: ["React", "TypeScript", "Tailwind CSS"],
      category: "Web Development"
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications",
      period: "2024 - 2026",
      institution: "Seshadripuram College, Bengaluru"
    },
    {
      degree: "Bachelor of Science",
      period: "2020 - 2023", 
      institution: "MES College of Arts, Science, and Commerce, Bengaluru"
    },
    {
      degree: "PUC",
      period: "2018 - 2020",
      institution: "ICIGIO Mahesh PU College"
    },
    {
      degree: "SSLC",
      period: "2017 - 2018",
      institution: "DR NS Harikar Bharath Sevadal School, Bengaluru"
    }
  ];

  const achievements = [
    "Participated in the 2023 Central Government Quiz on Cyber Security",
    "Attended various hackton events regarding web development",
    "University Powerlifter (gold medalist)",
    "Participated in Intercollegiate IT debate secured gold medal"
  ];

  const hobbies = ["Cricket", "Powerlifting", "Boxing"];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-primary">
              Hemanth Kumar B
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item 
                      ? 'text-primary font-medium' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-2 py-1 capitalize text-muted-foreground hover:text-foreground"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden" style={{background: 'var(--gradient-hero)'}}>
        {/* Premium background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <div className="relative inline-block mb-6">
              <img 
                src="/lovable-uploads/d2129539-59bf-4747-9b0f-30ad538e164e.png" 
                alt="Hemanth Kumar B"
                className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/30 shadow-2xl"
                style={{boxShadow: 'var(--shadow-glow)'}}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 animate-pulse"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
              Hemanth Kumar B
            </h1>
            <h2 className="text-xl md:text-2xl text-primary/90 mb-6 font-medium">
              Java Developer
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Enthusiastic and detail-oriented Java Developer with a solid understanding of 
              Core Java, OOPS concepts, and basic SQL. Proficient in developing applications 
              using Java technologies alongside web technologies like HTML, CSS, 
              Bootstrap, and JavaScript. Familiar with frameworks such as Spring Boot and 
              Hibernate for building scalable backend systems, and experienced with MySQL 
              database operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg" style={{boxShadow: 'var(--shadow-premium)'}}>
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 font-semibold">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative" style={{background: 'var(--gradient-secondary)'}}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with strong technical skills and leadership qualities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Professional Profile</h3>
              <p className="text-muted-foreground mb-6">
                I am an enthusiastic Java Developer with expertise in full-stack development. 
                My experience spans across various technologies including Java, Spring Boot, 
                React.js, and database management with MySQL. I'm passionate about creating 
                efficient, scalable solutions and continuously learning new technologies.
              </p>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {["Project Management", "Public Relations", "Teamwork", "Time Management", "Leadership"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <h4 className="text-lg font-semibold">Hobbies & Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((hobby) => (
                    <Badge key={hobby} variant="outline">{hobby}</Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <Card className="backdrop-blur-sm border-primary/20" style={{background: 'var(--gradient-card)', boxShadow: 'var(--shadow-card)'}}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Bengaluru, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>9620060620</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>hemanthkalal04@gmail.com</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-4">Recent Achievements</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive skill set spanning full-stack development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="group hover:shadow-xl transition-all duration-500 backdrop-blur-sm border-primary/20 hover:border-primary/40" style={{background: 'var(--gradient-card)', boxShadow: 'var(--shadow-card)'}}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-primary group-hover:text-primary/90 transition-colors">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="group-hover:bg-primary/20 group-hover:text-primary transition-all">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative" style={{background: 'var(--gradient-secondary)'}}>
        <div className="absolute inset-0 bg-gradient-to-l from-primary/5 to-accent/5"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              Showcasing my development expertise through practical applications
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 backdrop-blur-sm border-primary/20 hover:border-primary/40" style={{background: 'var(--gradient-card)', boxShadow: 'var(--shadow-card)'}}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button size="sm" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <p className="text-lg text-muted-foreground">
              Academic foundation supporting my technical expertise
            </p>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-500 backdrop-blur-sm border-primary/20 hover:border-primary/40" style={{background: 'var(--gradient-card)', boxShadow: 'var(--shadow-card)'}}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0 self-start md:self-center">
                      {edu.period}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative" style={{background: 'var(--gradient-secondary)'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss opportunities and collaborations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="backdrop-blur-sm border-primary/20" style={{background: 'var(--gradient-card)', boxShadow: 'var(--shadow-card)'}}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-primary">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">9620060620</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">hemanthkalal04@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Bengaluru, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-primary/20">
                  <h4 className="font-semibold mb-4 text-primary">Connect With Me</h4>
                  <div className="flex gap-4">
                    <Button size="sm" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button size="sm" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="backdrop-blur-sm border-primary/20" style={{background: 'var(--gradient-card)', boxShadow: 'var(--shadow-card)'}}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-primary">Send Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" style={{boxShadow: 'var(--shadow-premium)'}}>Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-primary/20 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Hemanth Kumar B. All rights reserved. • Built with premium design & attention to detail.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;