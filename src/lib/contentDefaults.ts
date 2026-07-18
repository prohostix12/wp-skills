/* Default content for every site section. Serves as the seed source for the
   SiteContent collection and as the client-side fallback while /api/content/[section]
   loads or if the DB is unreachable. Icons are stored as name strings (see iconRegistry.tsx)
   since React elements cannot be persisted to MongoDB. */

export const DEFAULT_HERO_TRUST_CHIPS = [
  "International Credits",
  "Industry Certification",
  "Internship Support",
  "Placement Assistance",
];

export const DEFAULT_HERO_STATS = [
  { value: "2", label: "Partner Universities", highlight: false },
  { value: "10+", label: "Programs", highlight: false },
  { value: "Online", label: "Delivery Mode", highlight: true },
  { value: "100%", label: "Career Support", highlight: false },
];

export const DEFAULT_HERO_ORBIT_ICONS = [
  { icon: "ClipboardCheck", angle: -30 },
  { icon: "Shield", angle: 15 },
  { icon: "GraduationCap", angle: 60 },
  { icon: "CheckSquare", angle: 105 },
  { icon: "CheckCircle", angle: 150 },
];

export const DEFAULT_HERO_STARS = [
  { w: 2.1, h: 1.4, t: 12.3, l: 45.6, o: 0.35, dur: 3.2, delay: 0.5 },
  { w: 1.5, h: 1.5, t: 28.7, l: 72.1, o: 0.25, dur: 4.8, delay: 1.2 },
  { w: 2.8, h: 2.8, t: 54.2, l: 18.9, o: 0.45, dur: 3.7, delay: 2.1 },
  { w: 1.2, h: 1.2, t: 7.5, l: 88.4, o: 0.20, dur: 5.1, delay: 0.8 },
  { w: 2.5, h: 2.5, t: 40.1, l: 33.7, o: 0.30, dur: 4.2, delay: 3.3 },
  { w: 1.8, h: 1.8, t: 67.8, l: 61.2, o: 0.40, dur: 2.9, delay: 1.6 },
  { w: 1.1, h: 1.1, t: 83.4, l: 5.8, o: 0.15, dur: 5.6, delay: 0.3 },
  { w: 2.3, h: 2.3, t: 19.6, l: 53.0, o: 0.55, dur: 3.4, delay: 4.1 },
  { w: 1.6, h: 1.6, t: 91.2, l: 79.3, o: 0.28, dur: 4.5, delay: 2.7 },
  { w: 2.9, h: 2.9, t: 35.0, l: 26.4, o: 0.38, dur: 3.0, delay: 1.9 },
  { w: 1.3, h: 1.3, t: 75.5, l: 42.8, o: 0.22, dur: 5.3, delay: 0.6 },
  { w: 2.0, h: 2.0, t: 48.9, l: 95.1, o: 0.48, dur: 4.0, delay: 3.8 },
  { w: 1.7, h: 1.7, t: 5.2, l: 14.7, o: 0.33, dur: 2.6, delay: 2.4 },
  { w: 2.6, h: 2.6, t: 62.3, l: 68.5, o: 0.42, dur: 5.9, delay: 1.1 },
  { w: 1.4, h: 1.4, t: 22.8, l: 37.9, o: 0.18, dur: 3.8, delay: 4.5 },
  { w: 2.2, h: 2.2, t: 87.6, l: 56.3, o: 0.52, dur: 4.3, delay: 0.9 },
  { w: 1.9, h: 1.9, t: 14.4, l: 82.6, o: 0.27, dur: 3.1, delay: 3.0 },
  { w: 2.7, h: 2.7, t: 58.7, l: 28.1, o: 0.37, dur: 5.5, delay: 1.5 },
  { w: 1.0, h: 1.0, t: 44.3, l: 10.5, o: 0.13, dur: 4.7, delay: 2.2 },
  { w: 2.4, h: 2.4, t: 70.9, l: 47.2, o: 0.46, dur: 3.5, delay: 0.4 },
  { w: 1.5, h: 1.5, t: 96.1, l: 21.8, o: 0.32, dur: 4.1, delay: 3.6 },
  { w: 2.0, h: 2.0, t: 31.4, l: 63.9, o: 0.50, dur: 5.8, delay: 1.3 },
  { w: 1.3, h: 1.3, t: 78.2, l: 91.4, o: 0.24, dur: 2.8, delay: 4.0 },
  { w: 2.8, h: 2.8, t: 9.7, l: 39.5, o: 0.41, dur: 3.6, delay: 0.7 },
  { w: 1.6, h: 1.6, t: 52.5, l: 75.8, o: 0.19, dur: 5.2, delay: 2.9 },
  { w: 2.1, h: 2.1, t: 24.0, l: 0.9, o: 0.44, dur: 4.6, delay: 1.8 },
  { w: 1.8, h: 1.8, t: 38.6, l: 57.4, o: 0.29, dur: 3.3, delay: 3.4 },
  { w: 2.5, h: 2.5, t: 16.8, l: 84.0, o: 0.54, dur: 5.0, delay: 0.2 },
  { w: 1.1, h: 1.1, t: 65.3, l: 32.3, o: 0.16, dur: 4.4, delay: 4.7 },
  { w: 2.3, h: 2.3, t: 80.0, l: 16.0, o: 0.36, dur: 3.9, delay: 1.0 },
  { w: 1.4, h: 1.4, t: 3.6, l: 50.7, o: 0.23, dur: 5.7, delay: 2.5 },
  { w: 2.6, h: 2.6, t: 46.7, l: 70.6, o: 0.47, dur: 2.7, delay: 0.1 },
  { w: 1.9, h: 1.9, t: 89.4, l: 24.5, o: 0.34, dur: 4.9, delay: 3.2 },
  { w: 2.2, h: 2.2, t: 33.1, l: 97.2, o: 0.51, dur: 3.2, delay: 1.7 },
  { w: 1.0, h: 1.0, t: 71.6, l: 44.1, o: 0.11, dur: 5.4, delay: 4.3 },
  { w: 2.7, h: 2.7, t: 18.2, l: 7.6, o: 0.43, dur: 4.2, delay: 0.6 },
  { w: 1.2, h: 1.2, t: 57.0, l: 89.0, o: 0.17, dur: 3.7, delay: 2.8 },
  { w: 2.9, h: 2.9, t: 42.5, l: 55.3, o: 0.49, dur: 5.1, delay: 1.4 },
  { w: 1.7, h: 1.7, t: 93.8, l: 38.7, o: 0.26, dur: 3.0, delay: 3.9 },
  { w: 2.4, h: 2.4, t: 26.5, l: 11.2, o: 0.39, dur: 4.8, delay: 0.3 },
];

export const DEFAULT_WHY_WORLD_PASSPORT = [
  { icon: "Building2", title: "International University Collaboration", desc: "Partnered with CIT (Canadian Institute of Technology), Tirana — a globally recognised higher education institution committed to academic excellence.", color: "#1D4ED8" },
  { icon: "Users", title: "Experienced International Trainers", desc: "Learn from faculty with real international industry experience. Our trainers bring global classroom standards to Kerala.", color: "#D9383A" },
  { icon: "Target", title: "Industry-Focused Curriculum", desc: "Every module is aligned with what employers actually need. No fluff — only skills that translate directly to career opportunities.", color: "#1D4ED8" },
  { icon: "Award", title: "International Certifications", desc: "Receive 3 globally recognised certificates: University Certificate, Course Completion Certificate, and Internship Certificate.", color: "#D9383A" },
  { icon: "GraduationCap", title: "Academic Credit Pathway", desc: "Earn international academic credits that can be used as a pathway for higher education at universities abroad.", color: "#1D4ED8" },
  { icon: "Compass", title: "Career Mentorship", desc: "Dedicated mentors guide you through every stage — from program entry to job placement. You never walk alone.", color: "#D9383A" },
  { icon: "Wrench", title: "Practical, Hands-On Training", desc: "Learn by doing. Live projects, real tools, and industry simulations ensure you can apply what you learn from day one.", color: "#1D4ED8" },
  { icon: "Rocket", title: "Placement Guidance", desc: "Resume building, interview coaching, LinkedIn optimisation, and job-opportunity coordination — we support your career launch.", color: "#D9383A" },
];

