export const content = {
  pt: {
    nav: {
      projects: "Projetos",
      experience: "Experiência",
      stack: "Stack",
      about: "Sobre",
      blog: "Blog",
      contact: "Contato",
    },
    hero: {
      command: "$ whoami",
      name: "Eduardo Fabisiak",
      role: "engenheiro de software backend e full-stack, do Rio Grande do Sul, Brasil.",
      facts: [
        { label: "cargo", value: "Engenheiro de Software Backend" },
        { label: "local", value: "Rio Grande do Sul, Brasil" },
        { label: "fuso", value: "America/Sao_Paulo" },
        { label: "experiência", value: "4+ anos" },
        { label: "idiomas", value: "Português (nativo), Inglês (profissional)" },
      ],
      links: [
        { label: "github", value: "github.com/duuuuardo", url: "https://github.com/Duuuuardo" },
        { label: "linkedin", value: "/in/eduardofabisiak", url: "https://www.linkedin.com/in/eduardofabisiak" },
        { label: "email", value: "eduardofabisiak@proton.me", url: "mailto:eduardofabisiak@proton.me" },
      ],
      ctaPrimary: "Ver projetos",
      ctaSecondary: "Falar comigo",
    },
    projects: {
      heading: "Projetos",
      intro:
        "Produtos próprios construídos de ponta a ponta, do modelo de dados ao deploy.",
      items: [
        {
          name: "Naia",
          category: "SAAS · MENSAGERIA",
          description:
            "Plataforma multitenant de campanhas em massa no WhatsApp e Telegram, com 98%+ de entregabilidade, ritmo de envio, webhooks, retry e acompanhamento em tempo real. Rodou em produção atendendo clientes reais e hoje é open source.",
          stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Docker"],
          link: "https://github.com/Duuuuardo/Naia",
          linkLabel: "github.com/Duuuuardo/Naia",
          motif: "broadcast",
        },
        {
          name: "Vianova",
          category: "IDENTIDADE · BILLING",
          description:
            "Hub de conta, identidade e cobrança da empresa que estou fundando: provedor OIDC próprio com OAuth2 e 2FA, RBAC multi-workspace e assinaturas Stripe. Todo produto novo já nasce sobre essa base. Rodou em produção e hoje é open source.",
          stack: ["Bun", "TypeScript", "Elysia", "Stripe", "PostgreSQL", "OIDC"],
          link: "https://github.com/Duuuuardo/Vianova",
          linkLabel: "github.com/Duuuuardo/Vianova",
          motif: "orbit",
        },
        {
          name: "Onda",
          category: "SELF-HOSTED · VOZ & CHAT",
          description:
            "Alternativa ao Discord em que a comunidade roda no servidor da própria pessoa: voz, vídeo, texto, histórico e moderação ficam 100% com quem hospeda, mesmo atrás de CGNAT. A Onda só guarda a identidade, que viaja entre servidores.",
          stack: [],
          link: "https://ondachat.app",
          linkLabel: "ondachat.app",
          motif: "field",
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
      oss: {
        heading: "Open source",
        intro: "Ferramentas que construí pra mim e publiquei pra qualquer um usar.",
        items: [
          {
            name: "AnonDrop",
            description:
              "Compartilhamento anônimo de arquivos, sem conta, com edição colaborativa de texto e código no navegador, histórico de versões e diff.",
            stack: ["Laravel", "Reverb", "Monaco", "SQLite"],
            link: "https://github.com/Duuuuardo/anondrop",
          },
          {
            name: "BananaGit",
            description:
              "GUI de Git pra desktop que troca os comandos por ações em português claro: status, branches, stash e diff colorido, sem abrir terminal.",
            stack: ["Kotlin", "Compose Desktop", "JGit"],
            link: "https://github.com/Duuuuardo/bananagit",
          },
          {
            name: "Singr",
            description:
              "Bot de música self-hosted pro Discord, tocando áudio do YouTube e outras fontes nos canais de voz por slash commands.",
            stack: ["Java", "JDA", "LavaPlayer"],
            link: "https://github.com/Duuuuardo/Singr",
          },
          {
            name: "CDN",
            description:
              "Backend de CDN mínimo: recebe, armazena e serve imagens e vídeos por API JSON, com chave de API e limites configuráveis.",
            stack: ["Laravel", "PHP"],
            link: "https://github.com/Duuuuardo/CDN",
          },
          {
            name: "url-shortener",
            description:
              "Encurtador de URL direto ao ponto: cola uma URL, gera um link curto.",
            stack: ["Laravel", "SQLite", "Tailwind CSS"],
            link: "https://github.com/Duuuuardo/url-shortener",
          },
        ],
      },
    },
    experience: {
      heading: "Experiência",
      items: [
        {
          company: "Preço Local",
          role: "Software Engineer",
          period: "NOV 2025 → MAI 2026",
          bullets: [
            "API REST do zero em Node.js/TypeScript para catálogos, preços e motores de busca",
            "Cache distribuído em Redis reduzindo a latência de buscas recorrentes",
            "Busca por geolocalização e cidade, com resultados ordenados por proximidade",
            "App mobile cross-platform em React Native com UI responsiva",
            "Serviços em Docker com CI/CD; publicado na Google Play e na App Store",
          ],
          tags: ["Node.js", "TypeScript", "React Native", "Redis", "PostgreSQL", "Docker", "Geolocation", "CI/CD"],
          links: [
            {
              label: "Google Play",
              url: "https://play.google.com/store/apps/details?id=com.anonymous.consultapreco",
            },
            {
              label: "App Store",
              url: "https://apps.apple.com/br/app/pre%C3%A7o-local/id6757374197",
            },
          ],
        },
        {
          company: "Sky Store",
          role: "Software Engineer",
          period: "JUN 2025 → NOV 2025",
          bullets: [
            "Serviços backend em Node.js e PostgreSQL para o e-commerce de produtos digitais",
            "Filas RabbitMQ e cache Redis para processamento assíncrono de alto volume",
            "Frontend da loja em React e armazenamento de arquivos em Amazon S3",
            "Scripts Lua e mecânicas de servidor FiveM conectados a APIs e serviços backend",
            "Painéis administrativos e ferramentas internas de gestão e operação",
          ],
          tags: ["Node.js", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS S3", "Lua", "FiveM", "Linux"],
          links: [
            { label: "SkyStore", url: "https://skystore.com.br" },
            { label: "Americanópolis", url: "https://americanopolisroleplay.com" },
          ],
        },
        {
          company: "Rituais de Axé",
          role: "Software Engineer",
          period: "SET 2024 → JUN 2025",
          bullets: [
            "Arquitetura de pagamentos com Pix instantâneo e matrícula automática na confirmação",
            "APIs REST em Node.js para fluxos de alunos e endpoints administrativos",
            "Jobs em background para status de pagamento e gatilhos de matrícula",
            "Autenticação JWT com RBAC protegendo conteúdo e dados de usuários",
            "Mídia em Amazon S3; ferramentas internas de gestão (ponto por foto, férias, automações)",
          ],
          tags: ["Node.js", "React", "Redis", "AWS S3", "JWT", "RBAC", "Pix", "PostgreSQL"],
          links: [
            { label: "Rituais de Axé", url: "https://rituaisdeaxes.com" },
          ],
        },
        {
          company: "Plataforma de Consultas e Buscas Documentais",
          role: "Full-Stack Developer",
          period: "DEZ 2022 → SET 2024",
          bullets: [
            "Serviços de busca em Java com APIs de baixa latência para consultas complexas",
            "Decomposição do monólito legado em microservices independentes",
            "Pipelines de indexação de alto volume e mensageria assíncrona com RabbitMQ",
            "Cache Redis distribuído e otimização de queries PostgreSQL sob carga",
            "Modernização Java/PHP → Laravel, testes automatizados e pipelines CI/CD",
          ],
          tags: ["Java", "PostgreSQL", "Redis", "RabbitMQ", "Microservices", "PHP", "Laravel", "CI/CD"],
          links: [],
        },
      ],
    },
    stack: {
      heading: "Stack",
      groups: [
        {
          name: "Linguagens",
          items: ["JavaScript", "TypeScript", "Java", "Python", "PHP", "Ruby", "Kotlin", "Lua"],
        },
        {
          name: "Frameworks & libs",
          items: ["Node.js", "Express.js", "Spring Boot", "Laravel", "Rails", "React", "Next.js", "React Native", "Bun", "Elysia", "Tailwind CSS"],
        },
        {
          name: "Dados & mensageria",
          items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite", "Firestore", "RabbitMQ", "Kafka", "BullMQ"],
        },
        {
          name: "IA",
          items: ["Claude Code", "Devin", "Prompt Engineering", "OpenDesign"],
        },
        {
          name: "Infra & DevOps",
          items: ["AWS", "Docker", "Linux (Arch)", "GitHub Actions", "Proxmox", "Nginx", "Apache", "Git", "CI/CD"],
        },
        {
          name: "Práticas & protocolos",
          items: ["REST APIs", "GraphQL", "gRPC", "WebSocket", "JWT", "OIDC", "Microservices", "Metodologias ágeis"],
        },
      ],
    },
    about: {
      heading: "Sobre",
      body: "Engenheiro de software do Rio Grande do Sul, focado em backend e sistemas distribuídos, com range full-stack. Trabalho em todo o ciclo do produto: arquitetura, APIs, dados, infraestrutura em nuvem e deploy. Gosto da fronteira entre engenharia, produto e negócio: entender o problema por trás da feature e construir o que faz sentido tecnicamente e como produto.",
      facts: [
        { label: "Base", value: "Rio Grande do Sul, Brasil" },
        { label: "Formação", value: "Ciência da Computação, Universidade Regional Integrada (2024 - 2027)" },
        { label: "Idiomas", value: "Português nativo, inglês profissional" },
        { label: "Foco", value: "APIs, sistemas distribuídos, mensageria, pagamentos" },
      ],
    },
    blog: {
      heading: "Blog",
      intro: "O que eu construo, aprendo e quebro no caminho.",
      readMore: "Ler post",
      ptOnly: "post em pt-BR",
      backToBlog: "Voltar pro blog",
    },
    footer: {
      heading: "Vamos construir algo?",
      note: "Aberto a oportunidades remotas ou com relocation como backend ou full-stack engineer.",
      email: "eduardofabisiak@proton.me",
      socials: [
        { label: "GitHub", url: "https://github.com/Duuuuardo" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/eduardofabisiak" },
      ],
      copyright: '$ echo "© 2026 Eduardo Fabisiak"',
    },
  },
  en: {
    nav: {
      projects: "Projects",
      experience: "Experience",
      stack: "Stack",
      about: "About",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      command: "$ whoami",
      name: "Eduardo Fabisiak",
      role: "backend and full-stack software engineer, from Rio Grande do Sul, Brazil.",
      facts: [
        { label: "role", value: "Backend Software Engineer" },
        { label: "location", value: "Rio Grande do Sul, Brazil" },
        { label: "timezone", value: "America/Sao_Paulo" },
        { label: "experience", value: "4+ years" },
        { label: "languages", value: "Portuguese (native), English (professional)" },
      ],
      links: [
        { label: "github", value: "github.com/duuuuardo", url: "https://github.com/Duuuuardo" },
        { label: "linkedin", value: "/in/eduardofabisiak", url: "https://www.linkedin.com/in/eduardofabisiak" },
        { label: "email", value: "eduardofabisiak@proton.me", url: "mailto:eduardofabisiak@proton.me" },
      ],
      ctaPrimary: "View projects",
      ctaSecondary: "Get in touch",
    },
    projects: {
      heading: "Projects",
      intro: "Own products built end to end, from data modeling to deploy.",
      items: [
        {
          name: "Naia",
          category: "SAAS · MESSAGING",
          description:
            "Multitenant bulk campaign platform for WhatsApp and Telegram, with 98%+ delivery rate, send pacing, webhooks, retries and real-time tracking. Ran in production serving real customers and is now open source.",
          stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Docker"],
          link: "https://github.com/Duuuuardo/Naia",
          linkLabel: "github.com/Duuuuardo/Naia",
          motif: "broadcast",
        },
        {
          name: "Vianova",
          category: "IDENTITY · BILLING",
          description:
            "Account, identity and billing hub for the company I'm founding: own OIDC provider with OAuth2 and 2FA, multi-workspace RBAC and Stripe subscriptions. Every new product starts on top of this base. Ran in production and is now open source.",
          stack: ["Bun", "TypeScript", "Elysia", "Stripe", "PostgreSQL", "OIDC"],
          link: "https://github.com/Duuuuardo/Vianova",
          linkLabel: "github.com/Duuuuardo/Vianova",
          motif: "orbit",
        },
        {
          name: "Onda",
          category: "SELF-HOSTED · VOICE & CHAT",
          description:
            "A Discord alternative where the community runs on the host's own server: voice, video, text, history and moderation stay entirely with the host, even behind CGNAT. Onda only holds the identity, which travels across servers.",
          stack: [],
          link: "https://ondachat.app",
          linkLabel: "ondachat.app",
          motif: "field",
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
      oss: {
        heading: "Open source",
        intro: "Tools I built for myself and published for anyone to use.",
        items: [
          {
            name: "AnonDrop",
            description:
              "Anonymous file sharing with no account, plus real-time collaborative text and code editing in the browser, version history and diffs.",
            stack: ["Laravel", "Reverb", "Monaco", "SQLite"],
            link: "https://github.com/Duuuuardo/anondrop",
          },
          {
            name: "BananaGit",
            description:
              "A desktop Git GUI that swaps commands for plain-language actions: status, branches, stash and colored diff, no terminal needed.",
            stack: ["Kotlin", "Compose Desktop", "JGit"],
            link: "https://github.com/Duuuuardo/bananagit",
          },
          {
            name: "Singr",
            description:
              "Self-hosted Discord music bot, streaming audio from YouTube and other sources into voice channels via slash commands.",
            stack: ["Java", "JDA", "LavaPlayer"],
            link: "https://github.com/Duuuuardo/Singr",
          },
          {
            name: "CDN",
            description:
              "Minimal CDN backend: receives, stores and serves images and videos over a JSON API, with API key auth and configurable limits.",
            stack: ["Laravel", "PHP"],
            link: "https://github.com/Duuuuardo/CDN",
          },
          {
            name: "url-shortener",
            description:
              "Straight-to-the-point URL shortener: paste a URL, get a short link.",
            stack: ["Laravel", "SQLite", "Tailwind CSS"],
            link: "https://github.com/Duuuuardo/url-shortener",
          },
        ],
      },
    },
    experience: {
      heading: "Experience",
      items: [
        {
          company: "Preço Local",
          role: "Software Engineer",
          period: "NOV 2025 → MAY 2026",
          bullets: [
            "REST API from scratch in Node.js/TypeScript for catalogs, pricing and search engines",
            "Distributed Redis caching cutting latency on recurring searches",
            "Geolocation and city-based search with results ordered by proximity",
            "Cross-platform React Native mobile app with responsive UI",
            "Dockerized services with CI/CD; published on Google Play and the App Store",
          ],
          tags: ["Node.js", "TypeScript", "React Native", "Redis", "PostgreSQL", "Docker", "Geolocation", "CI/CD"],
          links: [
            {
              label: "Google Play",
              url: "https://play.google.com/store/apps/details?id=com.anonymous.consultapreco",
            },
            {
              label: "App Store",
              url: "https://apps.apple.com/br/app/pre%C3%A7o-local/id6757374197",
            },
          ],
        },
        {
          company: "Sky Store",
          role: "Software Engineer",
          period: "JUN 2025 → NOV 2025",
          bullets: [
            "Node.js and PostgreSQL backend services for the digital products e-commerce",
            "RabbitMQ queues and Redis caching for high-throughput async processing",
            "React storefront frontend and Amazon S3 file storage",
            "Lua scripts and FiveM server mechanics connected to APIs and backend services",
            "Admin panels and internal tools for user management and operations",
          ],
          tags: ["Node.js", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS S3", "Lua", "FiveM", "Linux"],
          links: [
            { label: "SkyStore", url: "https://skystore.com.br" },
            { label: "Americanópolis", url: "https://americanopolisroleplay.com" },
          ],
        },
        {
          company: "Rituais de Axé",
          role: "Software Engineer",
          period: "SEP 2024 → JUN 2025",
          bullets: [
            "Payment architecture with instant Pix and automated enrollment on confirmation",
            "Node.js REST APIs for student workflows and administrative endpoints",
            "Background jobs for payment status checks and enrollment triggers",
            "JWT authentication with RBAC protecting course content and user data",
            "Course media on Amazon S3; internal tools (photo time-tracking, vacations, automations)",
          ],
          tags: ["Node.js", "React", "Redis", "AWS S3", "JWT", "RBAC", "Pix", "PostgreSQL"],
          links: [
            { label: "Rituais de Axé", url: "https://rituaisdeaxes.com" },
          ],
        },
        {
          company: "Document Search & Query Platform",
          role: "Full-Stack Developer",
          period: "DEC 2022 → SEP 2024",
          bullets: [
            "Search services in Java with low-latency APIs for complex document queries",
            "Decomposition of the legacy monolith into independent microservices",
            "High-volume indexing pipelines and async messaging with RabbitMQ",
            "Distributed Redis caching and PostgreSQL query tuning under load",
            "Java/PHP → Laravel modernization, automated test suites and CI/CD pipelines",
          ],
          tags: ["Java", "PostgreSQL", "Redis", "RabbitMQ", "Microservices", "PHP", "Laravel", "CI/CD"],
          links: [],
        },
      ],
    },
    stack: {
      heading: "Stack",
      groups: [
        {
          name: "Languages",
          items: ["JavaScript", "TypeScript", "Java", "Python", "PHP", "Ruby", "Kotlin", "Lua"],
        },
        {
          name: "Frameworks & libs",
          items: ["Node.js", "Express.js", "Spring Boot", "Laravel", "Rails", "React", "Next.js", "React Native", "Bun", "Elysia", "Tailwind CSS"],
        },
        {
          name: "Data & messaging",
          items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite", "Firestore", "RabbitMQ", "Kafka", "BullMQ"],
        },
        {
          name: "AI",
          items: ["Claude Code", "Devin", "Prompt Engineering", "OpenDesign"],
        },
        {
          name: "Infra & DevOps",
          items: ["AWS", "Docker", "Linux (Arch)", "GitHub Actions", "Proxmox", "Nginx", "Apache", "Git", "CI/CD"],
        },
        {
          name: "Practices & protocols",
          items: ["REST APIs", "GraphQL", "gRPC", "WebSocket", "JWT", "OIDC", "Microservices", "Agile methodologies"],
        },
      ],
    },
    about: {
      heading: "About",
      body: "Software engineer from Rio Grande do Sul, Brazil, focused on backend and distributed systems with full-stack range. I work across the whole product lifecycle: architecture, APIs, data, cloud infrastructure and deploy. I like the border between engineering, product and business: understanding the problem behind the feature and building what makes sense technically and as a product.",
      facts: [
        { label: "Base", value: "Rio Grande do Sul, Brazil" },
        { label: "Education", value: "B.S. in Computer Science, Universidade Regional Integrada (2024 - 2027)" },
        { label: "Languages", value: "Native Portuguese, professional English" },
        { label: "Focus", value: "APIs, distributed systems, messaging, payments" },
      ],
    },
    blog: {
      heading: "Blog",
      intro: "What I build, learn and break along the way.",
      readMore: "Read post",
      ptOnly: "post in pt-BR",
      backToBlog: "Back to blog",
    },
    footer: {
      heading: "Let's build something?",
      note: "Open to remote or relocation opportunities as a backend or full-stack engineer.",
      email: "eduardofabisiak@proton.me",
      socials: [
        { label: "GitHub", url: "https://github.com/Duuuuardo" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/eduardofabisiak" },
      ],
      copyright: '$ echo "© 2026 Eduardo Fabisiak"',
    },
  },
};
