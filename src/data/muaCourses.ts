export interface MuaModule {
  title: string;
  topics: string[];
  hours: string;
}

export interface MuaCourse {
  slug: string;
  color: string;
  title: string;
  category: string;
  image: string;
  totalHours: string;
  overview: string[];
  modules: MuaModule[];
  schedule: {
    sessions: string;
    days: string;
    note: string;
  };
  certification: string;
}

export const muaCourses: MuaCourse[] = [
  {
    slug: "real-estate-broker",
    color: "#F59E0B",
    title: "Real Estate Broker",
    category: "Real Estate & Property Management",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80&auto=format&fit=crop",
    totalHours: "60 Hours",
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
    slug: "data-science-ai",
    color: "#3B82F6",
    title: "Data Science & AI",
    category: "AI",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80&auto=format&fit=crop",
    totalHours: "40 Hours",
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
    slug: "digital-marketing",
    color: "#FF3B3B",
    title: "Digital Marketing",
    category: "Digital Marketing & E-Commerce",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&q=80&auto=format&fit=crop",
    totalHours: "40 Hours",
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
    slug: "health-administrator",
    color: "#10B981",
    title: "Health Administrator (Hospital Administration & Management)",
    category: "Hospital Administration",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80&auto=format&fit=crop",
    totalHours: "60 Hours",
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

export function getMuaCourse(slug: string) {
  return muaCourses.find((c) => c.slug === slug);
}