export const DEFAULT_UNIVERSITY_PARTNERS = [
  {
    id: "cit", label: "CIT", name: "Canadian Institute of Technology", location: "Tirana, Albania",
    image: "/canedian.png",
    desc: "The Canadian Institute of Technology, based in Tirana, is a recognised international private higher education institution dedicated to academic excellence, research development, and international cooperation.",
    websiteUrl: "/skills/cit",
    leadership: [
      { name: "Prof. Dr. Ramiz Zekaj", role: "President" },
      { name: "Prof. Dr. Ismail Kocayusufoglu", role: "Rector" },
    ],
    highlights: [
      { icon: "Award", title: "Internationally Recognised", desc: "Accredited private higher education institution" },
      { icon: "FlaskConical", title: "Research Driven", desc: "Strong focus on research & academic development" },
      { icon: "Globe", title: "Global Cooperation", desc: "Active international partnership network" },
    ],
    stats: [
      { icon: "BookOpen", value: "6", label: "Programs" },
      { icon: "Monitor", value: "Online", label: "Delivery Mode" },
      { icon: "Briefcase", value: "Yes", label: "Career Support" },
    ],
    color: "#D9383A", glow: "rgba(217,56,58,0.08)",
  },
  {
    id: "mesdhetar", label: "Mesdhetar", name: "Mediterranean University Albania", location: "Tirana, Albania",
    image: "/mediterranean.png",
    desc: "The Mediterranean University of Albania, based in Tirana, is a recognized private higher education institution dedicated to academic excellence, research development, and international cooperation.",
    websiteUrl: "/skills/mediterranean",
    leadership: [
      { name: "Prof. Dr. Anastas Angjeli", role: "Honorary President" },
      { name: "Prof. Dr. Adrian Civici", role: "Rector" },
    ],
    highlights: [
      { icon: "Award", title: "Internationally Recognised", desc: "Accredited private higher education institution" },
      { icon: "FlaskConical", title: "Research Driven", desc: "Strong focus on research & academic development" },
      { icon: "Globe", title: "Global Cooperation", desc: "Active international partnership network" },
    ],
    stats: [
      { icon: "BookOpen", value: "4", label: "Programs" },
      { icon: "Monitor", value: "Online", label: "Delivery Mode" },
      { icon: "Briefcase", value: "Yes", label: "Career Support" },
    ],
    color: "#3b82f6", glow: "rgba(59,130,246,0.08)",
  },
];

export const DEFAULT_INTERNATIONAL_FACULTIES = [
  {
    name: "Florenc Hidri",
    title: "Ph.D(c), Lecturer, Faculty of Engineering, CIT",
    image: "/florenc.png",
    division: "Department of Electronics and Telecommunications Engineering",
    qualifications: "Ongoing Ph.D. studies in Information and Management Systems at South East European University. Holds a Master of Science (M.Sc.) in Business Informatics and a Professional Master (M.P) in Applied Informatics.",
    specialization: "Web Development, IT Project Management, System Administration, Cloud Solutions",
    experience: "17+ years",
    color: "#1D4ED8",
    glow: "rgba(29,78,216,0.2)",
  },
  {
    name: "Bernardo Gogollari",
    title: "Creative Director, Digital Agency; Lecturer for AI Content Creation / Media & Creative Courses",
    image: "/bernardo.png",
    division: "Media, Design & Creative Technologies (Trainer, C-DATA Partner)",
    qualifications: "Omega College, Athens, Greece",
    specialization: "Strategy, Advertising, Creative Direction, Art Direction, Branding & Corporate ID, Illustration, Packaging Design, Product Design, Typography, Photography, 3D, Game Design",
    experience: "12+ years in professional creative and design fields",
    color: "#D9383A",
    glow: "rgba(217,56,58,0.2)",
  },
];

export const DEFAULT_CERTIFICATES = [
  {
    title: "University Certificates",
    issuer: "Canadian Institute of Technology (CIT) · Mediterranean University of Albania",
    location: "Tirana, Albania",
    desc: "Internationally recognised university certificates from our partner institutions CIT and Mediterranean University of Albania, validating your academic achievement.",
    icon: "Building2", color: "#0F2537", badge: "International", seal: "Medal",
  },
  {
    title: "Course Completion Certificate",
    issuer: "SkillDad",
    location: "Kerala, India",
    desc: "Professional course completion certificate acknowledging your mastery of the full 6-month program curriculum.",
    icon: "ScrollText", color: "#D9383A", badge: "Professional", seal: "Star",
  },
  {
    title: "Internship Certificate",
    issuer: "Partner Company",
    location: "Industry Partner",
    desc: "Verified internship certificate from your host company, proving your real-world work experience to future employers.",
    icon: "Briefcase", color: "#1D4ED8", badge: "Verified", seal: "CheckCircle",
  },
];

export const DEFAULT_FAQ = [
  { q: "What skills are included in the program?", a: "The program covers AI tools, digital marketing, data analytics, business intelligence, supply chain management, virtual reality for business, and more. All curricula are designed in collaboration with CIT (Canadian Institute of Technology) and aligned with current industry demands. You'll also get IELTS coaching and live project experience." },
  { q: "How long is the program?", a: "The full program runs for 6 months: Months 1–3 cover CIT international university training + IELTS coaching, Months 4–5 involve intensive skill development and live projects, and Month 6 is dedicated to internship and placement support. The program is designed for online delivery, so you can participate from anywhere in Kerala." },
  { q: "Will I receive certificates?", a: "Yes! You will receive 3 certificates upon successful completion: (1) University Certificate from CIT, (2) Course Completion Certificate from World Passport / SkillDad, and (3) Internship Certificate from your host company. All certificates are digitally verifiable." },
  { q: "Is internship included?", a: "Yes, the program includes an internship facilitated by World Passport with our partner companies. The internship is aligned with your program specialisation and provides real work experience. This is coordinated and assisted — work timelines and placements depend on partner availability." },
  { q: "Who can join this program?", a: "The program is open to final year students, fresh graduates, working professionals looking to upskill, career switchers wanting international credentials, students planning to pursue higher studies abroad, and anyone interested in building a global career. If you want international-grade skills, this program is for you." },
  { q: "How does placement assistance work?", a: "Placement assistance includes one-on-one career counselling, professional resume and LinkedIn profile building, mock interview training, access to job opportunities through our partner network, and ongoing guidance through the job search process. We actively support and guide you, though job outcomes depend on individual performance and market conditions." },
];

export const DEFAULT_VALUE_STACK = [
  { icon: "Building2", title: "International University Training", desc: "CIT-certified curriculum with internationally aligned academic excellence.", color: "#1D4ED8" },
  { icon: "Languages", title: "IELTS Coaching", desc: "Integrated IELTS preparation with expert trainers to open global doors.", color: "#D9383A" },
  { icon: "Briefcase", title: "Assured Internship", desc: "3-month internship with partner companies. Real work experience for your resume.", color: "#1D4ED8" },
  { icon: "Compass", title: "Career Guidance", desc: "One-on-one career counselling from experienced mentors. Find your path with clarity.", color: "#D9383A" },
  { icon: "Rocket", title: "Placement Support", desc: "Structured placement assistance — coordination, guidance, and job-opportunity support.", color: "#1D4ED8" },
  { icon: "Award", title: "Global Certifications", desc: "3 certificates: University Certificate, Course Completion, and Internship Certificate.", color: "#D9383A" },
  { icon: "GraduationCap", title: "Academic Credits", desc: "International academic credits that count toward higher studies abroad.", color: "#1D4ED8" },
  { icon: "Wrench", title: "Live Projects", desc: "Build a strong portfolio with real-world projects guided by industry professionals.", color: "#D9383A" },
  { icon: "FileText", title: "Resume Building", desc: "Professional resume, LinkedIn, and personal branding to stand out.", color: "#1D4ED8" },
  { icon: "Mic", title: "Interview Training", desc: "Mock interviews, HR preparation, and communication coaching. Walk in confident.", color: "#D9383A" },
];

