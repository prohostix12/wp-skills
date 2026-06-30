export type Program = {
  category: string;
  title: string;
  description: string;
  university: string;
  universityInitial: string;
  rating: number;
  duration: string;
  image: string;
  students: string;
  learningPoints: string[];
};

export const getProgramSlug = (title: string): string => {
  return encodeURIComponent(
    title.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")
  );
};

export const PROGRAMS: Program[] = [
  {
    category: "DATA ANALYTICS",
    title: "Business Intelligence & Data Analytics",
    description:
      "This course focuses on transforming data into meaningful insights through Business Intelligence and Data Analytics tools. Participants learn how to structure data models, design dashboards, and create reports that support strategic and operational decision-making. Emphasis is placed on KPI definition, data visualization best practices, and storytelling with data to ensure insights are clearly communicated to stakeholders at all organizational levels.",
    university: "Canadian Institute of Technology (CIT)",
    universityInitial: "C",
    rating: 4.9,
    duration: "12h",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    students: "1,240+",
    learningPoints: [
      "Master industry-standard global frameworks",
      "Architect production-grade secure systems",
      "Lead cross-functional technical teams",
      "Deploy advanced AI-driven solutions",
      "Analyze deep-learning neural matrices",
      "Accelerate your professional trajectory",
    ],
  },
  {
    category: "ARTIFICIAL INTELLIGENCE & MEDIA TECHNOLOGY",
    title: "AI Audio & Video Creation – Smart & Sustainable",
    description:
      "This course equips participants with the skills to create and manage audio visual content using Artificial Intelligence tools in a sustainable and ethical manner. Understand how AI assists workflows, automates production, and supports media scaling.",
    university: "Canadian Institute of Technology (CIT)",
    universityInitial: "C",
    rating: 4.8,
    duration: "12h",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&q=80",
    students: "850+",
    learningPoints: [
      "Generate high-quality AI speech and music tracks",
      "Produce automated video content using smart tools",
      "Optimize editing workflows with AI assistance",
      "Understand ethical implications of AI creation",
      "Deploy content on modern marketing channels",
      "Measure viewer engagement and analytics",
    ],
  },
  {
    category: "HOSPITAL ADMINISTRATION",
    title: "Health Administrator (Hospital Administration & Management)",
    description:
      "The Health Administration Training Program is designed to prepare qualified professionals capable of managing complex healthcare environments effectively. Get trained on medical compliance, resource management, and medical records security.",
    university: "Mediterranean University",
    universityInitial: "M",
    rating: 4.8,
    duration: "12h",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80",
    students: "680+",
    learningPoints: [
      "Understand healthcare regulatory compliance",
      "Manage clinical workflows and operations",
      "Optimize hospital resource scheduling",
      "Implement medical records security",
      "Improve patient satisfaction scores",
      "Direct healthcare financial budgeting",
    ],
  },
  {
    category: "DIGITAL MARKETING & E-COMMERCE",
    title: "Professional Training – Digital Marketing",
    description:
      "In the digital era, Digital Marketing has become a necessity for every business, standing at the core of growth strategies and customer engagement. Learn to execute SEO, run targeted ads, and measure search engine growth.",
    university: "Mediterranean University",
    universityInitial: "M",
    rating: 4.8,
    duration: "12h",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    students: "1,150+",
    learningPoints: [
      "Master search engine optimization (SEO)",
      "Run high-converting Google & Facebook Ads",
      "Design content marketing campaigns",
      "Build email marketing automation sequences",
      "Analyze web traffic and conversions",
      "Develop social media brand strategies",
    ],
  },
  {
    category: "AI",
    title: "Professional Training – Data Science & AI",
    description:
      "This professional training prepares qualified experts in the field of Data Science and Artificial Intelligence with hands-on, industry-relevant skills. Learn statistics, algorithm writing, model validation, and deployment.",
    university: "Mediterranean University",
    universityInitial: "M",
    rating: 4.8,
    duration: "12h",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&q=80",
    students: "1,040+",
    learningPoints: [
      "Analyze complex datasets using Python",
      "Build predictive machine learning models",
      "Implement neural networks and deep learning",
      "Clean and preprocess big data streams",
      "Visualize findings with interactive dashboards",
      "Deploy data models to production servers",
    ],
  },
  {
    category: "REAL ESTATE & PROPERTY MANAGEMENT",
    title: "Real Estate Broker",
    description:
      "The training introduces participants to relevant legislation, tax obligations, and the rules of professional conduct in the real estate sector. Gain expertise on property evaluation, contract management, and brokerage compliance.",
    university: "Mediterranean University",
    universityInitial: "M",
    rating: 4.8,
    duration: "12h",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    students: "450+",
    learningPoints: [
      "Analyze real estate market trends",
      "Master property valuation methods",
      "Navigate legal and contract compliance",
      "Close property sales and lease agreements",
      "Conduct client needs assessments",
      "Market listings with digital channels",
    ],
  },
  {
    category: "IT & BUSINESS",
    title: "Virtual Reality (VR) for Business Applications",
    description:
      "This course provides a comprehensive introduction to Virtual Reality (VR) and its application in business and enterprise environments. Learn spatially aware design, VR hardware features, and corporate training simulations.",
    university: "Canadian Institute of Technology (CIT)",
    universityInitial: "C",
    rating: 4.8,
    duration: "12h",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&q=80",
    students: "530+",
    learningPoints: [
      "Identify VR business use cases",
      "Design interactive virtual environments",
      "Integrate VR in team training flows",
      "Understand hardware and SDK frameworks",
      "Evaluate VR software solutions",
      "Analyze virtual spatial UI principles",
    ],
  },
  {
    category: "AI",
    title: "Digital Marketing with AI",
    description:
      "This course explores how Artificial Intelligence is reshaping digital marketing strategies and execution, enabling smarter campaigns and measurable results. Learn automated content copy generation, ad graphics, and predictive analysis.",
    university: "Canadian Institute of Technology (CIT)",
    universityInitial: "C",
    rating: 4.8,
    duration: "12h",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
    students: "890+",
    learningPoints: [
      "Automate copywriting using AI assistants",
      "Generate digital ad graphics using AI",
      "Optimize keyword bidding with AI platforms",
      "Personalize email marketing with AI models",
      "Automate social media scheduling",
      "Track campaign conversions with AI analytics",
    ],
  },
  {
    category: "LOGISTICS & SUPPLY CHAIN MANAGEMENT",
    title: "Introduction to Logistics & Supply Chain Management",
    description:
      "This course introduces participants to the core principles of logistics and supply chain management, focusing on efficiency and global operations. Acquire skills in inventory management, shipping, and supply agreements.",
    university: "Canadian Institute of Technology (CIT)",
    universityInitial: "C",
    rating: 4.8,
    duration: "12h",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    students: "720+",
    learningPoints: [
      "Optimize inventory management techniques",
      "Coordinate global freight logistics",
      "Master supply chain risk mitigation",
      "Streamline warehouse distribution flows",
      "Implement demand forecasting models",
      "Negotiate vendor supply contracts",
    ],
  },
  {
    category: "PROGRAMMING",
    title: "Applied Data Science & Machine Learning for Business",
    description:
      "This advanced-level course provides a structured and practical introduction to Data Science and Machine Learning for real-world business applications. Learn predictive metrics, ML logic structures, and model validations.",
    university: "Canadian Institute of Technology (CIT)",
    universityInitial: "C",
    rating: 4.8,
    duration: "12h",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&q=80",
    students: "960+",
    learningPoints: [
      "Apply ML models to business metrics",
      "Implement customer churn prediction",
      "Construct recommendation engines",
      "Clean business dataset structures",
      "Evaluate predictive model accuracy",
      "Present data findings to executives",
    ],
  },
];
