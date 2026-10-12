export const content = {
  pt: {
    nav: {
      projects: "Projetos",
      experience: "Experiência",
      stack: "Stack",
      about: "Sobre",
      contact: "Contato",
    },
    hero: {
      eyebrow: "EDUARDO FABISIAK · ENGENHARIA DE SOFTWARE",
      title: "Software que sobrevive à produção.",
      subtitle:
        "Há mais de 4 anos construo APIs, filas, pagamentos e sistemas distribuídos que clientes usam todos os dias.",
      ctaPrimary: "Ver projetos",
      ctaSecondary: "Falar comigo",
    },
    projects: {
      heading: "Projetos",
      intro:
        "Sistemas construídos de ponta a ponta, do modelo de dados ao deploy. Todos open source no GitHub.",
      items: [
        {
          name: "Naia",
          category: "SAAS · MENSAGERIA",
          description:
            "Plataforma de disparo de campanhas em massa no WhatsApp e Telegram, com 98%+ de entregabilidade, processamento de webhooks, retry e monitoramento. Rodou em produção atendendo clientes reais e hoje é open source.",
          stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Docker"],
          link: "https://github.com/Duuuuardo/Naia",
          linkLabel: "github.com/Duuuuardo/Naia",
          motif: "broadcast",
        },
        {
          name: "Vianova",
          category: "IDENTIDADE · BILLING",
          description:
            "Hub de conta, identidade e cobrança: provedor OIDC próprio com OAuth2 e 2FA, RBAC multi-workspace e assinaturas Stripe. API REST versionada e documentada. Rodou em produção e hoje é open source.",
          stack: ["Bun", "TypeScript", "Elysia", "Stripe", "PostgreSQL", "OIDC"],
          link: "https://github.com/Duuuuardo/Vianova",
          linkLabel: "github.com/Duuuuardo/Vianova",
          motif: "orbit",
        },
        {
          name: "Currículos",
          category: "IA · PRODUTIVIDADE",
          description:
            "App Rails que gera currículos sob medida para cada vaga: extrai keywords da descrição, pontua o match e reescreve resumo e bullets. Assistente de chat, importação de PDF do LinkedIn e IA multi-provider (Ollama, OpenAI, Anthropic, Gemini).",
          stack: ["Rails 8", "SQLite", "Hotwire", "Stimulus", "LLM"],
          link: "https://github.com/Duuuuardo/curriculos",
          linkLabel: "github.com/Duuuuardo/curriculos",
          motif: "flux",
        },
      ],
    },
    experience: {
      heading: "Experiência",
      items: [
        {
          company: "Preço Local",
          role: "Software Engineer",
          period: "NOV 2025 - MAI 2026",
          bullets: [
            "API REST do zero em Node.js e TypeScript, com catálogo, preços, busca e geolocalização",
            "App mobile em React Native publicado na Google Play e na App Store",
            "Cache distribuído com Redis e CI/CD com Docker",
          ],
        },
        {
          company: "Sky Store",
          role: "Software Engineer",
          period: "JUN 2025 - NOV 2025",
          bullets: [
            "Serviços backend em Node.js com PostgreSQL, Redis e RabbitMQ para processamento assíncrono",
            "Features full-stack na plataforma de e-commerce com React e JavaScript",
            "Armazenamento de arquivos em Amazon S3 e operação em ambientes Linux",
          ],
        },
        {
          company: "Rituais de Axé",
          role: "Software Engineer",
          period: "SET 2024 - JUN 2025",
          bullets: [
            "Sistema de pagamentos com Pix e matrícula automática após confirmação",
            "Processamento assíncrono de cobranças e cache com Redis",
            "Autenticação JWT com controle de acesso por papel",
          ],
        },
        {
          company: "Document Search & Query Platform",
          role: "Full-Stack Developer",
          period: "DEZ 2022 - SET 2024",
          bullets: [
            "Migração de monólito legado para arquitetura de microservices",
            "Pipeline de indexação de documentos com consultas de baixa latência",
            "Serviços de busca em Java com APIs de alta performance",
          ],
        },
      ],
    },
    stack: {
      heading: "Stack",
      groups: [
        {
          name: "Backend",
          items: ["Node.js", "TypeScript", "JavaScript", "Express.js", "Java (Spring Boot)", "PHP (Laravel)", "Python"],
        },
        {
          name: "Frontend",
          items: ["React", "React Native", "Next.js", "Tailwind CSS", "HTML5/CSS"],
        },
        {
          name: "Bancos & cache",
          items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
        },
        {
          name: "Mensageria",
          items: ["RabbitMQ", "gRPC", "Webhooks", "Event-driven"],
        },
        {
          name: "Pagamentos & auth",
          items: ["Pix", "Stripe", "MercadoPago", "OAuth2", "JWT", "RBAC"],
        },
        {
          name: "Nuvem & DevOps",
          items: ["AWS (S3, EC2)", "Docker", "CI/CD", "GitHub Actions", "Linux", "Git"],
        },
      ],
    },
    about: {
      heading: "Sobre",
      body: "Engenheiro de software do Rio Grande do Sul, focado em backend e sistemas distribuídos, com range full-stack. Trabalho em todo o ciclo do produto: arquitetura, APIs, dados, infraestrutura em nuvem e deploy. Gosto da fronteira entre engenharia, produto e negócio: entender o problema por trás da feature e construir o que faz sentido tecnicamente e como produto.",
      facts: [
        { label: "Base", value: "Itatiba do Sul, RS, Brasil" },
        { label: "Formação", value: "Ciência da Computação, Universidade Regional Integrada (2024 - presente)" },
        { label: "Idiomas", value: "Português nativo, inglês profissional" },
        { label: "Foco", value: "APIs, sistemas distribuídos, mensageria, pagamentos" },
      ],
    },
    footer: {
      heading: "Vamos construir algo?",
      note: "Aberto a oportunidades remotas como backend ou full-stack engineer.",
      email: "eduardofabisiak@proton.me",
      socials: [
        { label: "GitHub", url: "https://github.com/Duuuuardo" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/eduardofabisiak" },
      ],
      copyright: "© 2026 Eduardo Fabisiak",
    },
  },
  en: {
    nav: {
      projects: "Projects",
      experience: "Experience",
      stack: "Stack",
      about: "About",
      contact: "Contact",
    },
    hero: {
      eyebrow: "EDUARDO FABISIAK · SOFTWARE ENGINEERING",
      title: "Software built to survive production.",
      subtitle:
        "For 4+ years I have been building APIs, queues, payments and distributed systems that customers use every day.",
      ctaPrimary: "View projects",
      ctaSecondary: "Get in touch",
    },
    projects: {
      heading: "Projects",
      intro:
        "Systems built end to end, from data modeling to deploy. All open source on GitHub.",
      items: [
        {
          name: "Naia",
          category: "SAAS · MESSAGING",
          description:
            "Bulk campaign dispatch platform for WhatsApp and Telegram, with 98%+ delivery rate, webhook processing, retries and monitoring. Ran in production serving real customers and is now open source.",
          stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Docker"],
          link: "https://github.com/Duuuuardo/Naia",
          linkLabel: "github.com/Duuuuardo/Naia",
          motif: "broadcast",
        },
        {
          name: "Vianova",
          category: "IDENTITY · BILLING",
          description:
            "Account, identity and billing hub: own OIDC provider with OAuth2 and 2FA, multi-workspace RBAC and Stripe subscriptions. Versioned, documented REST API. Ran in production and is now open source.",
          stack: ["Bun", "TypeScript", "Elysia", "Stripe", "PostgreSQL", "OIDC"],
          link: "https://github.com/Duuuuardo/Vianova",
          linkLabel: "github.com/Duuuuardo/Vianova",
          motif: "orbit",
        },
        {
          name: "Currículos",
          category: "AI · PRODUCTIVITY",
          description:
            "Rails app that generates resumes tailored to each job posting: extracts keywords from the description, scores the match and rewrites summary and bullets. Chat assistant, LinkedIn PDF import and multi-provider AI (Ollama, OpenAI, Anthropic, Gemini).",
          stack: ["Rails 8", "SQLite", "Hotwire", "Stimulus", "LLM"],
          link: "https://github.com/Duuuuardo/curriculos",
          linkLabel: "github.com/Duuuuardo/curriculos",
          motif: "flux",
        },
      ],
    },
    experience: {
      heading: "Experience",
      items: [
        {
          company: "Preço Local",
          role: "Software Engineer",
          period: "NOV 2025 - MAY 2026",
          bullets: [
            "REST API built from scratch in Node.js and TypeScript, with catalog, pricing, search and geolocation",
            "React Native mobile app published on Google Play and the App Store",
            "Distributed caching with Redis and CI/CD with Docker",
          ],
        },
        {
          company: "Sky Store",
          role: "Software Engineer",
          period: "JUN 2025 - NOV 2025",
          bullets: [
            "Backend services in Node.js with PostgreSQL, Redis and RabbitMQ for asynchronous processing",
            "Full-stack features on the e-commerce platform with React and JavaScript",
            "File storage on Amazon S3 and operations on Linux environments",
          ],
        },
        {
          company: "Rituais de Axé",
          role: "Software Engineer",
          period: "SEP 2024 - JUN 2025",
          bullets: [
            "Payment system with instant Pix flows and automatic enrollment after confirmation",
            "Asynchronous payment processing and Redis caching",
            "JWT authentication with role-based access control",
          ],
        },
        {
          company: "Document Search & Query Platform",
          role: "Full-Stack Developer",
          period: "DEC 2022 - SEP 2024",
          bullets: [
            "Migration of a legacy monolith into a microservices architecture",
            "Document indexing pipeline serving low-latency queries",
            "Search services in Java with high-performance APIs",
          ],
        },
      ],
    },
    stack: {
      heading: "Stack",
      groups: [
        {
          name: "Backend",
          items: ["Node.js", "TypeScript", "JavaScript", "Express.js", "Java (Spring Boot)", "PHP (Laravel)", "Python"],
        },
        {
          name: "Frontend",
          items: ["React", "React Native", "Next.js", "Tailwind CSS", "HTML5/CSS"],
        },
        {
          name: "Databases & cache",
          items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
        },
        {
          name: "Messaging",
          items: ["RabbitMQ", "gRPC", "Webhooks", "Event-driven"],
        },
        {
          name: "Payments & auth",
          items: ["Pix", "Stripe", "MercadoPago", "OAuth2", "JWT", "RBAC"],
        },
        {
          name: "Cloud & DevOps",
          items: ["AWS (S3, EC2)", "Docker", "CI/CD", "GitHub Actions", "Linux", "Git"],
        },
      ],
    },
    about: {
      heading: "About",
      body: "Software engineer from Rio Grande do Sul, Brazil, focused on backend and distributed systems with full-stack range. I work across the whole product lifecycle: architecture, APIs, data, cloud infrastructure and deploy. I like the border between engineering, product and business: understanding the problem behind the feature and building what makes sense technically and as a product.",
      facts: [
        { label: "Base", value: "Itatiba do Sul, RS, Brazil" },
        { label: "Education", value: "B.S. in Computer Science, Universidade Regional Integrada (2024 - present)" },
        { label: "Languages", value: "Native Portuguese, professional English" },
        { label: "Focus", value: "APIs, distributed systems, messaging, payments" },
      ],
    },
    footer: {
      heading: "Let's build something?",
      note: "Open to remote opportunities as a backend or full-stack engineer.",
      email: "eduardofabisiak@proton.me",
      socials: [
        { label: "GitHub", url: "https://github.com/Duuuuardo" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/eduardofabisiak" },
      ],
      copyright: "© 2026 Eduardo Fabisiak",
    },
  },
};