export const DEFAULT_SOLUTION_TIMELINE = [
  {
    month: "Months 1–3", phase: "Phase 1", title: "CIT International Training + IELTS",
    desc: "University-affiliated training with the Canadian Institute of Technology (CIT), Tirana, Albania. Includes IELTS coaching and international academic credits.",
    bullets: ["CIT international faculty", "Academic credit pathway", "IELTS integrated coaching"],
    color: "#1D4ED8", glow: "rgba(29,78,216,0.25)", icon: "Building2",
  },
  {
    month: "Month 4", phase: "Phase 2", title: "Skill Development & Live Projects",
    desc: "Intensive hands-on skill building with industry tools and live project experience. Build a portfolio that stands out to employers.",
    bullets: ["Industry-standard tools", "Live project experience", "Portfolio building"],
    color: "#D9383A", glow: "rgba(217,56,58,0.25)", icon: "Monitor",
  },
  {
    month: "Month 5", phase: "Phase 3", title: "Assured Internship",
    desc: "3-month guaranteed internship with partner companies. Real work experience that transforms your resume and professional profile.",
    bullets: ["Internship with partner firms", "Real work environment", "Professional mentoring"],
    color: "#1D4ED8", glow: "rgba(29,78,216,0.25)", icon: "Briefcase",
  },
  {
    month: "Month 6", phase: "Phase 4", title: "Placement Support",
    desc: "Resume building, mock interviews, career counselling, and job-opportunity coordination. Our team supports you until you land your role.",
    bullets: ["Resume & LinkedIn building", "Mock interview training", "Job opportunity support"],
    color: "#D9383A", glow: "rgba(217,56,58,0.25)", icon: "Rocket",
  },
];

