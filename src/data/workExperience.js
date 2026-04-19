/**
 * Comentario en espanol mexicano: este archivo define datos y/o configuraciones del portafolio.
 * Archivo: workExperience.js
 */
export const workExperience = [
  {
    title: "Freelance Java Developer",
    company: "Freelance",
    years: "2026 - Present",
    stackVisuals: [
      { icon: "simple-icons:openjdk", label: "Java" },
      { icon: "simple-icons:springboot", label: "Spring Boot" },
      { icon: "simple-icons:postgresql", label: "PostgreSQL" },
      { icon: "simple-icons:mysql", label: "MySQL" },
      { icon: "simple-icons:docker", label: "Docker" },
      { icon: "simple-icons:apachemaven", label: "Maven" },
      { icon: "simple-icons:git", label: "Git" },
      { icon: "simple-icons:postman", label: "Postman" }
    ],
    description: "Built and maintained Java backend solutions for freelance clients, focusing on clean architecture, API reliability, and production-ready delivery.",
    highlights: [
      "Developed REST APIs with Java and Spring Boot for business workflows and third-party integrations.",
      "Designed relational data models and optimized SQL queries for better response times.",
      "Containerized services with Docker and standardized build pipelines with Maven.",
      "Implemented authentication, validation, and error-handling patterns to improve API stability.",
      "Collaborated directly with clients to define scope, ship incremental releases, and document technical handoff."
    ]
  },
  {
    title: "Lead Frontend Mobile Dev & Tester",
    company: "News MX TV",
    years: "2025 - 2026",
    stackIcons: [
      { src: "/icons/angularpurple.svg", label: "Angular" },
      { src: "/icons/typescriptcute.svg", label: "TypeScript" },
      { src: "/icons/swiftcute.svg", label: "Swift" }
    ],
    description: "Engineered cross-platform mobile applications using Kotlin, Astro, Angular, Node.js, and Swift. Modernized the technology infrastructure and elevated the overall user experience. Applied Figma for design consistency and implemented quality assurance processes to ensure code reliability."
  },
  {
    title: "IT Operations Trainee & Data Specialist",
    company: "Local SMB",
    years: "2024 - 2025",
    stackVisuals: [
      { icon: "simple-icons:windows", label: "Windows Server" },
      { icon: "simple-icons:microsoftazure", label: "Azure" },
      { icon: "simple-icons:react", label: "React" },
      { icon: "simple-icons:dotnet", label: "C# .NET" },
      { icon: "simple-icons:electron", label: "Electron" },
      { icon: "simple-icons:microsoftsqlserver", label: "SQL Server" },
      { icon: "simple-icons:python", label: "Python" },
      { icon: "simple-icons:pandas", label: "Pandas" },
      { icon: "simple-icons:numpy", label: "NumPy" },
      { icon: "lucide:chart-line", label: "Matplotlib" },
      { icon: "lucide:bar-chart-3", label: "Seaborn" },
      { icon: "simple-icons:powerbi", label: "Power BI" },
      { icon: "simple-icons:tableau", label: "Tableau" },
      { icon: "lucide:workflow", label: "ETL" },
      { icon: "lucide:clock-3", label: "Cron Jobs" },
      { icon: "lucide:printer", label: "Zebra ZPL" }
    ],
    description: "Delivered infrastructure support, full stack solutions, and data workflows to improve reliability and operational performance.",
    highlights: [
      "Provided L1-L3 support (incident resolution, troubleshooting, RCA) and managed Windows Server and cloud environments for high availability.",
      "Developed a full stack inventory system (REST APIs, SQL Server) reducing incidents by 25%, and built an ERP desktop app (C# .NET, React, Electron) with inventory and process modules.",
      "Performed data analysis with Python (Pandas, NumPy, Matplotlib, Seaborn), EDA and reporting; built dashboards and KPIs (Power BI, Tableau) with ETL and data modeling, improving efficiency by 35%.",
      "Automated workflows with cron jobs, integrated Zebra printers (ZPL), and configured Azure VPN (VNet plus VPN Gateway).",
      "Supported Azure FinOps practices including cost monitoring, budgeting, and resource tagging."
    ]
  }
];