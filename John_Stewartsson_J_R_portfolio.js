import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Cpu, 
  BookOpen, 
  Trophy, 
  Code, 
  Briefcase, 
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  Award,
  Zap,
  HeartPulse
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');

  const userData = {
    name: "John Stewartsson J R",
    title: "Hardware & Electronics Engineer",
    email: "stewartsson@gmail.com",
    phone: "+91 9491999972",
    location: "Chennai, India",
    github: "https://github.com/Stewartsson",
    linkedin: "https://www.linkedin.com/in/john-stewartsson-j-r-696a34313",
    about: "Aspiring Engineer with a foundational understanding of analog and digital electronics, and hands-on exposure to paper publishing. Eager to develop expertise in VLSI, embedded systems, and semiconductor technology. Strong analytical and problem-solving skills, with a keen interest in hardware innovation.",
    education: [
      {
        school: "St. Joseph's Institute of Technology",
        degree: "B.E. Electronics and Communication",
        period: "2024 - 2028",
        grade: "CGPA: 8.69",
        status: "Currently in 5th Semester"
      },
      {
        school: "Saratha Matric Higher Secondary School",
        degree: "Higher Secondary",
        period: "Completed",
        grade: "Score: 523/600 (87.16%)"
      }
    ],
    experience: [
      {
        company: "Amalgamation Valeo Clutch Private Limited",
        role: "Industrial Intern",
        period: "Nov - Dec 2025",
        location: "Chennai, India",
        description: "Gained industrial knowledge and exposure to multi-national manufacturing atmosphere. Rotated through every department to understand end-to-end industrial processes."
      },
      {
        company: "Nexgen Nextopia",
        role: "Embedded Systems Intern",
        period: "June 2025",
        location: "Thiruchengodu, India",
        description: "Gained hands-on experience in embedded systems, digital electronics, and networking protocols."
      }
    ],
    projects: [
      {
        title: "NeuroGuardian",
        category: "Healthcare & IoT",
        description: "An integrated 3-in-1 IoT ecosystem protecting diabetic patients by detecting falls and scanning feet for hidden ulcers.",
        tags: ["IoT", "Sensors", "Healthcare"]
      },
      {
        title: "Smart Crutch System",
        category: "Healthcare & IoT",
        description: "Detects falls and sends real-time location messages using integrated sensor modules for patient safety.",
        tags: ["GSM", "GPS", "Accelerometers", "Healthcare"]
      },
      {
        title: "Mini Satellite",
        category: "Aerospace",
        description: "Ongoing project focused on developing a compact satellite system for data collection.",
        tags: ["Embedded", "Aerospace", "Sensors"]
      },
      {
        title: "Mochi Bot",
        category: "Robotics",
        description: "An interactive robot that speaks and exhibits multiple reactions when interacting with humans.",
        tags: ["Robotics", "HCI", "Embedded"]
      },
      {
        title: "Gesture Movement Car",
        category: "Robotics",
        description: "A robot car controlled wirelessly via hand gestures using ESP32.",
        tags: ["ESP32", "IMU Sensors", "Wireless"]
      },
      {
        title: "Home Automation",
        category: "IoT",
        description: "Full home automation system using ESP32 and various environmental sensors.",
        tags: ["ESP32", "Automation", "Sensors"]
      }
    ],
    skills: {
      languages: ["C", "HTML", "Python"],
      hard: ["VLSI Design", "Embedded Design", "PCB Design", "Robotics Design", "Digital Electronics"],
      soft: ["Adaptability", "Problem Solving", "Analytical Analysis", "Time Management"]
    },
    certifications: [
      "Intel: Fabrication 101 Course in VLSI",
      "Maven Silicon: Certificate on VLSI Design",
      "NIELIT Calicut: Embedded Design Workshop",
      "NPTEL: Introduction to Microsensors",
      "Skill Rack: Python & C Mastery",
      "Udemy: Python, C & HTML Programming"
    ]
  };

  const categories = ['All', 'Healthcare', 'Robotics', 'IoT', 'Aerospace'];
  const filteredProjects = activeTab === 'All' 
    ? userData.projects 
    : userData.projects.filter(p => p.category.includes(activeTab));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30 overflow-x-hidden relative">
      
      {/* --- BACKGROUND DESIGN --- */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: `radial-gradient(#22d3ee 0.5px, transparent 0.5px), linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
             backgroundSize: '40px 40px, 40px 40px, 40px 40px',
             backgroundPosition: '0 0, 20px 20px, 20px 20px'
           }}>
      </div>

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center font-bold text-slate-900 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                  JS
                </div>
                <span className="text-xl font-bold tracking-tighter hidden sm:inline">John Stewartsson J R</span>
                <span className="text-xl font-bold tracking-tighter sm:hidden">STEWARTSSON</span>
              </div>
              
              <div className="hidden md:flex space-x-8">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-widest">
                    {item}
                  </a>
                ))}
              </div>

              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-400">
                  {isMenuOpen ? <X /> : <Menu />}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 px-4 py-4 space-y-4">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-slate-400 hover:text-cyan-400 font-medium uppercase tracking-widest text-xs"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="pt-40 pb-20 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-8 text-center md:text-left">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping mr-2"></div>
                Available for VLSI/Embedded Internships
              </div>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
                CORE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">ENGINEER.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-light mx-auto md:mx-0">
                Hardware design, VLSI architecture, and Embedded intelligence. Currently shaping ideas at St. Joseph's.
              </p>
              <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                <a href="#contact" className="px-8 py-4 bg-cyan-500 text-slate-900 font-black rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all flex items-center gap-2 uppercase text-sm tracking-widest">
                  Connect Now <Mail size={18} />
                </a>
                <div className="flex gap-6 items-center px-4">
                  <a href={userData.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-all scale-110"><Github /></a>
                  <a href={userData.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-all scale-110"><Linkedin /></a>
                </div>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-md">
              <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] -z-10 rounded-full"></div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative border border-slate-800 p-3 rounded-2xl bg-slate-900/40 backdrop-blur-sm">
                  <div className="aspect-[4/5] bg-slate-800/50 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                    <img 
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                      alt="Tech Visualization" 
                      className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="about" className="py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-24">
              {[
                { label: 'Academic CGPA', val: '8.69', icon: <Cpu className="text-cyan-400" /> },
                { label: 'Tech Certs', val: '10+', icon: <Award className="text-cyan-400" /> },
                { label: 'Papers Published', val: '01', icon: <BookOpen className="text-cyan-400" /> }
              ].map((stat, i) => (
                <div key={i} className="p-6 md:p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-3xl group hover:border-cyan-500/30 transition-all">
                  <div className="mb-4">{stat.icon}</div>
                  <h3 className="text-3xl md:text-5xl font-black mb-1 group-hover:text-cyan-400 transition-colors">{stat.val}</h3>
                  <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-cyan-500 mb-4 italic">/ Engineering Philosophy</h2>
                <h3 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">Bridging the gap between software logic and physical silicon.</h3>
                <p className="text-slate-400 leading-relaxed text-lg font-light">
                  {userData.about}
                </p>
              </div>
              <div className="p-8 bg-cyan-500/5 border border-cyan-500/10 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 text-cyan-500/20"><BookOpen size={80} /></div>
                <h4 className="font-black text-xs uppercase tracking-widest text-cyan-500 mb-4">Latest Publication</h4>
                <p className="text-xl font-bold text-slate-100 mb-2">Ocean Cleaning Robot</p>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">Presented at NCEAM National Conference. Focuses on autonomous hardware for maritime environmental maintenance.</p>
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all">
                  Read Abstract <ChevronRight size={14} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-4 bg-slate-900/20 backdrop-blur-3xl border-y border-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-cyan-500 mb-2 italic">/ Tech Stack</h2>
              <h3 className="text-4xl font-bold">Capabilities</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Programming */}
              <div className="p-8 bg-slate-950/50 border border-slate-800 rounded-3xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-cyan-500/10 rounded-lg"><Code size={20} className="text-cyan-400" /></div>
                  <h4 className="font-black uppercase tracking-widest text-sm">Languages</h4>
                </div>
                <div className="space-y-6">
                  {userData.skills.languages.map(skill => (
                    <div key={skill} className="space-y-2">
                      <div className="flex justify-between text-xs font-bold text-slate-300 uppercase">
                        <span>{skill}</span>
                        <span className="text-cyan-400 opacity-50">Expertise</span>
                      </div>
                      <div className="h-[2px] w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500 w-[90%]"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hardware */}
              <div className="p-8 bg-slate-950/50 border border-slate-800 rounded-3xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-blue-500/10 rounded-lg"><Cpu size={20} className="text-blue-400" /></div>
                  <h4 className="font-black uppercase tracking-widest text-sm">Hardware & VLSI</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {userData.skills.hard.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="p-8 bg-slate-950/50 border border-slate-800 rounded-3xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-purple-500/10 rounded-lg"><Briefcase size={20} className="text-purple-400" /></div>
                  <h4 className="font-black uppercase tracking-widest text-sm">Professional</h4>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {userData.skills.soft.map(skill => (
                    <div key={skill} className="flex items-center gap-3 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-cyan-500 transition-colors"></div>
                      <span className="text-sm text-slate-400 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
              <div>
                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-cyan-500 mb-2 italic">/ Engineering Lab</h2>
                <h3 className="text-4xl font-bold">Featured Projects</h3>
              </div>
              <div className="flex gap-2 p-1.5 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-x-auto max-w-full">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-4 md:px-6 py-2 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === cat ? 'bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/20' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, idx) => (
                <div key={idx} className="group relative flex flex-col overflow-hidden bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500">
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={20} className="text-cyan-400" />
                  </div>
                  <div className="mb-6 w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    {project.category.includes('Healthcare') ? <HeartPulse size={20} /> : 
                     project.category.includes('Aerospace') ? <Trophy size={20} /> : <Zap size={20} />}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed font-light">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-slate-600 bg-slate-950/50 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Experience */}
        <section id="experience" className="py-24 px-4 bg-slate-950/50 relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-cyan-500 mb-2 italic">/ Career Path</h2>
              <h3 className="text-4xl font-bold">Industrial Exposure</h3>
            </div>
            
            <div className="space-y-16">
              {userData.experience.map((exp, idx) => (
                <div key={idx} className="relative grid md:grid-cols-[1fr_2fr] gap-8 group">
                  <div className="space-y-2">
                    <span className="text-cyan-500 font-mono text-xs font-bold">{exp.period}</span>
                    <h4 className="text-xl font-bold leading-tight">{exp.company}</h4>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <MapPin size={12} /> {exp.location}
                    </p>
                  </div>
                  <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 group-hover:border-cyan-500/20 transition-all">
                    <p className="text-cyan-400 font-bold mb-4 uppercase text-xs tracking-[0.2em] italic">{exp.role}</p>
                    <p className="text-slate-400 leading-relaxed font-light italic">
                      "{exp.description}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Verification Section */}
        <section className="py-24 px-4 border-y border-slate-900 bg-slate-950/80">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-slate-500 text-[10px] font-black uppercase tracking-[0.5em] mb-12 italic">Credential Verified By</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 text-center items-center">
              {['Intel', 'Maven Silicon', 'NIELIT', 'NPTEL', 'Udemy'].map(brand => (
                <div key={brand} className="text-slate-700 font-black text-xl md:text-2xl uppercase tracking-tighter hover:text-cyan-500/50 transition-colors cursor-default select-none">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden bg-slate-900 border border-slate-800 rounded-[40px] p-8 md:p-20 text-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
              
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-none tracking-tighter">
                READY TO <br />
                <span className="text-cyan-400">INNOVATE?</span>
              </h2>
              
              <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed">
                Whether it's a VLSI architecture discussion or a healthcare-tech collaboration, 
                let's build the next generation of hardware together.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <a href={`mailto:${userData.email}`} className="group w-full md:w-auto px-10 py-5 bg-cyan-500 text-slate-900 font-black rounded-2xl flex items-center justify-center gap-3 uppercase text-sm tracking-widest hover:shadow-[0_0_50px_rgba(6,182,212,0.4)] transition-all">
                  Shoot an Email <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex gap-4">
                   <a href={`tel:${userData.phone}`} className="p-5 bg-slate-800 rounded-2xl text-slate-300 hover:text-cyan-400 transition-colors">
                    <Phone size={24} />
                   </a>
                   <a href={userData.linkedin} target="_blank" rel="noreferrer" className="p-5 bg-slate-800 rounded-2xl text-slate-300 hover:text-cyan-400 transition-colors">
                    <Linkedin size={24} />
                   </a>
                </div>
              </div>
              
              <div className="mt-20 pt-12 border-t border-slate-800 text-[10px] text-slate-600 font-black uppercase tracking-[0.4em]">
                Located in {userData.location}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-slate-900 text-center text-slate-600">
           <p className="text-[10px] font-black uppercase tracking-widest italic opacity-50">
             Build 2026.02 // Engineered by John Stewartsson J R
           </p>
        </footer>
      </div>
    </div>
  );
};

export default App;