export const DEFAULT_PROBLEMS = [
  { icon: "BookOpen", title: "Only Theory", desc: "Degrees full of theory with no hands-on application. Employers want skills, not just marks.", colorClass: "bg-red-50 text-red-700 ring-red-100", iconColor: "text-red-600", tag: "Zero Practical Skills", image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&q=80&w=600&h=400" },
  { icon: "Globe", title: "No International Exposure", desc: "Without global exposure, your resume looks the same as thousands of other graduates.", colorClass: "bg-blue-50 text-blue-700 ring-blue-100", iconColor: "text-blue-600", tag: "Limited Global Reach", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600&h=400" },
  { icon: "Briefcase", title: "No Internship Experience", desc: "Companies demand experience. But without experience, no one hires you — a painful catch-22.", colorClass: "bg-red-50 text-red-700 ring-red-100", iconColor: "text-red-600", tag: "Catch-22 Trap", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=400" },
  { icon: "TrendingDown", title: "Low Placement", desc: "Generic degrees lead to generic outcomes. Without the right skills, placement remains a dream.", colorClass: "bg-blue-50 text-blue-700 ring-blue-100", iconColor: "text-blue-600", tag: "Career Stagnation", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600&h=400" },
];

export const DEFAULT_PLACEMENT_SUPPORT_TIMELINE = [
  { step: 1, icon: "MessageSquare", title: "Career Counselling", desc: "One-on-one counselling to map your strengths, goals, and the best-fit career path.", color: "#1D4ED8", glow: "rgba(29,78,216,0.2)" },
  { step: 2, icon: "FileText", title: "Resume Building", desc: "Professional resume and LinkedIn profile crafted to impress recruiters instantly.", color: "#D9383A", glow: "rgba(217,56,58,0.2)" },
  { step: 3, icon: "Users", title: "Mock Interviews", desc: "HR mock interviews, technical rounds, and communication coaching to build confidence.", color: "#1D4ED8", glow: "rgba(29,78,216,0.2)" },
  { step: 4, icon: "Briefcase", title: "Job Assistance", desc: "Access to job opportunities through our partner network, with application support.", color: "#D9383A", glow: "rgba(217,56,58,0.2)" },
  { step: 5, icon: "CheckCircle", title: "Placement Guidance", desc: "Ongoing guidance and coordination until you successfully land your role.", color: "#1D4ED8", glow: "rgba(29,78,216,0.2)" },
];

export const DEFAULT_PLACEMENT_SUPPORT_CARDS = [
  { icon: "Briefcase", title: "Aligned Internships", desc: "Internship facilitation aligned with your program specialisation.", color: "#1D4ED8", glow: "rgba(29,78,216,0.2)" },
  { icon: "Globe", title: "Industry Exposure", desc: "Meaningful industry exposure and applied real-world learning experience.", color: "#D9383A", glow: "rgba(217,56,58,0.2)" },
  { icon: "Award", title: "Professional Profiling", desc: "Professional profiling, CV guidance, and interview preparation coaching.", color: "#1D4ED8", glow: "rgba(29,78,216,0.2)" },
  { icon: "Star", title: "Career Mentoring", desc: "Career mentoring and structured placement assistance from experienced guides.", color: "#D9383A", glow: "rgba(217,56,58,0.2)" },
];

export const DEFAULT_TRUST_STRIP_ITEMS = [
  { icon: "Building2", label: "International University Partner", sub: "CIT — Canada/Albania" },
  { icon: "GraduationCap", label: "International Academic Credits", sub: "Globally recognised" },
  { icon: "Award", label: "3 Certifications", sub: "University · Course · Internship" },
  { icon: "Languages", label: "IELTS Integrated", sub: "Coaching included" },
  { icon: "Briefcase", label: "Assured Internship", sub: "Real work experience" },
  { icon: "Rocket", label: "Placement Assistance", sub: "Career support" },
  { icon: "Globe", label: "Global Learning Standards", sub: "Industry aligned" },
  { icon: "Users", label: "Expert Faculty", sub: "International trainers" },
];

export const DEFAULT_TOOLS = [
  { name: "YouTube", icon: "YouTubeIcon", color: "#ef4444" },
  { name: "Meta", icon: "MetaIcon", color: "#3b82f6" },
  { name: "Instagram", icon: "InstagramIcon", color: "#ec4899" },
  { name: "Facebook", icon: "FacebookIcon", color: "#2563eb" },
  { name: "MOZ", icon: "MozIcon", color: "#06b6d4" },
  { name: "WordPress", icon: "WordPressIcon", color: "#21759b" },
  { name: "LinkedIn", icon: "LinkedInIcon", color: "#0a66c2" },
  { name: "Claude", icon: "ClaudeIcon", color: "#d97706" },
  { name: "Semrush", icon: "SemrushIcon", color: "#f97316" },
  { name: "Google Tag Manager", icon: "GoogleTagManagerIcon", color: "#2563eb" },
  { name: "Shopify", icon: "ShopifyIcon", color: "#95bf47" },
  { name: "Google", icon: "GoogleIcon", color: "#ea4335" },
  { name: "Search Console", icon: "SearchConsoleIcon", color: "#fbbc05" },
  { name: "Google Analytics", icon: "GoogleAnalyticsIcon", color: "#f97316" },
];

export const DEFAULT_TARGET_AUDIENCES = [
  { icon: "GraduationCap", title: "Final Year Students", desc: "Prepare before graduation. Add international credentials to your degree and stand out on day one.", color: "#1D4ED8", glow: "rgba(29,78,216,0.2)" },
  { icon: "UserCheck", title: "Fresh Graduates", desc: "Bridge the gap between your degree and your first job with real skills and internship experience.", color: "#D9383A", glow: "rgba(217,56,58,0.2)" },
  { icon: "Briefcase", title: "Working Professionals", desc: "Upskill and pivot your career with globally recognised certifications without quitting your job.", color: "#1D4ED8", glow: "rgba(29,78,216,0.2)" },
  { icon: "RefreshCw", title: "Career Switchers", desc: "Changing fields? Our program gives you the credentials and experience to make a confident switch.", color: "#D9383A", glow: "rgba(217,56,58,0.2)" },
  { icon: "Plane", title: "Students Planning Higher Studies Abroad", desc: "Earn academic credits and IELTS certification that open doors to universities worldwide.", color: "#1D4ED8", glow: "rgba(29,78,216,0.2)" },
  { icon: "Globe", title: "International Career Aspirants", desc: "Can't afford to study abroad? Get international exposure right here in Kerala, at a fraction of the cost.", color: "#D9383A", glow: "rgba(217,56,58,0.2)" },
];

export const DEFAULT_CTA_TRUST_CHIPS = [
  { icon: "Building2", label: "CIT University Partner" },
  { icon: "ScrollText", label: "3 Certificates" },
  { icon: "Briefcase", label: "Internship Included" },
  { icon: "Rocket", label: "Placement Support" },
];

export const DEFAULT_PLACEMENT_PLATFORM_FEATURES = [
  { title: "Internship Facilitation", desc: "Aligned with your specialization", icon: "Briefcase" },
  { title: "Global Industry Exposure", desc: "Work with leading companies worldwide", icon: "Globe" },
  { title: "Professional Profiling", desc: "CV, LinkedIn, interview coaching", icon: "GraduationCap" },
  { title: "ECTS + Job Placement", desc: "European certificate + real-world placement", icon: "Award" },
];

export const DEFAULT_PLACEMENT_PLATFORM_STATS = [
  { val: "100%", label: "Placement Support" },
  { val: "500+", label: "Partner Companies" },
  { val: "95%", label: "Success Rate" },
];

export const DEFAULT_FOOTER_QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Skills Program", href: "/skills" },
  { label: "Universities", href: "/skills#universities" },
  { label: "Overseas Education", href: "#" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/skills#contact" },
];

export const DEFAULT_FOOTER_SOCIAL_LINKS = [
  { icon: "ExternalLink", label: "Instagram", href: "#" },
  { icon: "Link2", label: "LinkedIn", href: "#" },
  { icon: "Share2", label: "Twitter", href: "#" },
  { icon: "Play", label: "YouTube", href: "#" },
];

export const DEFAULT_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Universities", href: "/skills#universities" },
  { label: "Certificates", href: "/skills#certificates" },
  { label: "Contact", href: "/skills#contact" },
];

export const DEFAULT_ABOUT_TEAM = [
  {
    name: "Edwin C Benny", role: "CEO",
    desc: "Visionary leader driving World Passport's mission to make international education accessible to every student, regardless of background.",
    image: "/assets/team/edwin.jpeg", fallbackColor: "#7c3aed",
    quote: "Every student deserves a real shot at a global career — not just the ones who can afford it.",
  },
  {
    name: "Mujeeb T", role: "Director",
    desc: "Guiding strategic direction and partnerships to expand World Passport's global education network across Europe and the Gulf.",
    image: "/assets/team/mujeeb-t.jpg", fallbackColor: "#0F2537",
    quote: "We built our university partnerships to be transparent, accredited, and outcome-driven — nothing else earns trust.",
  },
];

export const DEFAULT_ABOUT_VALUES = [
  { title: "Verified Partnerships", desc: "Every university we represent is accredited and vetted before it reaches our students — no unlicensed institutions, ever.", icon: "ShieldCheck" },
  { title: "Transparent Pricing", desc: "No hidden fees, no surprise charges after enrollment. What we quote is what you pay, start to finish.", icon: "CheckCircle2" },
  { title: "Outcome-Focused", desc: "From application to graduation to placement — we stay accountable for the result, not just the enrollment.", icon: "Target" },
];

export const DEFAULT_ABOUT_HERO_STATS = [
  { icon: "Monitor", value: "Free IELTS", label: "Coaching" },
  { icon: "BadgeCheck", value: "ECTS Credits", label: "Certificate" },
  { icon: "Rocket", value: "Placement Assurance", label: "Placement" },
];

export const DEFAULT_TESTIMONIALS_BATCH_CHIPS = [
  { icon: "Building2", label: "CIT University Certificate" },
  { icon: "Briefcase", label: "Assured Internship" },
  { icon: "Globe", label: "International Credits" },
  { icon: "Rocket", label: "Placement Support" },
];

export const DEFAULT_PROGRAMS_QUICK_STATS_META = [
  { icon: "BookOpen", label: "Programs", color: "blue" },
  { icon: "Layers", label: "Categories", color: "red" },
  { icon: "BadgeCheck", value: "Certified", label: "Credentials", color: "blue" },
  { icon: "Monitor", value: "Online", label: "Delivery Mode", color: "red" },
];

export const DEFAULT_CIT_DETAILS_QUICK_STATS = [
  { icon: "BookOpen", color: "#3B82F6", value: "6 Courses", label: "Programs" },
  { icon: "MapPin", color: "#F59E0B", value: "Tirana, Albania", label: "Location" },
  { icon: "BadgeCheck", color: "#8B5CF6", value: "ECTS Credits", label: "Accreditation" },
  { icon: "Rocket", color: "#10B981", value: "SkillDad", label: "Placement" },
];

export const DEFAULT_CIT_DETAILS_WHY_CHOOSE = [
  { icon: "BadgeCheck", title: "ECTS Accredited", desc: "European Credit Transfer System — recognized in 48+ countries" },
  { icon: "Globe", title: "Bologna Process", desc: "Part of the European Higher Education Area standards" },
  { icon: "Award", title: "Quality Education", desc: "Rigorous academic standards with industry-aligned curriculum" },
  { icon: "Users", title: "Expert Faculty", desc: "Learn from experienced professionals and academic researchers" },
  { icon: "Rocket", title: "SkillDad Placement", desc: "Guaranteed access to 500+ global companies after certification" },
  { icon: "Shield", title: "Recognized Globally", desc: "Employers worldwide value European university qualifications" },
];

export const DEFAULT_CIT_DETAILS_ELIGIBILITY = [
  "Open to all nationalities — no geographic restrictions",
  "Basic computer literacy and internet access required",
  "English proficiency (intermediate level or above)",
  "No prior domain experience needed for most programs",
  "Minimum age: 18 years",
  "Commitment to complete coursework and assessments",
];

export const DEFAULT_CIT_DETAILS_ACCREDITATION = [
  { title: "ECTS Credits", desc: "European Credit Transfer System" },
  { title: "Bologna Process", desc: "European Higher Education Area" },
  { title: "International Recognition", desc: "Valid in 48+ countries" },
];

export const DEFAULT_MED_DETAILS_QUICK_STATS = [
  { value: "€2k–5k/yr", label: "Tuition" },
  { value: "12+", label: "Programs" },
  { value: "English/Albanian", label: "Language" },
  { value: "ECTS", label: "Accreditation" },
];

export const DEFAULT_MED_DETAILS_WHY_CHOOSE = [
  "New Faculty of Medical Sciences building",
  "Central Tirana location",
  "Modern laboratory infrastructure",
  "Research development focus",
  "International cooperation programs",
  "SkillDad placement support",
];

export const DEFAULT_MED_DETAILS_ADMISSION_REQUIREMENTS = [
  "High school diploma or equivalent for Bachelor programs",
  "Bachelor degree for Master programs",
  "English proficiency (IELTS/TOEFL or equivalent)",
  "Valid passport and student visa eligibility",
  "Academic transcripts and recommendation letters",
  "Statement of purpose / motivation letter",
];

export const DEFAULT_MED_DETAILS_FAQS = [
  { q: "What are the entry requirements?", a: "Applicants need a high school diploma for Bachelor programs (or a Bachelor's degree for Master programs), proof of English proficiency, a valid passport, academic transcripts, and a statement of purpose." },
  { q: "Is the degree internationally recognized?", a: "Yes. Mediterranean University of Albania is an accredited institution and its ECTS-based programs are recognized across the European Higher Education Area and beyond." },
  { q: "What is the cost of living?", a: "Tirana is an affordable European capital — students typically budget €300–€500 per month for accommodation, food, and daily expenses, on top of tuition." },
  { q: "Do you help with visa applications?", a: "Yes, our GEC support team assists with the full visa process — documentation, appointment scheduling, and interview preparation — with a 98% visa success rate." },
  { q: "Will I get placement or internship support?", a: "Yes. Students get access to SkillDad placement support and MUA's central Tirana location, which connects students with neighboring companies and organizations for internships." },
  { q: "Can I work while studying?", a: "International students in Albania can generally work part-time alongside their studies, subject to visa conditions — our advisors can walk you through the specifics." },
];

export const DEFAULT_COURSE_DETAILS_LEARNING_OUTCOMES = [
  { icon: "TrendingUp", title: "Industry-Ready Skills", desc: "Master practical skills demanded by top employers worldwide" },
  { icon: "Globe", title: "Global Recognition", desc: "ECTS certificate recognized across 48+ countries" },
  { icon: "Briefcase", title: "Portfolio Projects", desc: "Build real-world projects to showcase to employers" },
  { icon: "Users", title: "Professional Network", desc: "Connect with peers and industry mentors globally" },
];

export const DEFAULT_COURSE_DETAILS_CAREER_ROLES = ["Industry Professional", "Freelance Consultant", "Team Lead", "Project Manager", "Domain Specialist", "Startup Founder"];

export const DEFAULT_COURSE_DETAILS_ELIGIBILITY = [
  "Open to all nationalities — no geographic restrictions",
  "Basic computer literacy and internet access",
  "English proficiency (intermediate level or above)",
  "No prior domain experience needed",
  "Minimum age: 18 years",
  "Commitment to complete coursework",
];

export const DEFAULT_COURSE_DETAILS_FAQS = [
  { q: "What certificate will I receive?", a: "You'll receive an internationally recognized ECTS certificate from Canadian Institute of Technology, valid across 48+ European countries." },
  { q: "Is this course fully online?", a: "Yes, the program is delivered fully online with live instructor sessions, hands-on projects, and mentorship." },
  { q: "What are the prerequisites?", a: "No prior domain experience is needed for most learners — just basic computer literacy, internet access, and intermediate English proficiency." },
  { q: "Will I get placement support?", a: "Yes. SkillDad provides dedicated placement support with access to 500+ partner companies after certification." },
  { q: "How long does the course take?", a: "Course duration varies by program — see the duration badge above for this course's exact length." },
];

export const DEFAULT_COURSE_DETAILS_QUICK_STATS = [
  { icon: "Clock", sColor: "#F59E0B", value: "3 Month Course + 3 Month Internship", label: "Duration" },
  { icon: "Monitor", sColor: "#3B82F6", value: "Free IELTS", label: "Coaching" },
  { icon: "BadgeCheck", sColor: "#8B5CF6", value: "ECTS Credits", label: "Certificate" },
  { icon: "Rocket", sColor: "#10B981", value: "Placement Assurance", label: "Placement" },
];

export const DEFAULT_COURSE_DETAILS_CAREER_STATS = [
  { icon: "Award", title: "European ECTS", desc: "Recognized in 48+ countries" },
  { icon: "Rocket", title: "SkillDad Placement", desc: "500+ partner companies" },
  { icon: "Star", title: "95% Success Rate", desc: "Students placed after completion" },
];

export interface CitCourse {
  slug: string; color: string; title: string; category: string; duration: string;
  tools: string[]; image: string; points: string[]; learn: string[];
}

export const DEFAULT_CIT_COURSES: CitCourse[] = [
  {
    slug: "digital-marketing-with-ai", color: "#FF3B3B", title: "Digital Marketing with AI", category: "Digital Marketing & E-Commerce", duration: "6 Months",
    tools: ["Google Analytics", "Midjourney", "SEMrush", "HubSpot", "Meta Ads Manager", "Mailchimp", "Canva AI", "ChatGPT"],
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&q=80&auto=format&fit=crop",
    points: ["AI-powered content creation strategies", "Smart campaign optimization techniques", "Customer behavior and audience analytics"],
    learn: ["AI-powered content creation strategies", "Smart campaign optimization techniques", "Customer behavior and audience analytics", "Marketing automation using AI tools", "Improve campaign ROI and performance"],
  },
  {
    slug: "applied-data-science-machine-learning", color: "#3B82F6", title: "Applied Data Science & Machine Learning", category: "AI", duration: "6 Months",
    tools: ["Python", "TensorFlow", "Jupyter", "Pandas", "Scikit-Learn", "Keras", "SQL", "GitHub"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80&auto=format&fit=crop",
    points: ["Understand real-world data analysis techniques", "Build machine learning models for business", "Predict trends using AI-driven insights"],
    learn: ["Understand real-world data analysis techniques", "Build machine learning models for business", "Predict trends using AI-driven insights", "Ethical and responsible AI practices", "Data-driven decision making frameworks"],
  },
  {
    slug: "ai-video-creation-smart-sustainable", color: "#A855F7", title: "AI Video Creation – Smart & Sustainable", category: "Artificial Intelligence & Media", duration: "6 Months",
    tools: ["Runway ML", "ChatGPT", "ElevenLabs", "Midjourney", "HeyGen", "CapCut", "Synthesia"],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80&auto=format&fit=crop",
    points: ["Create professional videos using AI tools", "Smart scriptwriting & automated production", "AI-powered media analytics & editing"],
    learn: ["Create professional videos using AI tools", "Smart scriptwriting & automated production", "AI-powered media analytics & editing", "Content monetization strategies", "Freelancing opportunities in AI media"],
  },
  {
    slug: "logistics-supply-chain-management", color: "#00C9B0", title: "Logistics & Supply Chain Management", category: "Logistics & Supply Chain Management", duration: "6 Months",
    tools: ["Excel", "ERP Systems", "SAP", "SQL", "Tableau", "Power BI", "WMS Systems"],
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80&auto=format&fit=crop",
    points: ["Modern supply chain systems & workflows", "Inventory and distribution management", "Cost optimization strategies"],
    learn: ["Modern supply chain systems & workflows", "Inventory and distribution management", "Cost optimization strategies", "KPI monitoring and performance analysis", "Risk management in logistics operations"],
  },
  {
    slug: "business-intelligence-data-analytics", color: "#FFB800", title: "Business Intelligence & Data Analytics", category: "Data Analytics", duration: "6 Months",
    tools: ["Power BI", "Tableau", "SQL", "Excel", "Python", "Looker Studio", "Snowflake"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format&fit=crop",
    points: ["Transform raw data into business insights", "Design interactive dashboards & reports", "KPI tracking for business performance"],
    learn: ["Transform raw data into business insights", "Design interactive dashboards & reports", "KPI tracking for business performance", "Data visualization for decision making", "Strategic analytics for organizations"],
  },
  {
    slug: "virtual-reality-vr-for-business", color: "#FF6B00", title: "Virtual Reality (VR) for Business", category: "IT & Business", duration: "6 Months",
    tools: ["Unity", "VR Headsets", "Blender", "Unreal Engine", "C#", "ARKit / ARCore", "WebXR"],
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=600&q=80&auto=format&fit=crop",
    points: ["Introduction to immersive VR technologies", "Business training and simulation solutions", "VR integration for modern enterprises"],
    learn: ["Introduction to immersive VR technologies", "Business training and simulation solutions", "VR integration for modern enterprises", "Safety and operational applications", "Future trends in immersive technologies"],
  },
];

export interface MuaModule { title: string; topics: string[]; hours: string; }
export interface MuaCourse {
  slug: string; color: string; title: string; category: string; image: string; totalHours: string;
  tools: string[]; overview: string[]; modules: MuaModule[];
  schedule: { sessions: string; days: string; note: string }; certification: string;
}

export const DEFAULT_MUA_COURSES: MuaCourse[] = [
  {
    slug: "real-estate-broker", color: "#F59E0B", title: "Real Estate Broker", category: "Real Estate & Property Management",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80&auto=format&fit=crop", totalHours: "60 Hours",
    tools: ["CRM Systems", "Property Management Software", "Excel", "Google Earth", "MLS Systems", "Canva", "DocuSign"],
    overview: [
      "The Mediterranean University of Albania is licensed by Order of the Minister of Justice of the Republic of Albania No. 214, dated 22 April 2024, as one of the higher education institutions in the country authorized to deliver the mandatory training program for candidates who intend to become licensed real estate brokers. This program prepares candidates as qualified specialists capable of operating in the real estate market with comprehensive legal, economic, and practical knowledge.",
      "It includes modules on property valuation, purchase, sale, lease, and exchange procedures, as well as aspects related to registration with the Real Estate Registration Office. The training introduces participants to relevant legislation, tax obligations, and the rules of professional ethics — covering negotiation and communication in real estate, tax legislation, civil and commercial law, professional ethics, mediation and liberal professions, practical training, basic principles of property valuation, management and maintenance, criminal offenses related to real estate, organized crime and money laundering, the legal regime of real estate, contract drafting, marketing, and sales.",
      "At the end of the training, a final assessment is conducted, requiring candidates to achieve at least 80% of the total score in order to successfully complete the program. Upon passing the assessment, participants are eligible to apply for licensing at the Ministry of Justice in accordance with national legal requirements.",
    ],
    modules: [
      { title: "Knowledge of Civil and Commercial Law", hours: "6h lectures + 2h exercises", topics: ["Sources of civil law and their application over time and in space", "Legal capacity to act and the concept of a legal person", "Legal acts, invalidity, limitation of actions and extinction of rights", "Property as the object of rights: movable, immovable, individually determined", "Merchants and commercial companies: general and limited partnerships", "Limited liability companies and joint-stock companies", "Grouping, reorganization, and administrator obligations in commercial companies"] },
      { title: "Negotiation and Communication in Real Estate", hours: "2h lectures + 1h exercises", topics: ["Negotiation as an art and as a structured strategic process", "Distributive and integrative negotiation methods", "Preparation and presentation of offers, interests, and alternatives", "Negotiation styles across property sales, leasing, and mediation", "Verbal and non-verbal communication, active listening, persuasion", "Role, responsibilities, and ethical standards of the real estate intermediary"] },
      { title: "Legal Regime of Real Estate", hours: "6h lectures + 2h exercises", topics: ["Concept, content, and functions of ownership rights", "Rights and obligations of the owner under the Civil Code", "Public and private ownership, transfer of ownership", "Protection of ownership: rei vindicatio and negatory action", "Co-ownership: creation, types, pre-emption right, division", "Registration of real estate and acquisition by foreigners", "Restitution, compensation, and legalization of illegal constructions"] },
      { title: "Professional Ethics, Mediation, and Liberal Professions", hours: "6h lectures + 2h exercises", topics: ["Core ethical values: integrity, impartiality, confidentiality, transparency", "Ethical dilemmas in professional real estate practice", "Mediation as alternative dispute resolution: concept and principles", "Civil, commercial, and real estate mediation", "Cultural considerations in conflict management", "Organization and regulation of liberal professions"] },
      { title: "Contract Drafting", hours: "6h lectures + 2h exercises", topics: ["Legal obligation relationships and subjective rights", "Contract validity, enforceability, and interpretation", "Termination, withdrawal, and suspension of contracts", "Contracts for the benefit of third parties", "Offer, acceptance, and stages of contract formation", "Sales, exchange, donation, lease, and service contracts"] },
      { title: "Tax Legislation", hours: "6h lectures + 2h exercises", topics: ["Public finance and the legal framework of taxation", "Taxes, fees, and public charges — direct and indirect taxes", "Resident vs. non-resident taxpayer obligations", "Value-added tax (VAT): concept, calculation, legal framework", "Income tax and corporate profit tax", "National and local taxes, including property tax", "Tax administration, taxpayer rights, and enforcement"] },
      { title: "Criminal Offenses Against Real Estate, Organized Crime, and Money Laundering", hours: "6h lectures + 2h exercises", topics: ["Fundamentals of criminal law and jurisdictional principles", "Criminal liability, guilt, intent, and negligence", "Theft, fraud, and destruction of property", "Corruption offenses: active and passive corruption, abuse of office", "Criminal organizations, structured groups, and armed gangs", "Money laundering and concealment of criminal proceeds"] },
      { title: "Fundamental Principles of Property Valuation, Management, and Maintenance", hours: "2h lectures + 1h exercises", topics: ["Purpose and methods of property valuation: comparative, income, cost", "Principles of effective property management and portfolio administration", "Tenant relations, lease administration, risk management", "Preventive and corrective maintenance strategies", "Sustainable and cost-effective maintenance practices"] },
      { title: "Marketing and Sales", hours: "2h lectures + 1h exercises", topics: ["Role of marketing in business growth and brand recognition", "Market research, target audiences, and positioning strategies", "Branding, pricing, and promotional tools", "Personal selling and direct marketing techniques", "Digital marketing: social media, SEO, email, and online advertising"] },
      { title: "Practical Training – Real Estate Agency Operations", hours: "3h practical training", topics: ["Structure and roles within a real estate agency", "Leadership, team objectives, and organizational culture", "Recruitment and retention of talented professionals", "Conflict management and client complaint resolution", "Financial objectives, budgeting, and performance monitoring"] },
    ],
    schedule: { sessions: "24 sessions × 2.5 hours", days: "Monday, Wednesday, Friday", note: "Weekends off — schedule subject to change based on participants' requests." },
    certification: "Licensed under Order of the Minister of Justice of the Republic of Albania No. 214 (22 April 2024). Passing candidates (80%+ score) are eligible to apply for real estate broker licensing at the Ministry of Justice.",
  },
  {
    slug: "data-science-ai", color: "#3B82F6", title: "Data Science & AI", category: "AI",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80&auto=format&fit=crop", totalHours: "40 Hours",
    tools: ["Python", "SQL", "TensorFlow", "Jupyter Notebook", "Pandas", "Keras", "Tableau", "ChatGPT"],
    overview: [
      "This professional training prepares qualified experts in the field of Data Science and Artificial Intelligence, providing in-depth knowledge of data analysis, statistical modeling, machine learning, and practical applications of AI in the public and private sectors. The program covers basic and advanced concepts of Data Science and AI, including data cleaning and processing, data visualization, building predictive models, analyzing big data, and implementing machine learning and AI algorithms.",
      "Participants are introduced to industry best practices for data analysis and management, ethics in the use of artificial intelligence, privacy protection, and information security according to international standards (ISO, GDPR, IEEE). The program combines theoretical lectures with practical exercises, real-world data analysis, and the use of professional tools such as Python, R, TensorFlow, and other machine learning libraries — including a dedicated module on ChatGPT and modern AI tools for Data Science.",
      "At the end of the training, relevant testing is conducted referring to the developed modules, and participants are provided with certification recognized by the National Agency for Education, Vocational Training and Qualifications in the Republic of Albania. This is the only program in Albania that prepares you to become among the first specialists in this field.",
    ],
    modules: [
      { title: "Fundamentals of Data Structures", hours: "4h", topics: ["Introduction to Computer Science and Data Science", "Data processing and practical projects", "Linear structures: Arrays, Linked Lists, and Stacks", "Queues and their variations", "Non-linear structures: Trees and Graphs"] },
      { title: "Ethics in Data Science & AI", hours: "4h", topics: ["Fundamental ethical principles in Data Science and AI", "Data privacy and protection", "Responsibility in automated decision-making", "AI development for public good and sustainability", "International ethical standards and conflict-of-interest prevention", "National and international practical cases"] },
      { title: "Working with SQL and Databases", hours: "4h", topics: ["Introduction to databases and Database Management Systems (DBMS)", "Fundamentals of SQL (Structured Query Language)", "Database structuring and normalization", "Using SQL for advanced queries", "Practical SQL projects and integration with applications"] },
      { title: "Data Analysis and Visualization", hours: "4h", topics: ["Introduction to data analysis and the decision-making process", "Data cleaning and transformation", "Statistical analysis and summary metrics", "Data visualization: principles and tools", "Data reporting and presentation"] },
      { title: "Introduction to Data Science and Python", hours: "4h", topics: ["What Data Science is, basic concepts, and applications", "Introduction to Python for Data Science", "Using Python libraries for data analysis", "Data cleaning and preparation", "Practical project: initial analysis of a real dataset"] },
      { title: "Probability and Statistics for Data Science", hours: "4h", topics: ["Basic mathematical concepts for Data Science", "Fundamental probability concepts", "Distributions and random variables", "Descriptive statistics and data visualization", "Statistical tests and inference", "Advanced statistical methods in Python"] },
      { title: "Machine Learning and Real-World Project Applications", hours: "4h", topics: ["Artificial Intelligence and its applications", "Introduction to Machine Learning and core algorithms", "Use of Python libraries (scikit-learn, pandas, NumPy, matplotlib)", "Model performance evaluation", "Practical applications in real projects"] },
      { title: "Deep Learning and Advanced Algorithms", hours: "4h", topics: ["Introduction to Deep Learning and neural network architectures", "Deep Neural Networks (DNN)", "Convolutional Neural Networks (CNN) for image processing", "Recurrent Neural Networks (RNN) for sequential data", "Generative algorithms and advanced forward models"] },
      { title: "Using ChatGPT and AI for Data Science", hours: "4h", topics: ["ChatGPT as an assistant for data analysis", "Automating insights and reporting with AI", "Prompt engineering for Data Science", "Integrating ChatGPT with other Data Science tools", "Limitations, ethics, and security in using AI for Data Science"] },
      { title: "Practical Training in Data Science & AI", hours: "4h", topics: ["Data preprocessing and data cleaning", "Exploratory Data Analysis (EDA)", "Implementation of Machine Learning models", "Implementation of Deep Learning algorithms with Keras/TensorFlow", "Automating analysis and reporting with Python & AI tools", "Practical projects and preparation for final certification"] },
    ],
    schedule: { sessions: "20 sessions × 2 hours", days: "Monday, Wednesday, Friday", note: "Weekends off — schedule subject to change based on participants' requests." },
    certification: "Certification recognized by the National Agency for Education, Vocational Training and Qualifications in the Republic of Albania.",
  },
  {
    slug: "digital-marketing", color: "#FF3B3B", title: "Digital Marketing", category: "Digital Marketing & E-Commerce",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&q=80&auto=format&fit=crop", totalHours: "40 Hours",
    tools: ["Google Analytics", "Google Ads", "SEMrush", "WordPress", "Mailchimp", "Canva", "Meta Ads Manager", "ChatGPT"],
    overview: [
      "In the digital era, Digital Marketing has become a necessity for every business, standing at the core of every successful strategy. This program prepares participants to master the key skills of digital marketing, from website development and SEO optimization to the strategic use of platforms such as Google, Facebook, Instagram, and LinkedIn to create successful marketing campaigns.",
      "Participants gain a solid understanding of Digital Marketing fundamentals and market research, learning how to analyze consumer behavior and create effective audience personas, alongside the fair, transparent, and responsible use of data and technology. Key skills covered include data analysis using Excel, website creation, SEO optimization, Google Analytics, and Google Ads for targeted advertising campaigns.",
      "A special emphasis is placed on marketing across Facebook, Instagram, TikTok, and LinkedIn, plus Email Marketing, Influencer Marketing, and YouTube Ads. A unique feature of this program is the inclusion of ChatGPT Prompt Engineering for Marketing, enabling participants to leverage AI to accelerate content creation and optimize marketing strategies.",
    ],
    modules: [
      { title: "Introduction to Digital Marketing", hours: "4h", topics: ["Foundations and importance of digital marketing in modern businesses", "Definition of digital marketing and main digital channels", "Advantages over traditional marketing", "Market research steps and methods (qualitative & quantitative)", "Identification of target markets"] },
      { title: "Ethics in Digital Marketing & AI", hours: "4h", topics: ["Importance of ethics in digital communication", "Data privacy and protection", "Algorithms and potential bias", "Use of AI for personalization: ethical boundaries", "Marketing and AI legislation", "National and international case studies"] },
      { title: "Consumer Behavior and Audience Targeting", hours: "4h", topics: ["Factors influencing consumer behavior", "Customer journey and market segmentation", "Buyer persona development", "Targeting and market positioning"] },
      { title: "Data Analysis in Excel and Google Analytics", hours: "4h", topics: ["Data import and organization in Excel", "Charts, pivot tables, and analytical functions", "Traffic and behavior tracking in Google Analytics", "Key digital KPIs and interpreting results for decision-making"] },
      { title: "SEO and Website Development", hours: "2h", topics: ["Importance of SEO for Google rankings", "On-page and off-page SEO techniques", "Keyword research and competitive analysis", "Website creation platforms (WordPress, Wix, etc.)"] },
      { title: "Google Ads and Advertising Strategies", hours: "4h", topics: ["How Google Ads works", "Ad types: Search, Display, Video", "Creating effective advertising campaigns", "Performance measurement (CTR, CPC, CPA)", "ROI optimization strategies"] },
      { title: "Marketing on Facebook, Instagram, LinkedIn, TikTok & YouTube", hours: "4h", topics: ["Strategies for Instagram, TikTok, LinkedIn, and YouTube", "Video marketing strategies and content creation", "Platform selection based on audience", "Editorial calendars and content scheduling", "Engagement and performance analysis"] },
      { title: "E-mail Marketing and Influencer Marketing", hours: "4h", topics: ["Email marketing platforms (Mailchimp, Brevo)", "Targeted list creation, segmentation, and automation", "Influencer selection by industry", "Measuring influencer impact and ROI"] },
      { title: "ChatGPT for Content Creation and Optimization", hours: "4h", topics: ["Using ChatGPT and AI tools for content optimization", "Content idea generation for posts, emails, and blogs", "SEO optimization with AI support", "Message personalization by target audience", "Integration with Canva, WordPress, and Zapier"] },
      { title: "Practical Training in Digital Marketing", hours: "4h", topics: ["Building a marketing campaign from scratch", "Website creation using WordPress or Shopify with basic SEO", "Social media content creation and publishing", "Performance analysis using Google Analytics", "Presentation of a marketing strategy for a product or service"] },
    ],
    schedule: { sessions: "20 sessions × 2 hours", days: "Monday, Wednesday, Friday", note: "Weekends off — schedule subject to change based on participants' requests." },
    certification: "Certificate of completion covering all 10 modules, practical training, and final project presentation.",
  },
  {
    slug: "health-administrator", color: "#10B981", title: "Health Administrator (Hospital Administration & Management)", category: "Hospital Administration",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80&auto=format&fit=crop", totalHours: "60 Hours",
    tools: ["Hospital Information Systems (HIS)", "Electronic Health Records (EHR)", "Excel", "Data Analytics Tools", "HR Management Software", "Google Workspace", "Slack"],
    overview: [
      "The Health Administration Training Program is designed to prepare qualified professionals capable of managing, administering, and leading healthcare institutions in accordance with national legislation, international standards, and best practices in healthcare management. This program equips participants with comprehensive knowledge of healthcare systems, hospital operations, health law, medical ethics, financial management, quality assurance, and patient-centered care.",
      "Participants gain both theoretical knowledge and practical skills required to operate in complex healthcare environments, addressing administrative, legal, financial, and ethical challenges — including healthcare legislation, organizational management, hospital governance, health economics, patient rights, quality standards, risk management, digital health systems, and leadership in healthcare.",
      "At the end of the training, a final assessment is conducted. Participants must achieve at least 80% of the total score to successfully complete the program. Upon completion, participants are qualified to pursue roles as Health Administrators, Hospital Managers, Healthcare Coordinators, Medical Office Directors, or related leadership positions within public and private healthcare institutions.",
    ],
    modules: [
      { title: "Healthcare Systems and Health Policy", hours: "6h lectures + 2h exercises", topics: ["Introduction to healthcare systems", "Public vs. private healthcare models", "Health policy development and implementation", "Governance of healthcare institutions", "Roles of ministries, regulators, and accreditation bodies", "International healthcare systems and universal health coverage"] },
      { title: "Health Law, Patient Rights, and Medical Ethics", hours: "6h lectures + 2h exercises", topics: ["Fundamentals of health law", "Legal responsibilities of healthcare administrators", "Patient rights and informed consent", "Medical confidentiality and data protection", "Ethical principles: autonomy, beneficence, non-maleficence, justice", "Ethical dilemmas in hospital administration"] },
      { title: "Hospital Organization and Operations Management", hours: "6h lectures + 2h exercises", topics: ["Hospital organizational structures", "Clinical and non-clinical departments", "Workflow and operational efficiency", "Resource allocation and scheduling", "Facility management and logistics", "Emergency and crisis management in hospitals"] },
      { title: "Healthcare Human Resource Management", hours: "6h lectures + 2h exercises", topics: ["Recruitment and selection of healthcare staff", "Workforce planning and performance management", "Leadership in healthcare organizations", "Motivation, retention, and conflict management", "Training, professional development, and occupational health & safety"] },
      { title: "Financial Management and Health Economics", hours: "6h lectures + 2h exercises", topics: ["Basics of health economics and financing models", "Hospital budgeting and financial planning", "Cost control and efficiency analysis", "Revenue cycle management", "Insurance systems and reimbursement mechanisms", "Financial reporting and auditing in healthcare"] },
      { title: "Quality Management and Patient Safety", hours: "6h lectures + 2h exercises", topics: ["Quality management systems in healthcare", "Accreditation and certification standards", "Patient safety principles and risk management", "Clinical governance and performance indicators", "Incident reporting and continuous quality improvement"] },
      { title: "Digital Health, Health Information Systems, and Data Protection", hours: "6h lectures + 2h exercises", topics: ["Hospital Information Systems (HIS)", "Electronic Health Records (EHR)", "Health data analytics and reporting", "Data protection and cybersecurity in healthcare", "Telemedicine, AI applications, and digital health platforms"] },
      { title: "Risk Management, Compliance, and Healthcare Regulation", hours: "6h lectures + 2h exercises", topics: ["Regulatory compliance in healthcare", "Risk identification and assessment", "Infection control and safety regulations", "Emergency preparedness and disaster planning", "Internal controls, audits, and fraud prevention"] },
      { title: "Communication, Leadership, and Patient-Centered Care", hours: "2h lectures + 1h exercises", topics: ["Professional communication in healthcare settings", "Leadership styles in healthcare organizations", "Patient-centered care models", "Managing patient complaints and feedback", "Interdisciplinary teamwork and stakeholder communication"] },
      { title: "Practical Training – Hospital Administration Operations", hours: "3h practical training", topics: ["Overview of hospital administrative operations", "Patient admission and discharge processes", "Coordination with medical staff and departments", "Documentation and reporting procedures", "Final project and professional evaluation"] },
    ],
    schedule: { sessions: "24 sessions × 2.5 hours", days: "Monday, Wednesday, Friday", note: "Weekends off — schedule subject to change based on participants' requests." },
    certification: "Final assessment requires 80%+ score. Qualifies graduates for roles including Health Administrator, Hospital Manager, Healthcare Coordinator, and Medical Office Director.",
  },
];

export const CONTENT_DEFAULTS: Record<string, unknown> = {
  heroTrustChips: DEFAULT_HERO_TRUST_CHIPS,
  heroStats: DEFAULT_HERO_STATS,
  heroOrbitIcons: DEFAULT_HERO_ORBIT_ICONS,
  heroStars: DEFAULT_HERO_STARS,
  whyWorldPassportFeatures: DEFAULT_WHY_WORLD_PASSPORT,
  universityPartners: DEFAULT_UNIVERSITY_PARTNERS,
  internationalFaculties: DEFAULT_INTERNATIONAL_FACULTIES,
  certificates: DEFAULT_CERTIFICATES,
  faq: DEFAULT_FAQ,
  valueStack: DEFAULT_VALUE_STACK,
  solutionTimeline: DEFAULT_SOLUTION_TIMELINE,
  problems: DEFAULT_PROBLEMS,
  placementSupportTimeline: DEFAULT_PLACEMENT_SUPPORT_TIMELINE,
  placementSupportCards: DEFAULT_PLACEMENT_SUPPORT_CARDS,
  trustStripItems: DEFAULT_TRUST_STRIP_ITEMS,
  tools: DEFAULT_TOOLS,
  targetAudiences: DEFAULT_TARGET_AUDIENCES,
  ctaTrustChips: DEFAULT_CTA_TRUST_CHIPS,
  placementPlatformFeatures: DEFAULT_PLACEMENT_PLATFORM_FEATURES,
  placementPlatformStats: DEFAULT_PLACEMENT_PLATFORM_STATS,
  footerQuickLinks: DEFAULT_FOOTER_QUICK_LINKS,
  footerSocialLinks: DEFAULT_FOOTER_SOCIAL_LINKS,
  navLinks: DEFAULT_NAV_LINKS,
  aboutTeam: DEFAULT_ABOUT_TEAM,
  aboutValues: DEFAULT_ABOUT_VALUES,
  aboutHeroStats: DEFAULT_ABOUT_HERO_STATS,
  testimonialsBatchChips: DEFAULT_TESTIMONIALS_BATCH_CHIPS,
  programsQuickStatsMeta: DEFAULT_PROGRAMS_QUICK_STATS_META,
  citCourses: DEFAULT_CIT_COURSES,
  muaCourses: DEFAULT_MUA_COURSES,
  citDetailsQuickStats: DEFAULT_CIT_DETAILS_QUICK_STATS,
  citDetailsWhyChoose: DEFAULT_CIT_DETAILS_WHY_CHOOSE,
  citDetailsEligibility: DEFAULT_CIT_DETAILS_ELIGIBILITY,
  citDetailsAccreditation: DEFAULT_CIT_DETAILS_ACCREDITATION,
  medDetailsQuickStats: DEFAULT_MED_DETAILS_QUICK_STATS,
  medDetailsWhyChoose: DEFAULT_MED_DETAILS_WHY_CHOOSE,
  medDetailsAdmissionRequirements: DEFAULT_MED_DETAILS_ADMISSION_REQUIREMENTS,
  medDetailsFaqs: DEFAULT_MED_DETAILS_FAQS,
  courseDetailsLearningOutcomes: DEFAULT_COURSE_DETAILS_LEARNING_OUTCOMES,
  courseDetailsCareerRoles: DEFAULT_COURSE_DETAILS_CAREER_ROLES,
  courseDetailsEligibility: DEFAULT_COURSE_DETAILS_ELIGIBILITY,
  courseDetailsFaqs: DEFAULT_COURSE_DETAILS_FAQS,
  courseDetailsQuickStats: DEFAULT_COURSE_DETAILS_QUICK_STATS,
  courseDetailsCareerStats: DEFAULT_COURSE_DETAILS_CAREER_STATS,
};
