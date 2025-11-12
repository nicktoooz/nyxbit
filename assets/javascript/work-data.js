// Hardcoded works JSON and renderer
const WORKS = [
  {
    href: './the-library.html',
    title: 'The Library',
    tools: ['Android', 'Kotlin', 'Firebase', 'HTML', 'CSS', 'ExpressJS'],
    img: './assets/images/theLibrary.png',
  },
  {
    href: './e-conn.html',
    title: 'E-Conn',
    tools: ['Android', 'Kotlin', 'Firebase', 'HTML', 'CSS'],
    img: './assets/images/eConn.png',
  },
  {
    href: './venel.html',
    title: 'Venel Discoverer eCommerce',
    tools: ['NextJS', 'TypeScript', 'React', 'MongoDB', 'AWS'],
    img: './assets/images/venel.png',
  },
  {
    href: './cura-services.html',
    title: 'Cura Services',
    tools: ['NextJS', 'TypeScript', 'React', 'PostgreSQL', 'Prisma', 'AWS'],
    img: './assets/images/curaservices.png',
  },
  {
    href: './dondenciong.html',
    title: 'Don Denciong Cleaning Services',
    tools: ['NextJS', 'TypeScript', 'React'],
    img: './assets/images/dondenciong.png',
  },
  {
    href: './healthsync.html',
    title: 'HealthSync',
    tools: ['HTML', 'CSS', 'JS', 'Bootstrap', 'Apache', 'MariaDB'],
    img: './assets/images/healthsync.png',
  },
  {
    href: './verace.html',
    title: 'Verace',
    tools: ['Figma'],
    img: './assets/images/verace.png',
  },
  {
    href: './jumpy.html',
    title: 'Jumpy',
    tools: ['HTML', 'CSS', 'JavaScript'],
    img: './assets/images/jumpy.png',
  },
  {
    href: './brewly.html',
    title: 'Brewly',
    tools: ['Figma'],
    img: './assets/images/brewly.png',
  },
  {
    href: 'graphic-designs.html',
    title: 'Graphic Designs',
    tools: ['Figma'],
    img: './assets/images/ads.png',
  },
];

function createWorkItem(item) {
  const a = document.createElement('a');
  a.className = 'work-flex__item';
  a.href = item.href || '#';

  const h2 = document.createElement('h2');
  h2.className = 'project-title';
  h2.textContent = item.title || '';
  a.appendChild(h2);

  const tools = document.createElement('div');
  tools.className = 'project-tools';
  (item.tools || []).forEach((tool) => {
    const d = document.createElement('div');
    d.className = 'project-tools__item';
    d.textContent = tool;
    tools.appendChild(d);
  });
  a.appendChild(tools);

  const img = document.createElement('img');
  img.src = item.img || '';
  img.alt = item.title || '';
  a.appendChild(img);

  return a;
}

function renderWorks() {
  const container = document.getElementById('work-flex');
  if (!container) return;
  // Clear any existing content
  container.innerHTML = '';
  WORKS.forEach((w) => container.appendChild(createWorkItem(w)));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderWorks);
} else {
  renderWorks();
}
