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
      windowTitle: "eduardo@fabisiak.dev - zsh",
      facts: [
        { label: "cargo", value: "Engenheiro de Software Backend" },
        { label: "local", value: "Itatiba do Sul, RS" },
        { label: "fuso", value: "America/Sao_Paulo" },
        { label: "experiência", value: "4 anos" },
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
            "App mobile de comparação de preços por cidade e a API backend que o alimenta",
            "API REST com cache Redis para busca em tempo real por cidade e geolocalização",
            "Publicado na Google Play e na App Store, funcionando em produção",
          ],
          tags: ["React Native", "Node.js", "Redis", "REST APIs"],
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
          company: "Produtos digitais & E-commerce",
          role: "Software Engineer",
          period: "DEZ 2024 → NOV 2025",
          bullets: [
            "E-commerce de produtos digitais com pagamentos automatizados, reduzindo a entrega de minutos para segundos",
            "Plataforma de cursos com Pix, matrículas assíncronas e acesso por JWT",
            "Servidor de roleplay completo: gestão, painel admin, controle de acesso e automações",
          ],
          tags: ["Node.js", "TypeScript", "Laravel", "PostgreSQL", "Redis", "Pix", "MercadoPago"],
          links: [
            { label: "SkyStore", url: "https://skystore.com.br" },
            { label: "Rituais de Axés", url: "https://rituaisdeaxes.com" },
            { label: "Americanópolis", url: "https://americanopolisroleplay.com" },
          ],
        },
        {
          company: "Plataforma de Consultas e Buscas Documentais",
          role: "Full-Stack Developer",
          period: "DEZ 2022 → SET 2024",
          bullets: [
            "Motor de busca em Java e Spring Boot, reduzindo consultas complexas em ~40%",
            "Pipeline de indexação para busca em tempo real com latência subsegundo",
            "Migração do monólito para microservices e dos legados Java/PHP para Laravel",
          ],
          tags: ["Java", "Spring Boot", "PHP", "Laravel", "PostgreSQL"],
          links: [],
        },
      ],
    },
    stack: {
      heading: "Stack",
      groups: [
        {
          name: "Linguagens",
          items: ["JavaScript", "TypeScript", "PHP", "Java", "Kotlin", "Lua"],
        },
        {
          name: "Frameworks & libs",
          items: ["Node.js", "Express.js", "Laravel", "Spring", "React", "Next.js", "React Native", "Tailwind CSS"],
        },
        {
          name: "Bancos de dados",
          items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
        },
        {
          name: "Pagamentos",
          items: ["Pix", "Stripe", "MercadoPago", "PicPay"],
        },
        {
          name: "Infra & DevOps",
          items: ["Linux (Arch)", "Docker", "Proxmox", "Nginx", "Apache", "Git", "CI/CD"],
        },
        {
          name: "Práticas & protocolos",
          items: ["REST APIs", "WebSocket", "JWT", "SSO", "Metodologias ágeis"],
        },
      ],
    },
    about: {
      heading: "Sobre",
      body: "Engenheiro de software do Rio Grande do Sul, focado em backend e sistemas distribuídos, com range full-stack. Trabalho em todo o ciclo do produto: arquitetura, APIs, dados, infraestrutura em nuvem e deploy. Gosto da fronteira entre engenharia, produto e negócio: entender o problema por trás da feature e construir o que faz sentido tecnicamente e como produto.",
      facts: [
        { label: "Base", value: "Itatiba do Sul, RS, Brasil · remoto" },
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
      note: "Aberto a oportunidades remotas como backend ou full-stack engineer.",
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
      windowTitle: "eduardo@fabisiak.dev - zsh",
      facts: [
        { label: "role", value: "Backend Software Engineer" },
        { label: "location", value: "Itatiba do Sul, RS" },
        { label: "timezone", value: "America/Sao_Paulo" },
        { label: "experience", value: "4 years" },
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
            "Price comparison mobile app and the backend API powering it",
            "REST API with Redis cache for real-time search by city and geolocation",
            "Published on Google Play and the App Store, running in production",
          ],
          tags: ["React Native", "Node.js", "Redis", "REST APIs"],
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
          company: "Digital products & E-commerce",
          role: "Software Engineer",
          period: "DEC 2024 → NOV 2025",
          bullets: [
            "Digital products e-commerce with automated payments, cutting delivery from minutes to seconds",
            "Online courses platform with Pix payments, async enrollment and JWT access control",
            "Complete roleplay server: management system, admin panel, access control and automations",
          ],
          tags: ["Node.js", "TypeScript", "Laravel", "PostgreSQL", "Redis", "Pix", "MercadoPago"],
          links: [
            { label: "SkyStore", url: "https://skystore.com.br" },
            { label: "Rituais de Axés", url: "https://rituaisdeaxes.com" },
            { label: "Americanópolis", url: "https://americanopolisroleplay.com" },
          ],
        },
        {
          company: "Document Search & Query Platform",
          role: "Full-Stack Developer",
          period: "DEC 2022 → SEP 2024",
          bullets: [
            "Search engine in Java and Spring Boot, cutting complex query time by ~40%",
            "Document indexing pipeline for real-time search with sub-second latency",
            "Migration of the monolith to microservices and the Java/PHP legacy to Laravel",
          ],
          tags: ["Java", "Spring Boot", "PHP", "Laravel", "PostgreSQL"],
          links: [],
        },
      ],
    },
    stack: {
      heading: "Stack",
      groups: [
        {
          name: "Languages",
          items: ["JavaScript", "TypeScript", "PHP", "Java", "Kotlin", "Lua"],
        },
        {
          name: "Frameworks & libs",
          items: ["Node.js", "Express.js", "Laravel", "Spring", "React", "Next.js", "React Native", "Tailwind CSS"],
        },
        {
          name: "Databases",
          items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
        },
        {
          name: "Payments",
          items: ["Pix", "Stripe", "MercadoPago", "PicPay"],
        },
        {
          name: "Infra & DevOps",
          items: ["Linux (Arch)", "Docker", "Proxmox", "Nginx", "Apache", "Git", "CI/CD"],
        },
        {
          name: "Practices & protocols",
          items: ["REST APIs", "WebSocket", "JWT", "SSO", "Agile methodologies"],
        },
      ],
    },
    about: {
      heading: "About",
      body: "Software engineer from Rio Grande do Sul, Brazil, focused on backend and distributed systems with full-stack range. I work across the whole product lifecycle: architecture, APIs, data, cloud infrastructure and deploy. I like the border between engineering, product and business: understanding the problem behind the feature and building what makes sense technically and as a product.",
      facts: [
        { label: "Base", value: "Itatiba do Sul, RS, Brazil · remote" },
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
      note: "Open to remote opportunities as a backend or full-stack engineer.",
      email: "eduardofabisiak@proton.me",
      socials: [
        { label: "GitHub", url: "https://github.com/Duuuuardo" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/eduardofabisiak" },
      ],
      copyright: '$ echo "© 2026 Eduardo Fabisiak"',
    },
  },
};
