/**
 * Comentario en espanol mexicano: este archivo define datos y/o configuraciones del portafolio.
 * Archivo: skills.js
 */
/**
 * skills.js
 * Hard skills grouped by category for cleaner portfolio presentation.
 */
export const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML", icon: "simple-icons:html5" },
      { name: "CSS", icon: "simple-icons:css" },
      { name: "JavaScript", icon: "simple-icons:javascript" },
      { name: "React", icon: "simple-icons:react" },
      { name: "Svelte", icon: "simple-icons:svelte" },
      { name: "Astro", icon: "simple-icons:astro" },
      { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
      { name: "Cypress", icon: "simple-icons:cypress" },
      { name: "Odoo OWL", icon: "simple-icons:odoo" }
    ]
  },
  {
    name: "Backend & Data",
    skills: [
      { name: "Python", icon: "simple-icons:python" },
      { name: "Java", icon: "lucide:coffee" },
      { name: "Spring Boot", icon: "simple-icons:springboot" },
      { name: "Golang", icon: "simple-icons:go" },
      { name: "C#", icon: "simple-icons:sharp" },
      { name: ".NET", icon: "simple-icons:dotnet" },
      { name: "C++", icon: "simple-icons:cplusplus" },
      { name: "Elixir", icon: "simple-icons:elixir" },
      { name: "ArduPilot", icon: "lucide:plane" },
      { name: "Open Claw", icon: "lucide:cpu" },
      { name: "Scala", icon: "simple-icons:scala" },
      { name: "R", icon: "simple-icons:r" },
      { name: "Rust", icon: "simple-icons:rust" },
      { name: "Shell", icon: "lucide:terminal" },
      { name: "Docker", icon: "simple-icons:docker" },
      { name: "Jenkins", icon: "simple-icons:jenkins" },
      { name: "Redis", icon: "simple-icons:redis" },
      { name: "Kafka", icon: "simple-icons:apachekafka" },
      { name: "Apache Flink", icon: "lucide:git-branch-plus" },
      { name: "Apache Spark", icon: "simple-icons:apachespark" },
      { name: "Apache Airflow", icon: "simple-icons:apacheairflow" },
      { name: "Apache Jetpack", icon: "lucide:rocket" },
      { name: "PySpark", icon: "lucide:database-zap" },
      { name: "MySQL", icon: "simple-icons:mysql" },
      { name: "PostgreSQL", icon: "simple-icons:postgresql" },
      { name: "Cassandra Database", icon: "simple-icons:apachecassandra" },
      { name: "CockroachDB", icon: "simple-icons:cockroachlabs" },
      { name: "SQL Server", icon: "simple-icons:microsoftsqlserver" },
      { name: "MariaDB", icon: "simple-icons:mariadb" },
      { name: "Firebird", icon: "lucide:flame" },
      { name: "MongoDB", icon: "simple-icons:mongodb" },
      { name: "Supabase", icon: "simple-icons:supabase" },
      { name: "Databricks", icon: "simple-icons:databricks" },
      { name: "BigQuery", icon: "simple-icons:googlebigquery" },
      { name: "Microsoft Fabric", icon: "lucide:blocks" },
      { name: "Snowflake", icon: "simple-icons:snowflake" },
      { name: "Tableau", icon: "simple-icons:tableau" },
      { name: "Power BI", icon: "simple-icons:powerbi" },
      { name: "Ethereum", icon: "simple-icons:ethereum" }
    ]
  },
  {
    name: "AI Models & APIs",
    subtitle: "Integration with generative models, agents and AI APIs",
    skills: [
      { name: "OpenAI API", icon: "lucide:bot" },
      { name: "GPT-4 / GPT-4o", icon: "lucide:brain" },
      { name: "Claude API", icon: "lucide:cpu" },
      { name: "Gemini API", icon: "lucide:network" },
      { name: "Llama 3", icon: "lucide:messages-square" },
      { name: "Ollama", icon: "lucide:server" },
      { name: "n8n", icon: "lucide:workflow" },
      { name: "Prompt Engineering", icon: "lucide:message-square" },
      { name: "AI Automation", icon: "lucide:sparkles" }
    ]
  },
  {
    name: "Design & Product",
    skills: [
      { name: "UI/UX Design", icon: "simple-icons:figma" },
      { name: "Web Development", icon: "lucide:code" },
      { name: "Scrum", icon: "lucide:kanban-square" },
      { name: "Design Thinking", icon: "lucide:lightbulb" },
      { name: "Branding", icon: "lucide:pen-tool" },
      { name: "Figma", icon: "simple-icons:figma" }
    ]
  },
  {
    name: "Softwares de Gestión de Proyectos",
    subtitle: "Planificación, seguimiento y colaboración de equipos",
    skills: [
      { name: "Jira", icon: "simple-icons:jira" },
      { name: "Trello", icon: "simple-icons:trello" },
      { name: "Asana", icon: "simple-icons:asana" },
      { name: "Notion", icon: "simple-icons:notion" },
      { name: "Obsidian", icon: "simple-icons:obsidian" },
      { name: "Slack", icon: "simple-icons:slack" },
      { name: "monday.com", icon: "lucide:calendar-check" },
      { name: "ClickUp", icon: "simple-icons:clickup" },
      { name: "Confluence", icon: "simple-icons:confluence" }
    ]
  },
  {
    name: "Support Knowledge",
    subtitle: "Technical support, diagnostics and incident response",
    skills: [
      { name: "Technical Support", icon: "lucide:headset" },
      { name: "Troubleshooting", icon: "lucide:wrench" },
      { name: "Incident Management", icon: "lucide:alert-triangle" },
      { name: "Ticketing Systems", icon: "lucide:ticket" },
      { name: "Root Cause Analysis", icon: "lucide:search" },
      { name: "User Assistance", icon: "lucide:users" },
      { name: "Zendesk", icon: "simple-icons:zendesk" },
      { name: "AnyDesk", icon: "lucide:monitor-smartphone" },
      { name: "Nginx", icon: "simple-icons:nginx" },
      { name: "Ubuntu Server", icon: "simple-icons:ubuntu" },
      { name: "Red Hat", icon: "simple-icons:redhat" },
      { name: "Fedora", icon: "simple-icons:fedora" },
      { name: "Windows Server", icon: "simple-icons:windows" },
      { name: "Splunk", icon: "simple-icons:splunk" },
      { name: "pfSense", icon: "lucide:shield-check" },
      { name: "Cisco", icon: "simple-icons:cisco" },
      { name: "Huawei", icon: "simple-icons:huawei" },
      { name: "Palo Alto Networks", icon: "simple-icons:paloaltonetworks" },
      { name: "Fortinet", icon: "simple-icons:fortinet" }
    ]
  },
  {
    name: "Cloud",
    subtitle: "Cloud platforms and infrastructure tooling",
    skills: [
      { name: "AWS", icon: "simple-icons:amazonwebservices" },
      { name: "Microsoft Azure", icon: "simple-icons:microsoftazure" },
      { name: "Google Cloud", icon: "simple-icons:googlecloud" },
      { name: "Oracle Cloud", icon: "simple-icons:oracle" },
      { name: "Railway", icon: "simple-icons:railway" },
      { name: "Kubernetes", icon: "simple-icons:kubernetes" },
      { name: "Terraform", icon: "simple-icons:terraform" },
      { name: "Cloudflare", icon: "simple-icons:cloudflare" }
    ]
  },
  {
    name: "Standards",
    subtitle: "Information security and AI governance",
    skills: [
      { name: "ISO 27001", icon: "lucide:shield-check" },
      { name: "ISO 42001", icon: "lucide:brain" },
      { name: "Cybersecurity", icon: "lucide:shield" }
    ]
  }
];

// Compatibility export used by ticker and other components.
export const skills = skillCategories.flatMap((category) => category.skills);