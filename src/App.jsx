import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe, 
  Terminal, 
  BookOpen, 
  ChevronRight,
  User, 
  Briefcase,
  Layers,
  Award,
  TrendingUp,
  Download,
  Menu,
  X,
  ArrowRight,
  Star,
  Zap,
  Target
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const profile = {
    name: "Atharv Trivedi",
    role: "B.Tech ICT Student @ DA-IICT",
    location: "Gandhinagar, India",
    email: "trivediatharv0402@gmail.com",
    github: "https://github.com/Atharv42",
    linkedin: "https://linkedin.com/in/atharv-trivedi",
    resume: "../public/Resources/Atharv_Trivedi_Resume.pdf",
    photo: "../public/Resources/Atharv_photo.jpeg",
    summary: "Passionate about building systems that matter. I specialize in low-level programming, embedded systems, and full-stack development, with a track record of creating award-winning IoT solutions and scalable web applications."
  };

  const stats = [
    { label: "GPA", value: "8.64/10", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Projects", value: "15+", icon: <Code2 className="w-5 h-5" /> },
    { label: "Technologies", value: "20+", icon: <Layers className="w-5 h-5" /> },
    { label: "Awards", value: "3", icon: <Award className="w-5 h-5" /> }
  ];

  const achievements = [
    {
      title: "IEEE MYOSA Contest 2024",
      subtitle: "Semi-Finalist",
      desc: "Selected among top teams nationwide for Heaven - an innovative gesture-controlled security system.",
      year: "2024"
    }, 
    {
      title: "AIgnite 2024 (IIT Bombay)",
      subtitle: "Technical Excellence Award",
      desc: "Recognized for innovative problem-solving and technical implementation during the AIgnite 2024 national level competition.",
      year: "2024"
    }
  ];

  const projects = [
    {
      title: "SteadySpoon",
      subtitle: "Tremor-Stabilizing Assistive Device",
      desc: "Award-winning low-cost assistive device using MPU6050 gyroscope and Arduino-based PID control to neutralize hand tremors for Parkinson's patients. Achieved 85% tremor reduction with sub-$50 cost.",
      tech: ["Arduino", "PID Control", "MPU6050", "C++"],
      icon: <Cpu className="w-6 h-6" />,
      demo: "PC122_final1.pdf",
      impact: "85% tremor reduction"
    }, 
    {
      title: "Heaven",
      subtitle: "Gesture-Controlled Smart Security",
      desc: "IEEE MYOSA 2024 Semi-finalist. ESP32-based system enabling hands-free appliance control via gesture recognition and real-time intrusion detection with mobile alerts.",
      tech: ["ESP32", "I2C", "IoT", "Mobile App"],
      icon: <Layers className="w-6 h-6" />,
      demo: "../public/Resources/Myosa_report.pdf",
      impact: "IEEE Semi-finalist"
    },
    {
      title: "PlaceME",
      subtitle: "Full-Stack Placement Management System",
      desc: "Comprehensive recruitment platform with automated student registration, real-time application tracking, and role-based dashboards for administrators and students.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      icon: <Globe className="w-6 h-6" />,
      github: "https://github.com/Atharv42/PlaceME",
      impact: ""
    },
    {
      title: "Tetris Arcade",
      subtitle: "OOP-Based C++ Game Engine",
      desc: "Feature-rich Tetris implementation showcasing advanced OOP principles, efficient collision detection, smooth animations, and modular game state management.",
      tech: ["C++", "OOP", "SDL2", "Game Dev"],
      icon: <Terminal className="w-6 h-6" />,
      github: "https://github.com/Dharmraj06/IT-206_Tetris",
      impact: "Clean architecture"
    }
  ];

  const experience = [
    {
      company: "Paryavaran Mitra",
      role: "Tech Intern",
      period: "Jan 2026 - Present",
      location: "Remote",
      points: [
        "Leading frontend development for official NGO website using React, achieving 40% faster load times through optimization",
        "Architecting secure RESTful APIs and admin panels for content management with JWT authentication",
        "Implementing responsive design patterns ensuring seamless experience across 10+ device types"
      ]
    },
    {
      company: "Paryavaran Mitra",
      role: "Rural Development Intern",
      period: "Dec 2025 - Jan 2026",
      location: "On-site",
      points: [
        "Conducted environmental awareness workshops reaching 200+ community members",
        "Researched and documented waste management policies for rural implementation",
        "Produced 5+ educational podcast episodes for Radio-L.J. on sustainability topics"
      ]
    }
  ];

  const skills = {
    languages: ["C", "C++", "JavaScript", "SQL", "Python", "MATLAB"],
    frameworks: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    tools: ["Git", "Arduino IDE", "Visual Studio", "Linux", "Docker"],
    domains: ["DSA", "Operating Systems", "DBMS", "Systems Programming", "IoT", "Embedded Systems"]
  };

  const NavLink = ({ id, label }) => (
    <button
      onClick={() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
        setMobileMenuOpen(false);
      }}
      className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
        activeSection === id 
          ? 'text-blue-600 font-semibold' 
          : 'text-slate-600 hover:text-blue-500'
      }`}
    >
      {label}
    </button>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg shadow-slate-200/50 py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          
          {/* Left Spacer to balance the Resume button on desktop */}
          <div className="hidden md:block w-32"></div>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-1">
            <NavLink id="home" label="Home" />
            <NavLink id="about" label="About" />
            <NavLink id="experience" label="Experience" />
            <NavLink id="projects" label="Projects" />
            <NavLink id="achievements" label="Achievements" />
            <NavLink id="contact" label="Contact" />
          </div>

          {/* Desktop Resume Button & Mobile Menu Trigger */}
          <div className="flex items-center justify-end w-32">
            <div className="hidden md:block">
              <a 
                href={profile.resume} 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-200"
              >
                <Download className="w-4 h-4" /> Resume
              </a>
            </div>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-xl border-t border-slate-200">
            <div className="flex flex-col p-4 space-y-2">
              <NavLink id="home" label="Home" />
              <NavLink id="about" label="About" />
              <NavLink id="experience" label="Experience" />
              <NavLink id="projects" label="Projects" />
              <NavLink id="achievements" label="Achievements" />
              <NavLink id="contact" label="Contact" />
              <a 
                href={profile.resume}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center space-y-8 flex flex-col items-center">
            
            {/* Rectangular Profile Photo Frame */}
            <div className="relative group mb-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-48 h-60 md:w-56 md:h-72 bg-white rounded-2xl overflow-hidden border-4 border-white shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img 
                  src={profile.photo} 
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-4 tracking-tight">
                {profile.name}
              </h1>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full"></div>
            </div>

            <p className="text-2xl md:text-3xl font-semibold text-slate-700">
              B.Tech ICT Student @ <span className="text-blue-600">DA-IICT</span>
            </p>

            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Building the future with <span className="font-semibold text-blue-600">systems programming</span>, 
              <span className="font-semibold text-indigo-600"> embedded systems</span>, and 
              <span className="font-semibold text-purple-600"> full-stack development</span>
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-6 bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-blue-600 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-300 transition-all duration-300 flex items-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-slate-700 rounded-xl font-semibold border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                View Projects
              </button>
            </div>

            <div className="flex justify-center gap-6 pt-4">
              <a href={profile.github} className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-slate-600 hover:text-blue-600">
                <Github className="w-6 h-6" />
              </a>
              <a href={profile.linkedin} className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-slate-600 hover:text-blue-600">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={`mailto:${profile.email}`} className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-slate-600 hover:text-blue-600">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="prose prose-lg">
                <p className="text-slate-600 leading-relaxed text-lg">
                  {profile.summary}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Currently pursuing B.Tech in Information and Communication Technology at DA-IICT, 
                  I'm driven by a passion for creating technology that makes a real difference. 
                  From building assistive devices for Parkinson's patients to developing scalable 
                  web applications, I love solving complex problems with elegant solutions.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-100 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 rounded-xl">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Education</h3>
                    <p className="text-lg font-semibold text-blue-600">DA-IICT, Gandhinagar</p>
                    <p className="text-slate-600">B.Tech in Information & Communication Technology</p>
                    <p className="text-sm text-slate-500 mt-1">2024 - 2028</p>
                    <div className="mt-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <span className="text-lg font-bold text-slate-900">GPA: 8.64 / 10.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Zap className="text-blue-600" /> Technical Skills
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map(s => (
                      <span key={s} className="px-4 py-2 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 rounded-lg text-sm font-medium transition-colors border border-slate-200 hover:border-blue-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">Frameworks & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map(s => (
                      <span key={s} className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-sm font-medium transition-colors border border-blue-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">Core Competencies</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.domains.map(s => (
                      <span key={s} className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-lg text-sm font-medium border border-indigo-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <div className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-300 before:to-transparent">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[45%] p-8 rounded-2xl border-2 border-slate-200 bg-white shadow-xl hover:shadow-2xl hover:border-blue-300 transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                      <p className="text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mt-4">
                    {exp.points.map((p, i) => (
                      <li key={i} className="flex gap-3 text-slate-600">
                        <ChevronRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative p-8 rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 hover:border-blue-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                {project.impact && (
                  <div className="absolute -top-3 -right-3 px-4 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                    <Target className="w-3 h-3" />
                    {project.impact}
                  </div>
                )}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center mb-6 shadow-lg">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-4">{project.subtitle}</p>
                <p className="text-slate-600 mb-6 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white border border-slate-300 rounded-lg text-xs font-bold text-slate-600 uppercase">
                      {t}
                    </span>
                  ))}
                </div>
                
                {/* Conditional Rendering for Buttons */}
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                      <ExternalLink className="w-4 h-4" /> Documentation
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Achievements
            </h2>
            <div className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>
          <div className="space-y-6">
            {achievements.map((achieve, idx) => (
              <div key={idx} className="p-8 bg-white rounded-2xl border-2 border-slate-200 shadow-lg hover:border-blue-300 transition-all">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{achieve.title}</h3>
                    <p className="text-blue-600 font-semibold">{achieve.subtitle}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold">{achieve.year}</span>
                </div>
                <p className="text-slate-600">{achieve.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-8"></div>
          <p className="text-slate-600 mb-12">
            I'm currently looking for opportunities to build impactful software.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-4 group">
              <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <a href={`mailto:${profile.email}`} className="text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                {profile.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-2xl font-bold mb-4">AT.</div>
          <p className="text-slate-400 text-sm mb-6">Atharv Trivedi — B.Tech ICT Student @ DA-IICT</p>
          <div className="flex justify-center gap-4 mb-8">
            <a href={profile.github} className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href={profile.linkedin} className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
          <div className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Atharv Trivedi. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;