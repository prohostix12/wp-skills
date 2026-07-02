export interface CitCourse {
  slug: string;
  color: string;
  title: string;
  category: string;
  duration: string;
  tools: string[];
  image: string;
  points: string[];
  learn: string[];
}

export const citCourses: CitCourse[] = [
  {
    slug: "ai-video-creation-smart-sustainable",
    color: "#A855F7",
    title: "AI Video Creation – Smart & Sustainable",
    category: "Artificial Intelligence & Media",
    duration: "3 Months",
    tools: ["Runway ML", "ChatGPT", "ElevenLabs"],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80&auto=format&fit=crop",
    points: ["Create professional videos using AI tools", "Smart scriptwriting & automated production", "AI-powered media analytics & editing"],
    learn: ["Create professional videos using AI tools", "Smart scriptwriting & automated production", "AI-powered media analytics & editing", "Content monetization strategies", "Freelancing opportunities in AI media"],
  },
  {
    slug: "applied-data-science-machine-learning",
    color: "#3B82F6",
    title: "Applied Data Science & Machine Learning",
    category: "AI",
    duration: "4 Months",
    tools: ["Python", "TensorFlow", "Jupyter"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80&auto=format&fit=crop",
    points: ["Understand real-world data analysis techniques", "Build machine learning models for business", "Predict trends using AI-driven insights"],
    learn: ["Understand real-world data analysis techniques", "Build machine learning models for business", "Predict trends using AI-driven insights", "Ethical and responsible AI practices", "Data-driven decision making frameworks"],
  },
  {
    slug: "logistics-supply-chain-management",
    color: "#00C9B0",
    title: "Logistics & Supply Chain Management",
    category: "Logistics & Supply Chain Management",
    duration: "3 Months",
    tools: ["Excel", "ERP Systems", "SAP"],
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80&auto=format&fit=crop",
    points: ["Modern supply chain systems & workflows", "Inventory and distribution management", "Cost optimization strategies"],
    learn: ["Modern supply chain systems & workflows", "Inventory and distribution management", "Cost optimization strategies", "KPI monitoring and performance analysis", "Risk management in logistics operations"],
  },
  {
    slug: "business-intelligence-data-analytics",
    color: "#FFB800",
    title: "Business Intelligence & Data Analytics",
    category: "Data Analytics",
    duration: "4 Months",
    tools: ["Power BI", "Tableau", "SQL"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format&fit=crop",
    points: ["Transform raw data into business insights", "Design interactive dashboards & reports", "KPI tracking for business performance"],
    learn: ["Transform raw data into business insights", "Design interactive dashboards & reports", "KPI tracking for business performance", "Data visualization for decision making", "Strategic analytics for organizations"],
  },
  {
    slug: "digital-marketing-with-ai",
    color: "#FF3B3B",
    title: "Digital Marketing with AI",
    category: "Digital Marketing & E-Commerce",
    duration: "3 Months",
    tools: ["ChatGPT", "Canva AI", "Google Analytics"],
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&q=80&auto=format&fit=crop",
    points: ["AI-powered content creation strategies", "Smart campaign optimization techniques", "Customer behavior and audience analytics"],
    learn: ["AI-powered content creation strategies", "Smart campaign optimization techniques", "Customer behavior and audience analytics", "Marketing automation using AI tools", "Improve campaign ROI and performance"],
  },
  {
    slug: "virtual-reality-vr-for-business",
    color: "#FF6B00",
    title: "Virtual Reality (VR) for Business",
    category: "IT & Business",
    duration: "3 Months",
    tools: ["Unity", "VR Headsets", "Blender"],
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=600&q=80&auto=format&fit=crop",
    points: ["Introduction to immersive VR technologies", "Business training and simulation solutions", "VR integration for modern enterprises"],
    learn: ["Introduction to immersive VR technologies", "Business training and simulation solutions", "VR integration for modern enterprises", "Safety and operational applications", "Future trends in immersive technologies"],
  },
];

export function getCitCourse(slug: string) {
  return citCourses.find((c) => c.slug === slug);
}
