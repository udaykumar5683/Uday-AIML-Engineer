'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

/* ─── SVG Icon Components ─── */
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
);


const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);

const FileTextIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
);

const ImageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
);

const BotIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
);

const ShirtIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46 16 2 12 5 8 2l-4.38 1.46a1 1 0 0 0-.62.94V10l5.87 1.43a1 1 0 0 0 1.26-.64L12 8l1.87 2.79a1 1 0 0 0 1.26.64L21 10V4.4a1 1 0 0 0-.62-.94Z"/><path d="M8 22v-6"/><path d="M16 22v-6"/><path d="M12 16v6"/></svg>
);

const CertificateIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
);

/* ─── Data ─── */
const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];

const SKILLS = {
  'Programming Languages': ['Python', 'Java', 'SQL'],
  'Tools & Platforms': ['ChatGPT', 'Claude', 'Gemini', 'Groq', 'Hugging Face', 'CrewAI', 'LangChain'],
  'AI & Product Development': ['Prompt Engineering', 'Multi-Agent Systems', 'Generative AI Applications', 'AI Workflow Design', 'Rapid Prototyping', 'Product Development'],
  'Technical Concepts': ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Database Fundamentals', 'Software Development Lifecycle'],
  'Tools': ['GitHub', 'VS Code', 'Google Colab', 'Jupyter Notebook', 'Firebase', 'AWS Basics'],
};

const PROJECTS = [
  {
    title: 'Image Restoration and Enhancement System',
    stack: 'Python, OpenCV, TensorFlow, CNN, Deep Learning',
    icon: <ImageIcon />,
    bullets: [
      'Designed a CNN-based pipeline improving low-light and overexposed image visibility over baseline methods.',
      'Trained deep learning models on 5,000+ image samples, achieving a measurable quality improvement in evaluation tests.',
    ],
    link: null,
  },
  {
    title: 'AI Career Agent',
    stack: 'CrewAI, Groq API, Python, Streamlit, Serper API',
    icon: <BotIcon />,
    bullets: [
      'Built a multi-agent AI career assistant using CrewAI to analyze resumes and generate job insights, skill-gap analysis, a learning roadmap, and interview prep.',
      'Implemented a placement prediction system with automated report generation (JSON/PDF) and optional Telegram notifications.',
    ],
    link: '#',
  },
  {
    title: 'AI Fashion Outfit Recommendation System',
    stack: 'Python, Streamlit, Groq API, ChromaDB/FAISS',
    icon: <ShirtIcon />,
    bullets: [
      'Designed an AI-powered fashion assistant that understands natural-language queries and recommends complete outfits.',
      'Implemented semantic retrieval and explainable recommendations using product metadata and LLM integration.',
    ],
    link: '#',
  },
];

const EXPERIENCE = [
  {
    role: 'Cloud Computing Intern',
    company: 'SmartBridge Educational Services Pvt. Ltd.',
    location: 'Ballari',
    period: '02/2026 – 05/2026',
    bullets: [
      'Completed a VTU-sponsored internship focused on AWS Cloud technologies.',
      'Gained hands-on experience in cloud deployment, storage management, and security concepts.',
      'Learned cloud architecture fundamentals and best practices for scalable applications.',
      'Completed practical assignments and cloud-based projects as part of the internship program.',
    ],
  },
  {
    role: 'Python Developer',
    company: 'EZTS IT/Computers – Software',
    location: 'Ballari',
    period: '04/2024 – 05/2024',
    bullets: [
      'Engineered Python automation scripts using OOP and functional programming to streamline workflows, boosting team productivity by 40%.',
      'Delivered 10+ logic-based automation modules, strengthening backend skills and AI-based application foundations.',
    ],
  },
];

const EDUCATION = [
  {
    degree: 'B.Tech, Artificial Intelligence and Machine Learning',
    school: 'Ballari Institute of Technology and Management, Bellary',
    year: '2026',
    score: '81% (CGPA 8.1)',
  },
  {
    degree: '12th PUE (PCMC)',
    school: 'Sri Vidyaniketan PU College, Gangavathi',
    year: '2022',
    score: '85%',
  },
  {
    degree: '10th (KSEEB)',
    school: 'Little Hearts School, Gangavathi',
    year: '2020',
    score: '84%',
  },
];

const CERTIFICATES = [
  { name: 'Data Analytics Job Simulation', org: 'Deloitte' },
  { name: 'AWS Cloud Quest: Cloud Practitioner', org: 'AWS' },
  { name: 'Data Science Job Simulation', org: 'British Airways' },
  { name: 'Google Cloud Career Launchpad', org: 'Google Cloud' },
  { name: 'Getting Started with Enterprise AI', org: 'IBM' },
];

