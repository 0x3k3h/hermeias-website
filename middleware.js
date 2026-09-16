import { next } from '@vercel/functions';

// Serve real per-route <title>/<meta>/OG tags to crawlers that don't execute
// JavaScript (social link-unfurlers, and as a fast first pass for search bots).
// Real browsers always fall through to the normal SPA via next().

const BOT_UA = /bot|crawl|spider|slurp|facebookexternalhit|twitterbot|slackbot|linkedinbot|whatsapp|telegrambot|discordbot|pinterest|redditbot|applebot|skypeuripreview|vkshare|w3c_validator|embedly|quora link preview|outbrain|nuzzel|flipboard|tumblr|bitlybot|preview/i;

const SITE = 'https://www.hermeias.org';
const DEFAULT_IMAGE = `${SITE}/2by2%20HERMEiAS%20logo.png`;

const ALIASES = {
  'demole': 'demoleai',
  'mystiko': 'mystiko',
  'klick-mail': 'klickmail',
  'tor-vault': 'torvault',
  'onionhosting': 'onionhosting',
  'onion': 'onionhosting',
  'tor-hosting': 'onionhosting',
  'donation': 'donate',
  'support': 'donate',
  'parrhesia-engine': 'parrhesiaengine',
  'parrhesia': 'parrhesiaengine',
};

const ROUTES = {
  home: {
    title: 'HERMEiAS | Software & Technology Consulting Firm',
    description: 'HERMEiAS is a software & technology consulting firm delivering custom software, AI, web, storage, and secure infrastructure for clients worldwide.',
    path: '/',
  },
  torvault: {
    title: 'TorVault | Self-Hosted Tor Hidden Services Panel - HERMEiAS',
    description: 'TorVault is a self-hosted web panel for running Tor onion services: websites, chatrooms, and file sharing, each on its own .onion address.',
    path: '/torvault',
  },
  onionhosting: {
    title: 'Onion Hosting Consulting - HERMEiAS',
    description: 'HERMEiAS builds and self-hosts custom Tor projects — sites, chat, file drops, whistleblower platforms. Hardened .onion services. From $1000, priced per project.',
    path: '/onion-hosting',
  },
  klickmail: {
    title: 'Klick Mail | Email Automation Platform - HERMEiAS',
    description: 'Klick Mail is an advanced email platform with mass sending capabilities, templates, and settings management for outbound campaigns and automation.',
    path: '/klickmail',
  },
  darium: {
    title: 'Darium | Self-Hosted CDN & Cloud Storage - HERMEiAS',
    description: 'Darium is a free, self-deployable and self-hosted CDN + Cloud panel for secure, private file hosting and storage you control.',
    path: '/darium',
  },
  koinos: {
    title: 'Koinos | Open-Source P2P Marketplace - HERMEiAS',
    description: 'Koinos is an open-source, full-stack peer-to-peer marketplace platform enabling barrier-free trading, inspired by Greek island trading traditions.',
    path: '/koinos',
  },
  demoleai: {
    title: 'DemoLe AI | AI-Powered Legal Tech for U.S. Law - HERMEiAS',
    description: 'DemoLe AI is an AI-powered legal technology solution specializing in U.S. law, built for lawyers and legal professionals.',
    path: '/demoleai',
  },
  mystiko: {
    title: 'Mystiko | Encrypted Communications Protocol - HERMEiAS',
    description: 'Mystiko is a secure protocol and terminal user interface (TUI) for encrypted, privacy-first communications between peers.',
    path: '/mystiko',
  },
  parrhesiaengine: {
    title: 'ParrhesiaEngine | AI Prompt Engineering Tool - HERMEiAS',
    description: 'ParrhesiaEngine is a local-first prompt crafting tool powered by your own Ollama models. Generate or tighten prompts via CLI, web UI, or REST API.',
    path: '/parrhesiaengine',
  },
  haustorium: {
    title: 'Haustorium | Cloudflare Tunnel Panel - HERMEiAS',
    description: 'Haustorium is a self-hosted admin panel that taps your homelab into the public internet via Cloudflare Tunnel, with a built-in CDN and file manager.',
    path: '/haustorium',
  },
  careers: {
    title: 'Careers | Join HERMEiAS',
    description: 'Explore careers and open opportunities at HERMEiAS, building open-source and privacy-focused technology for clients worldwide.',
    path: '/careers',
  },
  donate: {
    title: 'Support HERMEiAS | Donate to Open-Source Dev',
    description: 'Support HERMEiAS open-source projects like TorVault, Darium, and Koinos with a donation. Every contribution funds continued development.',
    path: '/donate',
  },
  roadmap: {
    title: 'Roadmap | HERMEiAS',
    description: 'The HERMEiAS product roadmap: DemoLe AI subscription growth, hosting panel, anti-piracy licensing, webapp optimization, and one ecosystem subscription.',
    path: '/roadmap',
  },
};

function resolveRoute(pathname) {
  const slug = pathname.toLowerCase().replace(/^\/|\/$/g, '');
  if (slug === '') return ROUTES.home;
  const key = ALIASES[slug] || slug;
  return ROUTES[key] || null;
}

function renderHtml(route) {
  const url = `${SITE}${route.path}`;
  const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const title = escape(route.title);
  const description = escape(route.description);

  // Full site nav so crawlers that hit this fallback (rather than the hydrated
  // SPA) still see outgoing links to every page instead of a dead-end/orphan page.
  const navLinks = Object.values(ROUTES)
    .filter((r) => r.path !== route.path)
    .map((r) => `<li><a href="${SITE}${r.path}">${escape(r.title.split(' | ')[0].split(' - ')[0])}</a></li>`)
    .join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${url}">
<link rel="icon" type="image/png" href="${DEFAULT_IMAGE}">
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="${DEFAULT_IMAGE}">
<meta property="og:site_name" content="HERMEiAS">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${DEFAULT_IMAGE}">
</head>
<body>
<header>
<a href="${SITE}/">HERMEiAS</a>
</header>
<main>
<h1>${title}</h1>
<p>${description}</p>
<p><a href="${url}">${url}</a></p>
</main>
<nav aria-label="Site pages">
<h2>Explore HERMEiAS</h2>
<ul>
${navLinks}
</ul>
</nav>
<footer>
<p>&copy; 2026 HERMEiAS. <a href="mailto:suryansh@hermeias.org">Contact us</a>.</p>
</footer>
</body>
</html>`;
}

export default function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';
  if (!BOT_UA.test(userAgent)) return next();

  const url = new URL(request.url);
  const pathname = url.pathname;

  // Let real static assets, the news subsite, and any other file pass through untouched.
  if (/\.[a-z0-9]+$/i.test(pathname) || pathname.startsWith('/news') || pathname.startsWith('/siggen')) {
    return next();
  }

  const route = resolveRoute(pathname);
  if (!route) return next();

  return new Response(renderHtml(route), {
    status: 200,
    headers: { 'content-type': 'text/html; charset=utf-8' },
  });
}

export const config = {
  matcher: ['/((?!_next|api).*)'],
};
