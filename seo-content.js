// Shared SEO content for product pages — the single source for:
//   - index.html: the H1 tagline, the visible FAQ section, and FAQPage/SoftwareApplication structured data
//   - middleware.js: the full HTML page served to search bots (which never see the React app)
// Keep it in step with each page's visible copy so bots and people get the same page.
// Classic script (no import/export): the browser loads it with a plain <script> tag, and
// middleware.js imports it for its side effect.
// NYX is proprietary: its entries stay customer-facing only, never implementation details.

globalThis.HERMEIAS_SEO = {
  nyx: {
    name: "NYX",
    tagline: "Self-Hosted Monero (XMR) Payment Gateway",
    faqLabel: "MONERO GATEWAY",
    app: {
      applicationCategory: "FinanceApplication",
      operatingSystem: "Linux, Docker",
      offers: [
        { "@type": "Offer", name: "Lifetime", price: "500", priceCurrency: "USD", description: "One-time lifetime license with support, plus a 1% fee per transaction." },
        { "@type": "Offer", name: "Starter", price: "200", priceCurrency: "USD", description: "One-time license plus a 5% fee per transaction." },
      ],
    },
    links: [{ label: "Request a license", href: "mailto:suryansh@hermeias.org?subject=NYX%20license%20inquiry" }],
    sections: [
      {
        paragraphs: [
          "Accept Monero payments straight into your own wallet, on a Tor .onion store or a clearnet shop, with no payment processor in between. A non-custodial XMR gateway for privacy-first merchants. Full custody. Zero counterparty risk.",
          "Payments in the dark.",
        ],
      },
      {
        heading: "Built for merchants",
        items: [
          "Tor merchants: run checkout right next to your .onion store. No clearnet payment processor in the loop, no third party holding your funds.",
          "Privacy-first brands: offer customers a payment option that does not hand their identity or purchase history to a card network.",
          "VPN and VPS providers: your customers already prefer Monero. Take it natively instead of routing them through an exchange.",
          "SaaS platforms: drop-in REST API and webhooks. Create an invoice, get a callback when it is paid, fulfil the order.",
        ],
      },
      {
        heading: "Why self-host your XMR gateway",
        paragraphs: ["A hosted crypto payment processor sits between you and your money. A self-hosted Monero payment gateway takes it out of the picture."],
        items: [
          "Funds go straight to you: customers pay directly into your Monero wallet. There is no custodian holding your balance and nothing to withdraw.",
          "No account to freeze: a hosted crypto processor can freeze, review or close your account. A self-hosted XMR gateway has no one in the middle to do that.",
          "Your sales data stays yours: orders, amounts and customer activity live on your server, not in a payment processor's database.",
          "No chargebacks: Monero payments are final once confirmed, so there are no card-style chargebacks or payment reversals.",
        ],
      },
      {
        heading: "How NYX accepts Monero payments",
        ordered: true,
        items: [
          "Create invoice: your store creates an invoice for the order through NYX.",
          "Unique subaddress: NYX generates a fresh Monero subaddress for that order, so payments never mix.",
          "Customer pays: the buyer sends XMR from any Monero wallet, straight to your wallet.",
          "Watch the chain: NYX watches your wallet and picks up the payment as soon as it arrives.",
          "Confirm: after 10 confirmations (about 20 minutes) the invoice is marked paid.",
          "Webhook and fulfil: NYX notifies your server that the order is paid, and you deliver.",
        ],
      },
      {
        heading: "Key features",
        items: [
          "Full custody: payments land in a wallet you control. NYX never holds your funds.",
          "Privacy by default: Monero's ring signatures and stealth addresses keep payer, payee and amount off the public record.",
          "Per-order subaddresses: every invoice gets its own subaddress, so reconciling orders is exact.",
          "Real-time monitoring: incoming payments are detected automatically and tracked to confirmation.",
          "Developer API: a documented REST API, with full reference docs provided to every licensee.",
          "Webhooks: payment events are pushed straight to your server, so paid orders can fulfil themselves.",
          "Enterprise support: SLA-backed uptime, priority support and custom features.",
          "Self-hosted or hosted: run it on your own hardware, or let us host a dedicated instance for you.",
        ],
      },
      {
        heading: "Pricing",
        paragraphs: ["One-time license plus a per-transaction fee on every plan."],
        items: [
          "Starter: $200 one-time, 5% per transaction.",
          "Lifetime: $500 one-time with support included, 1% per transaction.",
          "Enterprise: custom pricing, dedicated infrastructure, 99.9% uptime SLA.",
          "White-Label: custom pricing, resell NYX under your own brand.",
        ],
      },
    ],
    faq: [
      { q: "What is a self-hosted Monero payment gateway?", a: "It is software you run on your own server that creates Monero (XMR) invoices for your store and detects when they are paid. Because you host it, customers pay straight into your own wallet: no payment processor holds your money or sees your sales. NYX is a self-hosted XMR payment gateway built for exactly this." },
      { q: "Does NYX ever hold my funds?", a: "No. Every payment goes directly to a Monero wallet you control. NYX only watches for incoming payments and tells your store when an order is paid, so there is no custodian and no counterparty risk." },
      { q: "Can I accept Monero on a Tor .onion store?", a: "Yes. NYX was built for Tor merchants. You run it on your own infrastructure alongside your hidden service, so checkout never depends on a clearnet payment processor. It works just as well for clearnet shops." },
      { q: "How long does a Monero payment take to confirm?", a: "NYX picks up a payment as soon as it reaches your wallet and marks the invoice paid after 10 confirmations, about 20 minutes on the Monero network." },
      { q: "Do I need to run my own Monero node?", a: "On a self-hosted license you provide the server, a Monero node and a wallet, which keeps the whole payment path under your control. If you would rather not run infrastructure, ask us about a hosted instance." },
      { q: "How much does NYX cost?", a: "There are two one-time licenses: Starter is $200 plus a 5% fee per transaction, and Lifetime is $500 with support included plus a 1% fee per transaction. Enterprise and white-label licenses are quoted individually." },
      { q: "How is NYX different from BTCPay Server?", a: "BTCPay Server is a free, open-source, Bitcoin-first processor that adds Monero through a plugin. NYX is Monero-only, built around Tor and privacy-first merchants, and comes with a commercial license and support." },
      { q: "Is NYX open source?", a: "No. NYX is proprietary, commercially licensed software and its source code is not published." },
    ],
  },

  torvault: {
    name: "TorVault",
    tagline: "Self-Hosted Tor Hidden Service Panel",
    faqLabel: "TORVAULT",
    app: {
      applicationCategory: "SecurityApplication",
      operatingSystem: "Linux, Docker",
      codeRepository: "https://github.com/0x3k3h/TORVAULT",
      license: "https://www.gnu.org/licenses/agpl-3.0.en.html",
      free: true,
    },
    links: [{ label: "TorVault on GitHub", href: "https://github.com/0x3k3h/TORVAULT" }],
    sections: [
      {
        paragraphs: ["A self-hosted web panel for running Tor onion services. Share files, receive files, host a website, or run chat rooms, each as its own .onion address, managed from one interface on your own server."],
      },
      {
        heading: "What you can host",
        items: [
          "Sites: serve a static or dynamic website to the Tor network. Your own hidden service, no clearnet exposure required.",
          "Chatrooms: run chat rooms reachable only over Tor. Conversation stays inside the onion, end to end.",
          "File sharing: publish files behind a .onion address. Share links that resolve nowhere but the Tor network.",
          "File receiving: accept uploads from anyone with the address. A drop box that never touches the open internet.",
        ],
      },
      {
        heading: "Key features",
        items: [
          "Multi-tenant hosting: run many onion services side by side on a single VPS, each with its own address and its own settings.",
          "Persistent identities: onion keys survive restarts. Your .onion address stays the same across reboots and redeploys.",
          "Vanity addresses: built-in generator to mine .onion addresses that start with a prefix you choose.",
          "V3 client auth: lock a service to holders of a key. Without the credential the address does not resolve at all.",
          "Bridges support: ships with obfs4proxy for reaching the network from places where Tor itself is filtered.",
          "Circuit inspector: see the live circuits your services are running on, straight from the panel.",
          "Mirrored swarm: serve the same content from multiple onion addresses at once for redundancy.",
          "Onion-only egress: opt-in guard that keeps traffic from leaving the Tor network behind your back.",
          "Webhooks and audit log: fire events to your own endpoints and keep a record of every action taken on the panel.",
        ],
      },
      {
        heading: "Three control surfaces",
        paragraphs: ["The same vault, driven three different ways."],
        items: [
          "Web panel: the admin interface, protected by HTTP Basic Auth. Create services, watch circuits, manage everything from a browser.",
          "CLI: manage sessions and read the dashboard without leaving the terminal. Scriptable, SSH-friendly.",
          "REST API: Bearer-token authenticated endpoints for automating the whole panel from your own tooling.",
        ],
      },
      {
        heading: "Tech stack",
        items: [
          "Python + Flask, SQLite, Tor control port or embedded Tor, Bearer tokens + Basic Auth.",
          "Runs on any VM or cloud VPS, or as a Docker image with tor + obfs4proxy. Bridges for filtered networks.",
          "Licensed under the GNU AGPL-3.0.",
        ],
      },
      {
        heading: "Security notes",
        items: [
          "TorVault is an active development project. It has not been independently audited, and is not hardened for high-stakes use.",
          "Set a strong admin password before you expose the panel to anything.",
          "Prefer v3 client authorization over Basic Auth where the threat model calls for it.",
          "The onion-only egress guard is opt-in. It is not on by default.",
        ],
      },
      {
        heading: "Licensing",
        paragraphs: ["Released under the GNU AGPL-3.0. Free to run, study, modify and redistribute. Commercial licensing is available separately through HERMEiAS."],
      },
    ],
    faq: [
      { q: "What is TorVault?", a: "TorVault is a free, open-source web panel for running Tor onion services on your own server. You can host websites, chatrooms, file sharing and file receiving, each on its own .onion address, all from one interface." },
      { q: "How do I host a .onion website with TorVault?", a: "Deploy TorVault on any VM or cloud VPS, either with Python or with the Docker image that bundles Tor and obfs4proxy, then create a site in the web panel. It gets its own .onion address, and that address stays the same across restarts and redeploys." },
      { q: "Can I run multiple onion services on one server?", a: "Yes. TorVault is multi-tenant: you can run many onion services side by side on a single VPS, each with its own address and its own settings." },
      { q: "Can TorVault generate vanity .onion addresses?", a: "Yes. It has a built-in generator that mines .onion addresses starting with a prefix you choose." },
      { q: "How do I make an onion service private?", a: "Use v3 client authorization. Only holders of the key can reach the service; without the credential the address does not resolve at all." },
      { q: "Is TorVault free?", a: "Yes. TorVault is released under the GNU AGPL-3.0, so it is free to run, study, modify and redistribute. Commercial licensing is available separately through HERMEiAS." },
      { q: "Is TorVault ready for high-stakes use?", a: "Not yet. TorVault is in active development and has not been independently audited. If you need a hardened production onion service, HERMEiAS also builds and self-hosts Tor projects through its .onion hosting consulting." },
    ],
  },

  klickmail: {
    name: "Klick Mail",
    tagline: "Free Bulk Email Client & Mass Mailer",
    faqLabel: "KLICK MAIL",
    app: {
      applicationCategory: "EmailApplication",
      operatingSystem: "Web",
      free: true,
    },
    sections: [
      {
        paragraphs: ["A custom email client specifically made for mailing. Streamlined, free, and focused on what matters: your messages."],
      },
      {
        heading: "The client",
        items: [
          "HTML composition: send custom emails with your own HTML templates. Create rich, branded email content with full HTML support.",
          "Contacts list: manage and organize your contacts efficiently for seamless mailing workflows.",
          "Mass mailing: send emails to multiple recipients simultaneously with powerful bulk sending features.",
        ],
      },
      {
        heading: "Technical specs",
        items: [
          "Type: custom email client. Pricing: free. Focus: mailing and communication.",
          "HTML composition with custom HTML email templates, a built-in contact list, and bulk email sending.",
          "Protocol support: IMAP, SMTP, POP3. Security: TLS/SSL for all connections.",
          "Privacy: no tracking, no ads, no data mining.",
        ],
      },
    ],
    faq: [
      { q: "What is Klick Mail?", a: "Klick Mail is a custom email client built specifically for mailing: compose HTML emails, manage your contacts, and send to many recipients at once." },
      { q: "Can I send my own HTML email templates?", a: "Yes. Klick Mail has full HTML support, so you can send rich, branded emails built from your own HTML templates." },
      { q: "Does Klick Mail support mass mailing?", a: "Yes. It sends to multiple recipients simultaneously, with a built-in contact list to organize who you are mailing." },
      { q: "Which email protocols does Klick Mail support?", a: "IMAP, SMTP and POP3, with TLS/SSL on every connection." },
      { q: "Is Klick Mail free?", a: "Yes. Klick Mail is free, with no tracking, no ads and no data mining." },
    ],
  },

  darium: {
    name: "Darium",
    tagline: "Self-Hosted CDN & Cloud Storage Panel",
    faqLabel: "DARIUM",
    app: {
      applicationCategory: "HostingApplication",
      operatingSystem: "Web",
      free: true,
    },
    sections: [
      {
        paragraphs: ["A free, self-deployable and self-hosted CDN + Cloud panel. The dunes leave no prints."],
      },
      {
        heading: "The platform",
        items: [
          "Web GUI: an easy-to-use interface for non-technical users, with drag-and-drop file uploads, file management and one-click URL copying.",
          "Self-deployable: deploy on your own infrastructure. Full control over your data and files, no vendor lock-in, no external dependencies.",
          "Tunnel-ready: works with Pinggy.io and other tunneling services. Connect your custom domain or subdomain.",
          "Intelligent caching: automatic cache headers. Static assets cached for 1 year, downloads for 1 hour.",
          "Secure authentication: password-protected admin interface with PIN recovery and session-based authentication with secure password hashing.",
          "File explorer: browse files in a directory structure with breadcrumbs. Preview images, play video and audio directly in the browser.",
          "Statistics and logging: track visits, downloads and access patterns. Monitor top countries, browsers, devices and access logs.",
          "Storage limits: configure storage and bandwidth restrictions, with per-IP limits over 24-hour windows.",
          "Compression and CORS: automatic Gzip compression, CORS for cross-origin requests, and a health check endpoint.",
        ],
      },
      {
        heading: "Features overview",
        items: [
          "Status: available now, free for personal use. License: Personal & Hobby Use (free). Commercial use via a commercial license.",
          "Deployment: self-hosted, self-deployable. Requirements: Node.js 18.0.0+ and npm.",
          "Tunnel support: Pinggy.io and custom domains. Storage: configurable limits (default 10 GB).",
          "File types: images, CSS, JS, fonts, archives and documents.",
        ],
      },
    ],
    faq: [
      { q: "What is Darium?", a: "Darium is a free, self-deployable and self-hosted CDN and cloud storage panel. You run it on your own infrastructure and serve files from it, with full control over your data and no vendor lock-in." },
      { q: "Is Darium free?", a: "Darium is free for personal and hobby use under its Personal & Hobby Use License. Commercial use is available through a commercial license from HERMEiAS." },
      { q: "What do I need to run Darium?", a: "Node.js 18.0.0 or newer and npm, on a server you control." },
      { q: "Can I use my own domain with Darium?", a: "Yes. Darium works with Pinggy.io and other tunneling services, so you can connect a custom domain or subdomain." },
      { q: "What files can Darium serve?", a: "Images, CSS, JS, fonts, archives and documents. It sets smart cache headers automatically (1 year for static assets, 1 hour for downloads) and compresses responses with Gzip." },
      { q: "Can I limit storage and bandwidth?", a: "Yes. Storage limits are configurable (10 GB by default), and bandwidth can be limited per IP over 24-hour windows." },
    ],
  },

  koinos: {
    name: "Koinos",
    tagline: "Open-Source Peer-to-Peer Marketplace",
    faqLabel: "KOINOS",
    app: {
      applicationCategory: "MarketplaceApplication",
      operatingSystem: "Web",
      codeRepository: "https://github.com/hermeias-org/Koinos",
      license: "https://opensource.org/licenses/MIT",
      free: true,
    },
    links: [{ label: "Koinos on GitHub", href: "https://github.com/hermeias-org/Koinos" }],
    sections: [
      {
        paragraphs: ["An open-source, full-stack peer-to-peer marketplace application designed to be easily redeployed and customized by anyone who wants to run their own marketplace platform."],
      },
      {
        heading: "The story",
        paragraphs: [
          "Koinos is an open marketplace inspired by a Greek island where pirates, mercenaries and kingdoms used to trade without any barriers: a place where goods and services changed hands based solely on mutual agreement and trust.",
          "HERMEiAS released the marketplace for anyone to redeploy or modify.",
        ],
      },
      {
        heading: "Key features",
        items: [
          "User authentication: register, log in and manage user profiles with secure JWT-based authentication.",
          "Product listings: create, browse, search and filter products with category and price range filters.",
          "Messaging system: real-time messaging between buyers and sellers.",
          "Transaction management: track purchases and sales with a full transaction history.",
          "Payment integration: a flexible payment system supporting multiple gateways, including MaxelPay, gift cards and a balance system.",
          "Search and filters: search by keyword, category and price range.",
          "Self-deployable: one-click deployment with Docker, on cloud, VPS or local infrastructure.",
          "Open source: MIT licensed. Fully customizable; modify and redeploy to match your needs.",
          "Full stack: complete React frontend and Node.js backend.",
        ],
      },
      {
        heading: "Tech stack",
        items: [
          "Backend: Node.js with Express, JWT authentication, JSON file storage (DB-ready), RESTful API.",
          "Frontend: React 18, React Router, Vite, responsive CSS.",
        ],
      },
      {
        heading: "Quick deploy",
        items: [
          "Windows: deploy.bat",
          "Mac/Linux: chmod +x deploy.sh && ./deploy.sh",
          "Or manually: docker-compose up -d",
        ],
      },
    ],
    faq: [
      { q: "What is Koinos?", a: "Koinos is an open-source, full-stack peer-to-peer marketplace application. It is designed to be redeployed and customized by anyone who wants to run their own marketplace platform." },
      { q: "Is Koinos free and open source?", a: "Yes. Koinos is MIT licensed, so you can use it, modify it and redeploy it to match your needs." },
      { q: "How do I deploy Koinos?", a: "Koinos deploys with Docker in one step: run deploy.bat on Windows or deploy.sh on Mac and Linux, or run docker-compose up -d manually. It runs on a cloud server, a VPS or local infrastructure." },
      { q: "What is Koinos built with?", a: "A React 18 frontend built with Vite, and a Node.js and Express backend with JWT authentication and a RESTful API. Data is stored in JSON files and the backend is ready for a database." },
      { q: "Which payment methods does Koinos support?", a: "Koinos has a flexible payment system that supports multiple gateways, including MaxelPay, gift cards and a built-in balance system." },
    ],
  },

  demoleai: {
    name: "DemoLe AI",
    tagline: "AI Legal Research for U.S. Lawyers",
    faqLabel: "DEMOLE AI",
    app: {
      applicationCategory: "LegalTechApplication",
      operatingSystem: "Web",
      appUrl: "https://demole.app",
      free: false,
    },
    links: [{ label: "Try DemoLe AI at Demole.app", href: "https://demole.app" }],
    sections: [
      {
        paragraphs: ["An AI built for the legal industry for intelligence gathering. The HERMEiAS flagship product for legal research and case analysis."],
      },
      {
        heading: "The flagship",
        items: [
          "Legal intelligence: specialized AI built for the legal industry, designed for intelligence gathering, case research and legal analysis.",
          "Case research: find relevant cases, precedents and legal insights faster with AI-powered analysis.",
          "Intelligence gathering: gather and analyze legal information to help lawyers make informed decisions.",
          "Privacy oriented: built with privacy at its core. Your legal research and case data remain confidential and secure.",
          "AI-powered analysis: analyze legal documents, identify patterns and extract meaningful insights from complex case files.",
          "Industry specialized: not a generic AI. DemoLe AI is purpose-built for legal professionals.",
        ],
      },
      {
        heading: "System status",
        items: [
          "Status: live, launched April 2026. Access: available at Demole.app.",
          "Product type: AI for the legal industry. Focus: intelligence gathering and legal research.",
          "Target: lawyers, legal professionals and law firms. Specialization: U.S. law. Market: United States.",
        ],
      },
    ],
    faq: [
      { q: "What is DemoLe AI?", a: "DemoLe AI is an AI built for the legal industry that specializes in U.S. law. It helps with case research, legal analysis and intelligence gathering, and it is the flagship HERMEiAS product." },
      { q: "Who is DemoLe AI for?", a: "Lawyers, legal professionals and law firms working with U.S. law." },
      { q: "Is DemoLe AI available now?", a: "Yes. DemoLe AI launched in April 2026 and is live at Demole.app." },
      { q: "Is my case data kept private?", a: "DemoLe AI is built with privacy at its core. Your legal research and case data remain confidential and secure, following HERMEiAS privacy principles." },
      { q: "How is DemoLe AI different from a general-purpose AI chatbot?", a: "It is not a generic AI. DemoLe AI is purpose-built for legal professionals and focused on legal research, case analysis and intelligence gathering for U.S. law." },
    ],
  },

  mystiko: {
    name: "Mystiko",
    tagline: "Encrypted Terminal Messaging Protocol",
    faqLabel: "MYSTIKO",
    app: {
      applicationCategory: "SecurityApplication",
      operatingSystem: "Web",
      free: false,
    },
    sections: [
      {
        paragraphs: ["A purely TUI (text user interface) encrypted messaging protocol. Terminal-based, private, decentralized, and completely under your control."],
      },
      {
        heading: "The protocol",
        items: [
          "Pure TUI: built for the terminal. No GUI, no bloat, just a text-based interface with a minimal footprint.",
          "End-to-end encryption: every message is encrypted before it leaves your device.",
          "Zero metadata: no tracking of who you talk to, when, or where.",
          "Decentralized: no central server, no single point of failure. Messages route through a distributed network.",
        ],
      },
      {
        heading: "Technical specs",
        items: [
          "Interface: pure TUI. Protocol: custom end-to-end encryption layer.",
          "Key exchange: Diffie-Hellman 2048-bit. Message encryption: AES-256-GCM.",
          "Network: decentralized P2P mesh. Metadata protection: zero-knowledge routing.",
          "Backup: client-side encrypted vaults. Link support: automatic URL detection and styling.",
          "File transfer and audio/video: not supported (text only).",
        ],
      },
      {
        heading: "Availability",
        paragraphs: ["Mystiko is coming soon. Join the waitlist."],
      },
    ],
    faq: [
      { q: "What is Mystiko?", a: "Mystiko is an encrypted messaging protocol with a pure terminal (TUI) interface. It is private, decentralized and designed to stay completely under your control." },
      { q: "How are Mystiko messages encrypted?", a: "End to end: keys are exchanged with 2048-bit Diffie-Hellman and messages are encrypted with AES-256-GCM before they leave your device." },
      { q: "Does Mystiko use a central server?", a: "No. Mystiko runs on a decentralized peer-to-peer mesh with no central server and no single point of failure." },
      { q: "Can I send files, voice or video with Mystiko?", a: "No. Mystiko is text only: file transfer, audio and video are not supported." },
      { q: "When is Mystiko available?", a: "Mystiko is coming soon. You can join the waitlist now." },
    ],
  },

  parrhesiaengine: {
    name: "ParrhesiaEngine",
    tagline: "Local Prompt Generator & Optimizer for Ollama",
    faqLabel: "PARRHESIA ENGINE",
    app: {
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Windows, macOS, Linux",
      codeRepository: "https://github.com/0x3k3h/ParrhesiaEngine",
      license: "https://opensource.org/licenses/MIT",
      free: true,
    },
    links: [{ label: "ParrhesiaEngine on GitHub", href: "https://github.com/0x3k3h/ParrhesiaEngine" }],
    sections: [
      {
        paragraphs: ["A local-first prompt crafting and optimization tool, powered by your own Ollama models. Describe what you want in plain language and get back a professional-grade prompt, or paste one you already have and get it tightened. Everything runs on your machine."],
      },
      {
        heading: "What it does",
        items: [
          "Generate: turn a short, plain-language idea into a complete, structured prompt ready to run.",
          "Optimize: rewrite a prompt you already have for clarity and specificity, without changing what it asks for.",
          "Library: save, tag, search and revisit your best prompts, stored locally in SQLite.",
          "CLI + web UI: a Typer/Rich terminal interface with live streaming, plus a minimal local web page.",
        ],
      },
      {
        heading: "Key features",
        items: [
          "Local-first: everything runs on your machine through Ollama. No API keys, no subscription, no data leaving your box.",
          "Model agnostic: pick any locally pulled Ollama model, such as llama3, mistral, qwen2.5-coder, or your own.",
          "Streaming CLI: a Typer + Rich terminal interface with live streaming output and syntax-aware rendering.",
          "Clipboard auto-copy: generated and optimized prompts land on your clipboard automatically.",
          "Prompt library: a SQLite-backed library with tagging and search.",
          "Interactive REPL: a REPL mode built for rapid iterate-and-refine sessions.",
          "Custom system prompts: override the built-in generate/optimize system prompts for your own house style.",
          "REST API: a FastAPI backend serves standalone /api/* endpoints if you want to script against it.",
          "MIT licensed: fully open source.",
        ],
      },
      {
        heading: "Tech stack",
        items: [
          "Python 3.10+, Ollama (local model runtime), SQLite prompt library, Typer + Rich CLI.",
          "FastAPI (REST + web UI), vanilla HTML/CSS/JS web UI, configurable via env / .env, MIT License.",
        ],
      },
      {
        heading: "Quick start",
        items: [
          "Set up: python -m venv .venv, pip install -r requirements.txt, cp .env.example .env",
          "Turn an idea into a full prompt: python -m parrhesia generate",
          "Tighten a prompt you already wrote: python -m parrhesia optimize",
          "Web UI at http://127.0.0.1:8420: python -m parrhesia serve",
        ],
      },
    ],
    faq: [
      { q: "What is ParrhesiaEngine?", a: "ParrhesiaEngine is a local-first prompt generator and optimizer that runs on your own Ollama models. Describe what you want in plain language to get a structured prompt, or paste an existing prompt to get it tightened." },
      { q: "Does ParrhesiaEngine need an API key or send data to the cloud?", a: "No. Everything runs on your machine through Ollama: no API keys, no subscription, and no data leaving your computer." },
      { q: "Which models does ParrhesiaEngine work with?", a: "Any model you have pulled locally in Ollama, such as llama3, mistral, qwen2.5-coder, or your own." },
      { q: "How do I use ParrhesiaEngine?", a: "From the command line with the generate and optimize commands or an interactive REPL, from a local web UI, or through its REST API." },
      { q: "What do I need to run it?", a: "Python 3.10 or newer and Ollama installed locally." },
      { q: "Is ParrhesiaEngine free?", a: "Yes. It is fully open source under the MIT license." },
    ],
  },

  haustorium: {
    name: "Haustorium",
    tagline: "Homelab Hosting Panel via Cloudflare Tunnel",
    faqLabel: "HAUSTORIUM",
    app: {
      applicationCategory: "HostingApplication",
      operatingSystem: "Linux, Docker",
      codeRepository: "https://github.com/0x3k3h/Haustorium",
      free: true,
    },
    links: [{ label: "Haustorium on GitHub", href: "https://github.com/0x3k3h/Haustorium" }],
    sections: [
      {
        paragraphs: ["A single admin panel that taps your homelab straight into the public internet. Point it at a folder, click a button, and your machine is serving a real website or a personal CDN from a public HTTPS URL: no port forwarding, no cloud hosting bill, no landlord."],
      },
      {
        heading: "What you can do",
        items: [
          "Host static sites: point at files, get a running site, no nginx config in sight.",
          "Built-in CDN: a drag-and-drop file manager backed by a vendored Darium Cloud instance.",
          "Quick tunnels: instant *.trycloudflare.com URLs with zero configuration, for demos and testing.",
          "Named tunnels: a stable subdomain on your own domain, backed by a Cloudflare API token.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: ["Two engines wearing one coat: a vendored Darium Cloud instance for storage, Cloudflare Tunnel for reach."],
        ordered: true,
        items: [
          "Create a site: Haustorium spins up a static file server for it and gives you an upload area.",
          "Attach a tunnel: pick Quick (instant, random URL) or Named (your own domain), and Haustorium spawns and manages cloudflared for you.",
          "Files / CDN: the same idea, backed by the vendored Darium Cloud instance, for general file hosting outside any one site.",
        ],
      },
      {
        heading: "Key features",
        items: [
          "One-click static hosting, and two tunnel modes: Quick Tunnels or Named Tunnels on your own domain.",
          "Built-in CDN and file manager: drag-and-drop uploads backed by Darium Cloud, no FTP client required.",
          "Encrypted secrets: a single admin account; Cloudflare tokens and internal credentials are encrypted at rest and never logged.",
          "One container: docker compose up and the panel, CDN engine and tunnel manager are live.",
          "Self-healing config: Darium Cloud's credentials are always resynced from Haustorium's own database.",
          "Live dashboard: storage usage, active tunnels and Darium's process log in one screen.",
        ],
      },
      {
        heading: "Tech stack",
        items: [
          "Node.js 22.5+ (built-in node:sqlite), Express backend, vanilla HTML/CSS/JS panel UI, vendored Darium Cloud engine.",
          "Docker (one container), Cloudflare Tunnel / cloudflared, encrypted secrets at rest.",
        ],
      },
      {
        heading: "Quick start",
        items: [
          "Docker (recommended): docker compose up -d",
          "Without Docker (needs Node.js 22.5+ and cloudflared on PATH): npm run install:all, then npm start",
          "Open http://<your-homelab-ip>:8080 and complete the first-run setup wizard.",
        ],
      },
      {
        heading: "License note",
        items: [
          "Haustorium's own code is free for personal and non-commercial hobby use.",
          "Running it as a paid or revenue-generating service isn't covered by this license; commercial builds are available from HERMEiAS.",
          "The vendored Darium Cloud engine ships under its own Personal & Hobby Use License.",
        ],
      },
    ],
    faq: [
      { q: "What is Haustorium?", a: "Haustorium is a self-hosted admin panel that puts your homelab on the public internet through Cloudflare Tunnel. It serves static websites and a personal CDN from a public HTTPS URL." },
      { q: "Can I host a website from home without port forwarding?", a: "Yes. Haustorium serves your sites through Cloudflare Tunnel, so you don't need to forward ports on your router or pay for cloud hosting." },
      { q: "What is the difference between Quick and Named tunnels?", a: "Quick Tunnels give you an instant *.trycloudflare.com URL with zero configuration, good for demos and testing. Named Tunnels give you a stable subdomain on your own domain, using a Cloudflare API token." },
      { q: "How do I install Haustorium?", a: "Run docker compose up -d, or without Docker install Node.js 22.5+ and cloudflared and run npm run install:all then npm start. Then open http://<your-homelab-ip>:8080 and complete the setup wizard." },
      { q: "Is Haustorium free?", a: "Haustorium is free for personal and non-commercial hobby use. For a paid or revenue-generating service, HERMEiAS can commission a commercial build." },
    ],
  },
};
