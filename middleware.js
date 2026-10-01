import { next } from '@vercel/functions';
import './seo-content.js';

// Product page content (H1 taglines, sections, FAQs, schema facts), shared with index.html
const PRODUCT_SEO = globalThis.HERMEIAS_SEO || {};

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
  'nyx-gateway': 'nyx',
  'nyxgateway': 'nyx',
};

const ROUTES = {
  home: {
    title: 'HERMEiAS | Software & Technology Consulting Firm',
    description: 'HERMEiAS is a software & technology consulting firm delivering custom software, AI, web, storage, and secure infrastructure for clients worldwide.',
    path: '/',
  },
  torvault: {
    title: 'Self-Hosted Tor Hidden Service Panel | TorVault - HERMEiAS',
    description: 'TorVault is a free, open-source, self-hosted panel for running Tor hidden services: host .onion websites, chatrooms and file drops from one server.',
    path: '/torvault',
  },
  onionhosting: {
    title: 'Onion Hosting Consulting - HERMEiAS',
    description: 'HERMEiAS builds and self-hosts custom Tor projects — sites, chat, file drops, whistleblower platforms. Hardened .onion services. From $1000, priced per project.',
    path: '/onion-hosting',
  },
  klickmail: {
    title: 'Free Bulk Email Client & Mass Mailer | Klick Mail - HERMEiAS',
    description: 'Klick Mail is a free email client built for mass mailing. Send custom HTML emails to your contact lists over IMAP, SMTP or POP3 with TLS. No tracking.',
    path: '/klickmail',
  },
  darium: {
    title: 'Self-Hosted CDN & Cloud Storage Panel | Darium - HERMEiAS',
    description: 'Darium is a free, self-hosted CDN and cloud storage panel: drag-and-drop uploads, a file explorer, smart caching, stats and storage limits on your server.',
    path: '/darium',
  },
  koinos: {
    title: 'Open-Source P2P Marketplace Software | Koinos - HERMEiAS',
    description: 'Koinos is an MIT-licensed, open-source peer-to-peer marketplace you can self-host: listings, messaging, transactions and payments, deployed with Docker.',
    path: '/koinos',
  },
  demoleai: {
    title: 'AI Legal Research for U.S. Lawyers | DemoLe AI - HERMEiAS',
    description: 'DemoLe AI is an AI legal research assistant for U.S. lawyers and law firms: case research, legal analysis and intelligence gathering. Live at Demole.app.',
    path: '/demoleai',
  },
  mystiko: {
    title: 'Encrypted Terminal Messenger (TUI) | Mystiko - HERMEiAS',
    description: 'Mystiko is an encrypted messaging protocol for the terminal: end-to-end encryption, zero metadata and a decentralized peer-to-peer network. Coming soon.',
    path: '/mystiko',
  },
  parrhesiaengine: {
    title: 'Ollama Prompt Generator | ParrhesiaEngine - HERMEiAS',
    description: 'ParrhesiaEngine is a free, open-source prompt generator and optimizer that runs on your own Ollama models. CLI, web UI and REST API. No API keys needed.',
    path: '/parrhesiaengine',
  },
  haustorium: {
    title: 'Homelab Hosting via Cloudflare Tunnel | Haustorium - HERMEiAS',
    description: 'Haustorium is a self-hosted panel that serves websites and a personal CDN from your homelab via Cloudflare Tunnel. No port forwarding, no cloud hosting bill.',
    path: '/haustorium',
  },
  nyx: {
    title: 'Self-Hosted Monero (XMR) Payment Gateway | NYX - HERMEiAS',
    description: 'NYX is a self-hosted, non-custodial Monero (XMR) payment gateway for Tor and privacy-first merchants. Accept XMR into your own wallet. From $200.',
    path: '/nyx',
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
  const key = slug === '' ? 'home' : (ALIASES[slug] || slug);
  return ROUTES[key] ? { ...ROUTES[key], key } : null;
}

function renderHtml(route) {
  const url = `${SITE}${route.path}`;
  const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const title = escape(route.title);
  const description = escape(route.description);
  const seo = PRODUCT_SEO[route.key];
  const h1 = escape(seo ? `${seo.name}: ${seo.tagline}` : route.title);

  // Full page content for product routes, mirroring what the React page shows people
  const sections = ((seo && seo.sections) || []).map((sec) => {
    const heading = sec.heading ? `<h2>${escape(sec.heading)}</h2>` : '';
    const paragraphs = (sec.paragraphs || []).map((t) => `<p>${escape(t)}</p>`).join('');
    const tag = sec.ordered ? 'ol' : 'ul';
    const items = sec.items ? `<${tag}>${sec.items.map((t) => `<li>${escape(t)}</li>`).join('')}</${tag}>` : '';
    return `<section>${heading}${paragraphs}${items}</section>`;
  }).join('\n');

  const faq = seo && seo.faq
    ? `<section><h2>Frequently asked questions</h2>${seo.faq.map((f) => `<h3>${escape(f.q)}</h3><p>${escape(f.a)}</p>`).join('')}</section>`
    : '';

  const links = ((seo && seo.links) || []).map((l) => `<p><a href="${escape(l.href)}">${escape(l.label)}</a></p>`).join('\n');

  const app = (seo && seo.app) || {};
  const schema = seo ? [
    {
      '@type': 'SoftwareApplication',
      name: seo.name,
      description: route.description,
      applicationCategory: app.applicationCategory,
      operatingSystem: app.operatingSystem,
      url: app.appUrl || url,
      ...(app.codeRepository ? { codeRepository: app.codeRepository } : {}),
      ...(app.license ? { license: app.license } : {}),
      ...(app.offers ? { offers: app.offers } : app.free ? { offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } } : {}),
      creator: { '@type': 'Organization', name: 'HERMEiAS', url: SITE },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: seo.name, item: url },
      ],
    },
    ...(seo.faq ? [{
      '@type': 'FAQPage',
      mainEntity: seo.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    }] : []),
  ] : [];
  const jsonLd = schema.length
    ? `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': schema }).replace(/</g, '\\u003c')}</script>`
    : '';

  // Full site nav so crawlers that hit this fallback (rather than the hydrated
  // SPA) still see outgoing links to every page instead of a dead-end/orphan page.
  const navLinks = Object.entries(ROUTES)
    .filter(([, r]) => r.path !== route.path)
    .map(([key, r]) => `<li><a href="${SITE}${r.path}">${escape(PRODUCT_SEO[key] ? PRODUCT_SEO[key].name : r.title.split(' | ')[0].split(' - ')[0])}</a></li>`)
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
${jsonLd}
</head>
<body>
<header>
<a href="${SITE}/">HERMEiAS</a>
</header>
<main>
<h1>${h1}</h1>
<p>${description}</p>
${sections}
${faq}
${links}
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