/* ─── Component ─── */
export default function Home() {
  const [loaderDone, setLoaderDone] = useState(false);
  const [loaderFading, setLoaderFading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  /* Loader: animate bar first, then fade out */
  useEffect(() => {
    document.body.classList.add('loading');
    const t1 = setTimeout(() => setLoaderFading(true), 1800);
    const t2 = setTimeout(() => {
      setLoaderDone(true);
      document.body.classList.remove('loading');
    }, 2400);
    return () => {
      document.body.classList.remove('loading');
      clearTimeout(t1); clearTimeout(t2);
    };
  }, []);

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Scroll reveal */
  useEffect(() => {
    if (loaderDone) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('visible');
              observer.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      );
      revealRefs.current.forEach((el) => {
        if (el) observer.observe(el);
      });
      return () => observer.disconnect();
    }
  }, [loaderDone]);

  const addRef = useCallback((el: HTMLElement | null, idx: number) => {
    revealRefs.current[idx] = el;
  }, []);

  /* Smooth scroll helper */
  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.body.classList.remove('menu-open');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ─── LOADER ─── */}
      {!loaderDone && (
        <div
          className={`loader-screen ${loaderFading ? 'fade-out' : ''}`}
          aria-hidden="true"
        >
          <div className="loader-name">
            Uday Kumar <span>G</span>
          </div>
          <div className="loader-bar-track">
            <div className="loader-bar-fill" />
          </div>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-left">
          <div className="header-initial">UK</div>
          <span className="header-name">Uday Kumar G</span>
        </div>

        <nav className="header-nav" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l.toLowerCase())}
            >
              {l}
            </button>
          ))}
        </nav>

        <div className="header-right">
          <a
            href="https://github.com/udaykumar5683"
            target="_blank"
            rel="noopener noreferrer"
            className="header-icon-btn"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://linkedin.com/in/udaykumargudagudi"
            target="_blank"
            rel="noopener noreferrer"
            className="header-icon-btn"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://drive.google.com/file/d/1dYswQsAMdldPQd37jZUYhBz10RBZoPO_/view"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            <FileTextIcon />
            Resume
          </a>

          {/* Mobile menu button */}
          <button
            className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`}
            onClick={() => {
              const next = !menuOpen;
              setMenuOpen(next);
              if (next) document.body.classList.add('menu-open');
              else document.body.classList.remove('menu-open');
            }}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* ─── MOBILE MENU ─── */}
      <div
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map((l) => (
          <button
            key={l}
            onClick={() => scrollTo(l.toLowerCase())}
          >
            {l}
          </button>
        ))}
      </div>

      <main style={{ flex: 1 }}>
        {/* ─── HERO ─── */}
        <section className="hero" id="about">
          <div className="hero-bg-grid" aria-hidden="true" />
          <div className="shell">
            <div className="hero-grid">
              <div>
                <p className="hero-eyebrow reveal" ref={(el) => addRef(el, 0)}>
                  AI / ML Engineer
                </p>
                <h1 className="hero-name reveal" ref={(el) => addRef(el, 1)}>
                  Uday Kumar G
                </h1>
                <p className="hero-positioning reveal" ref={(el) => addRef(el, 2)}>
                  AI/ML Engineer who turns ideas into intelligent systems — from
                  multi-agent AI apps to deep learning models.
                </p>
                <p className="hero-bio reveal" ref={(el) => addRef(el, 3)}>
                  Completed B.Tech in AI &amp; ML, passionate about turning ideas
                  into intelligent systems — from building multi-agent AI apps to
                  training deep learning models. Skilled in designing and shipping
                  end-to-end projects through AI-assisted development, prompt
                  engineering, and multi-agent systems. Genuinely excited about
                  where NLP, computer vision, and generative AI are heading.
                </p>
                <div className="hero-ctas reveal" ref={(el) => addRef(el, 4)}>
                  <button className="btn-primary" onClick={() => scrollTo('projects')}>
                    View Projects <ArrowRightIcon />
                  </button>
                  <button className="btn-outline" onClick={() => scrollTo('contact')}>
                    Get in Touch
                  </button>
                </div>
                <div className="hero-chips reveal" ref={(el) => addRef(el, 5)}>
                  <a href="mailto:udaykumargudagudi961@gmail.com" className="hero-chip">
                    <MailIcon /> udaykumargudagudi961@gmail.com
                  </a>
                  <a href="tel:8618628618" className="hero-chip">
                    <PhoneIcon /> 8618628618
                  </a>
                  <span className="hero-chip">
                    <LocationIcon /> Gangavathi, Karnataka
                  </span>
                </div>
              </div>
              <div className="hero-image-wrap reveal" ref={(el) => addRef(el, 6)}>
                <div className="hero-image-container">
                  <div className="hero-image-border" />
                  <img
                    src="/profile.jpg"
                    alt="Uday Kumar G — AI/ML Engineer"
                    className="hero-image"
                  />
                  <div className="hero-image-accent" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SKILLS ─── */}
        <section className="section" id="skills">
          <div className="shell">
            <div className="reveal" ref={(el) => addRef(el, 7)}>
              <p className="section-label">Skills &amp; Expertise</p>
              <h2 className="section-title">Technical Toolkit</h2>
            </div>
            <div className="skills-grid">
              {Object.entries(SKILLS).map(([category, items], i) => (
                <div
                  key={category}
                  className={`reveal reveal-delay-${Math.min(i % 3 + 1, 3)}`}
                  ref={(el) => addRef(el, 8 + i)}
                >
                  <p className="skill-category-label">{category}</p>
                  <div className="skill-pills">
                    {items.map((skill) => (
                      <span key={skill} className="skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROJECTS ─── */}
        <section className="section projects-section" id="projects">
          <div className="shell">
            <div className="reveal" ref={(el) => addRef(el, 14)}>
              <p className="section-label">Projects</p>
              <h2 className="section-title">Featured Work</h2>
            </div>
            <div className="projects-grid">
              {PROJECTS.map((p, i) => (
                <article
                  key={p.title}
                  className={`project-card reveal reveal-delay-${i + 1}`}
                  ref={(el) => addRef(el, 15 + i)}
                >
                  <div className="project-icon">{p.icon}</div>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-stack">{p.stack}</p>
                  <ul className="project-bullets">
                    {p.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View Project <ExternalLinkIcon />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── EXPERIENCE ─── */}
        <section className="section" id="experience">
          <div className="shell">
            <div className="reveal" ref={(el) => addRef(el, 19)}>
              <p className="section-label">Experience</p>
              <h2 className="section-title">Internships &amp; Work</h2>
            </div>
            <div className="timeline">
              {EXPERIENCE.map((exp, i) => (
                <div
                  key={exp.role + exp.company}
                  className={`timeline-item reveal reveal-delay-${i + 1}`}
                  ref={(el) => addRef(el, 20 + i)}
                >
                  <div className="timeline-dot" />
                  <h3 className="timeline-role">{exp.role}</h3>
                  <p className="timeline-company">{exp.company}</p>
                  <div className="timeline-meta">
                    <span>{exp.period}</span>
                    <span>·</span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="timeline-bullets">
                    {exp.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── EDUCATION ─── */}
        <section className="section edu-section" id="education">
          <div className="shell">
            <div className="reveal" ref={(el) => addRef(el, 23)}>
              <p className="section-label">Education</p>
              <h2 className="section-title">Academic Background</h2>
            </div>
            <div className="edu-grid">
              {EDUCATION.map((edu, i) => (
                <div
                  key={edu.degree}
                  className={`edu-card reveal reveal-delay-${i + 1}`}
                  ref={(el) => addRef(el, 24 + i)}
                >
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <p className="edu-school">{edu.school}</p>
                  <div className="edu-meta">
                    <span>{edu.year}</span>
                  </div>
                  <div className="edu-score">{edu.score}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CERTIFICATES ─── */}
        <section className="section">
          <div className="shell">
            <div className="reveal" ref={(el) => addRef(el, 28)}>
              <p className="section-label">Certificates</p>
              <h2 className="section-title">Credentials</h2>
            </div>
            <div className="cert-grid">
              {CERTIFICATES.map((cert, i) => (
                <div
                  key={cert.name}
                  className={`cert-card reveal reveal-delay-${(i % 3) + 1}`}
                  ref={(el) => addRef(el, 29 + i)}
                >
                  <div className="cert-icon">
                    <CertificateIcon />
                  </div>
                  <div>
                    <p className="cert-name">{cert.name}</p>
                    <p className="cert-org">{cert.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ─── CONTACT / FOOTER ─── */}
      <footer className="section contact-section" id="contact">
        <div className="shell">
          <div className="reveal" ref={(el) => addRef(el, 35)}>
            <h2 className="contact-cta">
              Let&apos;s build something <span>intelligent</span> together.
            </h2>
            <p className="contact-sub">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of something exciting.
            </p>
          </div>

          <div className="contact-links reveal" ref={(el) => addRef(el, 36)}>
            <a href="mailto:udaykumargudagudi961@gmail.com" className="contact-link">
              <MailIcon /> udaykumargudagudi961@gmail.com
            </a>
            <a href="tel:8618628618" className="contact-link">
              <PhoneIcon /> 8618628618
            </a>
            <a
              href="https://maps.google.com/?q=Gangavathi,Karnataka,India"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <LocationIcon /> Gangavathi, Karnataka
            </a>
          </div>

          <div className="footer-socials reveal" ref={(el) => addRef(el, 37)}>
            <a
              href="https://github.com/udaykumar5683"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://linkedin.com/in/udaykumargudagudi"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://uday-portfolio-brown.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="Portfolio"
            >
              <ExternalLinkIcon />
            </a>
          </div>

          <p className="footer-copy">
            © {new Date().getFullYear()} Uday Kumar G. All rights reserved.
          </p>
        </div>
      </footer>
      </div>
    </>
  );
}
