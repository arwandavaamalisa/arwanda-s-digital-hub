import manyChatSkinQuiz from "@/assets/manychat-skin-quiz.png.asset.json";

export type WorkSample = {
  label: string;
  caption: string;
  image: string;
};

export type Service = {
  number: string;
  title: string;
  summary: string;
  items: string[];
};

export type CaseStudy = {
  number: string;
  client: string;
  role: string;
  focus: string;
  scope: string;
  work: string[];
  tools: string[];
  workSample?: WorkSample;
};

export const services: Service[] = [
  { number: "01", title: "Administrative & Executive Support", summary: "Steady, detail-focused support for the work behind every productive day.", items: ["Calendar management", "Inbox management", "Scheduling", "Documents", "Research", "Follow-ups"] },
  { number: "02", title: "Customer & Client Support", summary: "Responsive communication that helps clients feel informed and looked after.", items: ["Customer communication", "Booking coordination", "Client follow-ups", "CRM updates", "Issue resolution"] },
  { number: "03", title: "Digital Operations", summary: "Hands-on support across websites, e-commerce, and everyday digital systems.", items: ["WordPress", "Elementor", "Shopify", "Website updates", "Digital systems", "Technical troubleshooting"] },
  { number: "04", title: "CRM & Automation", summary: "Organized systems and practical workflows that reduce repetitive work.", items: ["GoHighLevel", "ManyChat", "CRM management", "Workflow support", "Google Sheets", "Process automation"] },
  { number: "05", title: "Email & Marketing Support", summary: "End-to-end campaign assistance, from first draft through final send.", items: ["Email campaign support", "Copywriting", "Email design & layout", "ESP setup", "Scheduling", "Basic performance tracking"] },
];

export const caseStudies: CaseStudy[] = [
  { number: "01", client: "Dutch Skincare", role: "Digital & Technical Virtual Assistant", focus: "Website · E-commerce · Automation · CRM", scope: "Ongoing digital and technical support across customer-facing systems and internal workflows.", work: ["Maintaining website and e-commerce content", "Supporting CRM administration and digital workflows", "Coordinating structured data and operational updates", "Troubleshooting day-to-day technical issues"], tools: ["WordPress", "Elementor", "Shopify", "Google Sheets", "CRM", "Lovable"], workSample: { label: "ManyChat Automation — Skin Quiz", caption: "Automated customer journey and quiz workflow built in ManyChat, including branching logic and automated responses.", image: manyChatSkinQuiz.url } },
  { number: "02", client: "Elevated Connections", role: "Virtual & AI-Driven Assistant", focus: "CRM · Automation · Marketing · Operations", scope: "Flexible operational and marketing assistance spanning client systems, content, and automation.", work: ["Supporting CRM and lead-management workflows", "Building and maintaining automated customer journeys", "Preparing content and visual assets", "Managing recurring operational tasks"], tools: ["GoHighLevel", "ManyChat", "Canva", "AI tools", "Google Workspace"] },
  { number: "03", client: "Digipad.id", role: "Personal Assistant", focus: "Executive Support · Scheduling · Client Communication", scope: "Direct personal assistance that kept priorities, communication, and appointments moving.", work: ["Coordinating calendars and appointments", "Following up with clients and stakeholders", "Organizing documents and priorities", "Handling day-to-day administrative communication"], tools: ["Google Workspace", "Calendar", "Email", "Messaging"] },
  { number: "04", client: "PT. Leassy Transportation Indonesia", role: "Customer Service & Operations", focus: "Customer Service · Booking · Operations", scope: "Front-line customer support and booking coordination for daily transportation operations.", work: ["Responding to customer inquiries", "Coordinating reservations and schedule changes", "Maintaining booking and customer records", "Supporting issue resolution across daily operations"], tools: ["CRM", "Trello", "Microsoft Excel"] },
  { number: "05", client: "Dapur Nusantara", role: "Website Project", focus: "Website · WordPress · Digital Presence", scope: "Website support focused on creating a clear, maintainable digital presence.", work: ["Structuring website pages and content", "Implementing responsive page layouts", "Supporting visual consistency", "Preparing the site for ongoing updates"], tools: ["WordPress", "Elementor"] },
];

export const experiences = [
  { company: "Dutch Skincare", role: "Digital & Technical Virtual Assistant", place: "Netherlands · Remote", period: "Apr 2026 – Present" },
  { company: "Elevated Connections", role: "Virtual & AI-Driven Assistant", place: "Canada · Remote", period: "Nov 2025 – Apr 2026" },
  { company: "Digipad.id", role: "Personal Assistant", place: "Denpasar, Indonesia", period: "Aug 2025 – Nov 2025" },
  { company: "PT. Leassy Transportation Indonesia", role: "Customer Service Representative", place: "Denpasar, Indonesia", period: "Jun 2024 – Aug 2025" },
  { company: "Mimosa Boutique", role: "Administrative Assistant", place: "Denpasar, Indonesia", period: "Dec 2023 – Jun 2024" },
];

export const toolGroups = [
  { category: "Productivity", tools: ["Google Workspace", "Microsoft Office", "Trello", "Canva"] },
  { category: "CRM & Automation", tools: ["GoHighLevel", "ManyChat", "CRM systems", "Google Sheets"] },
  { category: "Website & E-commerce", tools: ["WordPress", "Elementor", "Shopify", "Lovable"] },
  { category: "Marketing", tools: ["MailerLite", "Brevo", "Mailchimp", "Klaviyo"] },
  { category: "AI", tools: ["AI-assisted research", "Writing support", "Workflow support"] },
];
