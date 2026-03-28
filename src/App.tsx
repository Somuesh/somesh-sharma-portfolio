import { 
  Github, 
  Mail, 
  Linkedin, 
  ExternalLink, 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  Terminal, 
  Award, 
  Briefcase, 
  GraduationCap,
  ChevronRight,
  Layers
} from 'lucide-react';
import { motion } from 'motion/react';

const SKILLS = [
  { category: "Languages", items: ["Python", "JavaScript"] },
  { category: "Frontend", items: ["React", "Odoo OWL", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
  { category: "Backend", items: ["Node.js", "Express", "Django", "FastAPI", "Odoo Framework"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { category: "APIs & Integrations", items: ["REST APIs", "Webhooks", "Shopify", "SMS Gateways", "Analytics", "and many more"] },
  { category: "DevOps & Tooling", items: ["Linux/Unix", "Git/GitHub", "CI/CD", "Cron Jobs", "Regex", "XPath"] },
];

const EXPERIENCE = [
  {
    company: "SiGMA World",
    role: "Full Stack Developer",
    period: "Jul 2025 – Present",
    description: [
      "Architected and developed a large-scale platform enabling collaboration between affiliates and operators.",
      "Designed and implemented REST APIs in collaboration with international engineering teams.",
      "Led development of an Affiliate Marketplace onboarding 150+ operators.",
      "Engineered a centralized data warehouse integrating Google Analytics and Search Console."
    ]
  },
  {
    company: "Odoo IN Pvt Ltd",
    role: "Full Stack Developer / Team Lead",
    period: "Feb 2024 – Jul 2025",
    description: [
      "Owned enhancement of core Odoo ERP modules including PoS, Sales, HR, and Sign.",
      "Led 200+ hours of Point of Sale development, implementing loyalty systems and OTP validation.",
      "Designed and delivered third-party integrations including Shopify and biometric devices.",
      "Built one-click ERP data migration tools."
    ]
  },
  {
    company: "Amazon Development Centre India",
    role: "Catalog Lead (TechOps Associate)",
    period: "Apr 2022 – Jan 2024",
    description: [
      "Led process re-engineering initiatives reducing deployment time from 3 hours to single-click.",
      "Designed internal automation tools saving 20 hours of effort per month.",
      "Extracted and analyzed data from 250+ external websites using XPath and Regex."
    ]
  }
];

const PROJECTS = [
  {
    title: "GA4 Service Sync",
    description: "A robust service to fetch and synchronize Google Analytics 4 data into MongoDB for centralized reporting and analysis.",
    tags: ["Node.js", "MongoDB", "GA4 API", "Automation"],
    link: "https://github.com/Somuesh/ga4_service_sync"
  },
  {
    title: "Fitness AI",
    description: "An intelligent React application that generates personalized workout suggestions based on user fitness levels and target muscle groups.",
    tags: ["React", "AI", "Tailwind CSS", "Render"],
    link: "https://github.com/Somuesh/Fitness-AI"
  },
  {
    title: "Visitor Management App",
    description: "A full-stack solution for tracking and managing visitor logs, enhancing security and operational efficiency for organizations.",
    tags: ["React", "Express", "Node.js", "MongoDB"],
    link: "https://github.com/Somuesh/visitor-management-app"
  },
  {
    title: "Point of Sale – Loyalty & SMS",
    description: "Designed user registration, loyalty accrual, and redemption workflows with OTP-based validation via SMS services.",
    tags: ["Odoo", "Python", "SMS API"]
  },
  {
    title: "Shopify – Odoo Integration",
    description: "Built bi-directional synchronization for products, customers, orders, and inventory using REST APIs and cron jobs.",
    tags: ["Shopify", "Odoo", "REST API", "Automation"]
  },
  {
    title: "Google Maps Scraper",
    description: "Developed a Chrome extension that increased lead generation by 40% through automated data extraction.",
    tags: ["JavaScript", "Chrome Extension", "Data Scraping"]
  }
];

const GITHUB_REPOS = [
  { name: "backlink-tracker", description: "Monitor and track backlinks for SEO performance.", lang: "JavaScript" },
  { name: "url-shortner", description: "A simple and efficient URL shortening service.", lang: "JavaScript" },
  { name: "web-crawler", description: "Automated tool for large-scale data extraction.", lang: "Python" },
  { name: "mini-twitter", description: "A lightweight social media clone with core features.", lang: "JavaScript" },
  { name: "MagicMart", description: "Modern e-commerce platform with seamless UX.", lang: "JavaScript" },
  { name: "DSA", description: "Collection of Data Structures and Algorithms implementations.", lang: "Python" }
];

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono font-bold text-indigo-600 tracking-tighter text-xl">SOMESH.SHARMA</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
          </div>
          <a 
            href="mailto:sharma.som766@gmail.com"
            className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all"
          >
            Get in touch
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">
            Full Stack Developer
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-tight mb-8">
            Building scalable <span className="text-indigo-600">web platforms</span> & ERP solutions.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            I'm Somesh Sharma, a Full Stack Developer with 5+ years of experience designing and scaling 
            data-intensive applications. Currently architecting high-performance systems at SiGMA World.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/somuesh" 
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a 
              href="mailto:sharma.som766@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="section-padding bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Expertise</h2>
            <div className="h-1 w-20 bg-indigo-600 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((skill, idx) => (
              <motion.div 
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:border-indigo-100 hover:bg-white transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {idx === 0 && <Terminal className="text-indigo-600" />}
                  {idx === 1 && <Globe className="text-indigo-600" />}
                  {idx === 2 && <Code2 className="text-indigo-600" />}
                  {idx === 3 && <Database className="text-indigo-600" />}
                  {idx === 4 && <Layers className="text-indigo-600" />}
                  {idx === 5 && <Cpu className="text-indigo-600" />}
                </div>
                <h3 className="text-lg font-bold mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span key={item} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="section-padding max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Professional Journey</h2>
          <div className="h-1 w-20 bg-indigo-600 rounded-full mx-auto"></div>
        </div>
        <div className="space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div 
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-[200px_1fr] gap-12">
                <div className="mb-4 md:mb-0">
                  <span className="text-sm font-bold text-indigo-600 uppercase tracking-widest">{exp.period}</span>
                </div>
                <div className="relative pb-12 border-l-2 border-slate-100 pl-8 md:pl-12">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                  <p className="text-lg font-medium text-slate-500 mb-6">{exp.company}</p>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-600 leading-relaxed">
                        <ChevronRight className="shrink-0 text-indigo-400" size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="section-padding bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400">
                    <Briefcase size={24} />
                  </div>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <ExternalLink size={20} className="text-slate-500 hover:text-indigo-400 transition-colors" />
                    </a>
                  ) : (
                    <ExternalLink size={20} className="text-slate-500" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-slate-700 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Repositories */}
          <div className="mt-24">
            <div className="flex items-center gap-4 mb-12">
              <h3 className="text-xl font-bold">More on GitHub</h3>
              <div className="h-px flex-1 bg-slate-800"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {GITHUB_REPOS.map((repo, idx) => (
                <a 
                  key={repo.name}
                  href={`https://github.com/Somuesh/${repo.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-6 rounded-2xl bg-slate-800/30 border border-slate-800 hover:bg-slate-800/50 hover:border-slate-700 transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                      <span className="font-mono text-sm font-bold text-slate-200">{repo.name}</span>
                    </div>
                    <Github size={16} className="text-slate-600 group-hover:text-slate-400" />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">{repo.description}</p>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${repo.lang === 'Python' ? 'bg-blue-500' : 'bg-yellow-500'}`}></div>
                    <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{repo.lang}</span>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a 
                href="https://github.com/somuesh" 
                target="_blank" 
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
              >
                View all 24 repositories <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Achievements */}
      <section className="section-padding max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <GraduationCap className="text-indigo-600" />
              Education
            </h2>
          </div>
          <div className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm">
            <h3 className="font-bold text-lg mb-1">Bachelor of Engineering in Computer Science</h3>
            <p className="text-slate-500 text-sm mb-4">Sagar Institute of Research and Technology, Bhopal</p>
            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">2015 – 2019</span>
          </div>
        </div>
        <div>
          <div className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Award className="text-indigo-600" />
              Key Achievements
            </h2>
          </div>
          <div className="space-y-4">
            {[
              "Employee of the Year – Odoo: Awarded within 10 months for exceptional ownership.",
              "Pure Performer – Amazon: Maintained 95%+ productivity and quality scores.",
              "Developed a Google Maps scraper extension that increased lead generation by 40%."
            ].map((achievement, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-white flex gap-4 items-start">
                <div className="mt-1 w-2 h-2 rounded-full bg-indigo-600 shrink-0" />
                <p className="text-slate-600 text-sm leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="font-mono font-bold text-slate-900 mb-2">SOMESH SHARMA</p>
            <p className="text-slate-500 text-sm">© 2026 • Full Stack Developer</p>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/somuesh" className="text-slate-400 hover:text-indigo-600 transition-colors"><Github size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:sharma.som766@gmail.com" className="text-slate-400 hover:text-indigo-600 transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
