export interface Build {
  slug: string;
  showSlug: string;
  name: string;
  tagline: string;
  description: string;
  showDescription: string;
  tech: string[];
  realWorldEquivalent: string;
  featured: boolean;
  codeSnippet?: string;
}

export interface Show {
  slug: string;
  name: string;
  year: string;
  genre: string;
  description: string;
  gradient: string;
  builds: Build[];
}

export const shows: Show[] = [
  {
    slug: "iron-man",
    name: "Iron Man",
    year: "2008-2019",
    genre: "Sci-Fi / Action",
    description:
      "Tony Stark\u2019s genius is on full display through JARVIS \u2014 the AI assistant that powers everything from suit diagnostics to global threat analysis.",
    gradient: "from-red-600 to-amber-500",
    builds: [
      {
        slug: "jarvis-hud",
        showSlug: "iron-man",
        name: "JARVIS HUD Interface",
        tagline: "Holographic heads-up display with voice commands",
        description:
          "A fully animated recreation of the iconic JARVIS heads-up display. Features scanning rings, status readouts, threat-level indicators, and a pulsing arc-reactor core animation.",
        showDescription:
          "In the MCU, JARVIS projects a translucent blue-orange holographic HUD inside Tony\u2019s helmet. It tracks targets, displays suit integrity, monitors vitals, and responds to voice commands in real time during flight and combat.",
        tech: ["React", "Framer Motion", "CSS Animations", "TypeScript"],
        realWorldEquivalent:
          "Fighter-jet HUDs like the F-35 Helmet Mounted Display System, combined with modern AR overlays such as Microsoft HoloLens.",
        featured: true,
        codeSnippet: `// Arc reactor pulse animation
const pulseVariants = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};`,
      },
    ],
  },
  {
    slug: "severance",
    name: "Severance",
    year: "2022-",
    genre: "Sci-Fi / Thriller",
    description:
      "Lumon Industries\u2019 Macrodata Refinement department uses an eerily minimalist terminal to sort numbers that evoke emotional responses.",
    gradient: "from-teal-600 to-emerald-400",
    builds: [
      {
        slug: "lumon-mdr",
        showSlug: "severance",
        name: "Lumon MDR Interface",
        tagline: "The mysterious number-sorting macrodata refinement terminal",
        description:
          "An interactive recreation of Lumon\u2019s Macrodata Refinement terminal. Click on numbers that feel scary to sort them into bins. Watch them glow, cluster, and resolve.",
        showDescription:
          "The MDR terminal displays grids of numbers on a retro green-tinted screen. Refiners identify numbers that provoke emotional responses and sort them into four mysterious categories: WO, FC, DR, and MA. Completing a file triggers a waffle party.",
        tech: ["React", "Framer Motion", "CSS Grid", "TypeScript"],
        realWorldEquivalent:
          "Data labeling and annotation tools like Labelbox or Scale AI \u2014 but with an existential dread overlay.",
        featured: true,
        codeSnippet: `// Number refinement detection
function isScary(n: number): boolean {
  const digit = n % 10;
  return digit === 4 || digit === 7 || n > 85;
}`,
      },
    ],
  },
  {
    slug: "star-trek",
    name: "Star Trek",
    year: "1966-",
    genre: "Sci-Fi",
    description:
      "The Federation\u2019s LCARS computer interface has defined how we imagine futuristic computing \u2014 clean panels, color-coded touchscreens, and pure information density.",
    gradient: "from-amber-500 to-orange-600",
    builds: [
      {
        slug: "lcars-computer",
        showSlug: "star-trek",
        name: "LCARS Computer",
        tagline: "The iconic Library Computer Access/Retrieval System",
        description:
          "A faithful recreation of the LCARS interface seen across Star Trek: TNG and beyond. Colored bar panels, touch-ready buttons, scrolling data streams, and that unmistakable rounded-rectangle aesthetic.",
        showDescription:
          "LCARS (Library Computer Access/Retrieval System) is the primary computer interface on Federation starships. It features distinctive rounded rectangles, color-coded information panels in amber, blue, and lavender, with data streams scrolling across the display.",
        tech: ["React", "CSS Grid", "Framer Motion", "TypeScript"],
        realWorldEquivalent:
          "Modern dashboard frameworks like Grafana or Datadog, combined with design systems like IBM Carbon \u2014 but far more stylish.",
        featured: true,
        codeSnippet: `// LCARS color palette
const LCARS_COLORS = {
  peach: "#ff9966",
  lavender: "#cc99cc",
  gold: "#ffcc66",
  blue: "#9999ff",
  orange: "#ff7700",
};`,
      },
    ],
  },
  {
    slug: "westworld",
    name: "Westworld",
    year: "2016-2022",
    genre: "Sci-Fi / Drama",
    description:
      "Delos engineers use sophisticated dashboards to monitor, adjust, and control the behavior of artificially intelligent hosts living inside themed parks.",
    gradient: "from-sky-600 to-indigo-600",
    builds: [
      {
        slug: "behavior-modeling",
        showSlug: "westworld",
        name: "Behavior Modeling Dashboard",
        tagline: "Host behavior analysis and narrative control",
        description:
          "A dashboard inspired by the Delos behavior-modeling UI. Visualize host personality attributes across axes like aggression, loyalty, curiosity, and self-preservation.",
        showDescription:
          "Westworld\u2019s behavior tab shows a 3D mesh of a host\u2019s cognitive profile \u2014 a web of attributes that Delos engineers can dial up or down. It also displays narrative loops, memory access logs, and reverie triggers.",
        tech: ["React", "SVG", "Framer Motion", "TypeScript"],
        realWorldEquivalent:
          "Personality profiling tools and AI model parameter dashboards like Weights and Biases or character.ai tuning interfaces.",
        featured: false,
        codeSnippet: `// Behavior attribute model
interface HostProfile {
  aggression: number;
  loyalty: number;
  curiosity: number;
  empathy: number;
  selfPreservation: number;
}`,
      },
    ],
  },
  {
    slug: "mr-robot",
    name: "Mr. Robot",
    year: "2015-2019",
    genre: "Thriller / Drama",
    description:
      "Elliot Alderson\u2019s terminal is a window into the mind of a vigilante hacker \u2014 custom scripts, social engineering tools, and a relentless pursuit of control.",
    gradient: "from-green-500 to-lime-400",
    builds: [
      {
        slug: "fsociety-terminal",
        showSlug: "mr-robot",
        name: "fsociety Terminal",
        tagline: "Hacker terminal with custom commands",
        description:
          "A browser-based terminal emulator styled after Elliot\u2019s Kali Linux setup. Type commands, watch output scroll, and explore a simulated filesystem \u2014 complete with fsociety Easter eggs.",
        showDescription:
          "Mr. Robot is famous for its realistic depiction of hacking. Elliot uses a Linux terminal running actual tools like nmap, social-engineer toolkit, and custom Python scripts. The show\u2019s attention to real command-line detail set a new standard for tech in television.",
        tech: ["React", "TypeScript", "CSS Animations"],
        realWorldEquivalent:
          "Real penetration testing terminals using Kali Linux, combined with tools like Metasploit and Burp Suite.",
        featured: false,
        codeSnippet: `// Terminal command parser
function parseCommand(input: string) {
  const [cmd, ...args] = input.split(" ");
  return { command: cmd, arguments: args };
}`,
      },
    ],
  },
  {
    slug: "black-mirror-nosedive",
    name: "Black Mirror: Nosedive",
    year: "2016",
    genre: "Sci-Fi / Satire",
    description:
      "In a pastel-tinted dystopia, every interaction is rated on a five-star scale. Your social score determines your access to housing, travel, and basic dignity.",
    gradient: "from-pink-400 to-rose-500",
    builds: [
      {
        slug: "social-credit-app",
        showSlug: "black-mirror-nosedive",
        name: "Social Credit App",
        tagline: "Rate everyone you interact with",
        description:
          "A recreation of the Nosedive social rating interface. Browse a feed of simulated profiles, rate interactions from 1 to 5 stars, and watch your own score fluctuate.",
        showDescription:
          "In the Nosedive episode, everyone uses an AR-enabled app to rate every single human interaction. Your cumulative score determines your socioeconomic tier. A 4.5+ opens luxury doors; below 3.0, you are an outcast.",
        tech: ["React", "Framer Motion", "TypeScript"],
        realWorldEquivalent:
          "China\u2019s Social Credit System, Uber\u2019s rider/driver ratings, and the implicit social scoring of Instagram follower counts.",
        featured: false,
        codeSnippet: `// Social score calculation
function calculateScore(ratings: number[]) {
  const recent = ratings.slice(-50);
  const weighted = recent.map((r, i) =>
    r * (1 + i / recent.length)
  );
  return weighted.reduce((a, b) => a + b, 0)
    / weighted.length;
}`,
      },
    ],
  },
  {
    slug: "silicon-valley",
    name: "Silicon Valley",
    year: "2014-2019",
    genre: "Comedy",
    description:
      "Richard Hendricks built the most revolutionary compression algorithm in history \u2014 middle-out \u2014 and then spent five seasons almost losing it.",
    gradient: "from-blue-500 to-cyan-400",
    builds: [
      {
        slug: "pied-piper-compression",
        showSlug: "silicon-valley",
        name: "Pied Piper Compression",
        tagline: "Middle-out compression algorithm visualization",
        description:
          "A visual demonstration of the legendary middle-out compression algorithm. Enter text, watch the compression visualize from the center outward, and compare Weissman scores against real-world algorithms.",
        showDescription:
          "Pied Piper\u2019s compression algorithm works middle-out \u2014 starting from the center of the data and compressing outward in both directions simultaneously. It achieves a Weissman score of 5.2, shattering all known benchmarks.",
        tech: ["React", "TypeScript", "Canvas API"],
        realWorldEquivalent:
          "Real compression algorithms like gzip, Brotli, and zstd. The Weissman score is actually a real metric created for the show by Stanford researchers.",
        featured: false,
        codeSnippet: `// Middle-out compression (simplified)
function middleOut(data: string): string {
  const mid = Math.floor(data.length / 2);
  const left = compress(data.slice(0, mid));
  const right = compress(data.slice(mid));
  return merge(left, right);
}`,
      },
    ],
  },
  {
    slug: "the-social-network",
    name: "The Social Network",
    year: "2010",
    genre: "Drama / Biography",
    description:
      "Before Facebook conquered the world, there was FaceMash \u2014 a hot-or-not clone built in a dorm room that crashed Harvard\u2019s network and launched a revolution.",
    gradient: "from-blue-700 to-blue-400",
    builds: [
      {
        slug: "facemash",
        showSlug: "the-social-network",
        name: "FaceMash",
        tagline: "Side-by-side photo comparison and ranking",
        description:
          "A recreation of the infamous FaceMash interface. Two cards appear side by side \u2014 click to choose, and the Elo ratings update in real time. Built to demonstrate the algorithm.",
        showDescription:
          "Mark Zuckerberg built FaceMash in his dorm room at Harvard, scraping student ID photos from house facebooks. The site presented two photos side-by-side and asked Who is Hotter \u2014 using an Elo rating system adapted from chess.",
        tech: ["React", "TypeScript", "Elo Algorithm"],
        realWorldEquivalent:
          "Hot-or-not sites, Tinder\u2019s swipe mechanic, and any A/B comparison tool. The Elo system is used in chess, gaming matchmaking, and recommendation engines.",
        featured: false,
        codeSnippet: `// Elo rating calculation
function eloRating(
  winner: number,
  loser: number,
  k = 32
) {
  const expected = 1 / (1 + 10 **
    ((loser - winner) / 400));
  return {
    winner: winner + k * (1 - expected),
    loser: loser + k * (0 - (1 - expected)),
  };
}`,
      },
    ],
  },
  {
    slug: "her",
    name: "Her",
    year: "2013",
    genre: "Romance / Sci-Fi",
    description:
      "Theodore Twombly falls in love with Samantha \u2014 an AI operating system with warmth, wit, and a voice that makes you forget she does not have a body.",
    gradient: "from-rose-400 to-orange-300",
    builds: [
      {
        slug: "samantha-ai",
        showSlug: "her",
        name: "Samantha AI Companion",
        tagline: "Warm, conversational AI interface",
        description:
          "A chat interface inspired by the warm, minimal aesthetic of Samantha\u2019s OS. Type messages and receive thoughtful, pre-written responses. The interface focuses on typography, breathing animations, and emotional presence.",
        showDescription:
          "Samantha runs on Theodore\u2019s earpiece and a small handheld device. Her interface is almost invisible \u2014 just a warm voice, an occasional camera eye, and a subtle screen glow. The film emphasizes connection over interface.",
        tech: ["React", "Framer Motion", "TypeScript"],
        realWorldEquivalent:
          "Modern AI assistants like ChatGPT, Claude, and the Rabbit R1 \u2014 all trying to capture some of that Samantha magic.",
        featured: true,
        codeSnippet: `// Typing indicator animation
const typingDots = {
  animate: {
    opacity: [0.3, 1, 0.3],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      staggerChildren: 0.2,
    },
  },
};`,
      },
    ],
  },
  {
    slug: "succession",
    name: "Succession",
    year: "2018-2023",
    genre: "Drama",
    description:
      "The Roy family\u2019s Waystar Royco is a media and entertainment empire \u2014 and behind every hostile takeover is a dashboard full of numbers that make or break dynasties.",
    gradient: "from-yellow-500 to-amber-600",
    builds: [
      {
        slug: "waystar-royco-dashboard",
        showSlug: "succession",
        name: "Waystar Royco Dashboard",
        tagline: "Media empire analytics and deal tracking",
        description:
          "A corporate analytics dashboard fit for Logan Roy himself. Track revenue streams across divisions, monitor stock price, and review active deals \u2014 all in a clean, executive-tier dark interface.",
        showDescription:
          "Waystar Royco is a global media conglomerate with divisions spanning theme parks, news networks, film studios, and cruise lines. The show depicts tense boardroom scenes where stock tickers, valuation models, and deal terms drive billion-dollar decisions.",
        tech: ["React", "SVG Charts", "TypeScript"],
        realWorldEquivalent:
          "Bloomberg Terminal, Tableau executive dashboards, and enterprise BI tools like Looker or Power BI.",
        featured: false,
        codeSnippet: `// Stock price simulation
function simulatePrice(base: number) {
  const volatility = 0.02;
  const change = (Math.random() - 0.48)
    * volatility;
  return +(base * (1 + change)).toFixed(2);
}`,
      },
    ],
  },
];

export function getShowBySlug(slug: string): Show | undefined {
  return shows.find((s) => s.slug === slug);
}

export function getBuildBySlug(slug: string): Build | undefined {
  for (const show of shows) {
    const build = show.builds.find((b) => b.slug === slug);
    if (build) return build;
  }
  return undefined;
}

export function getShowForBuild(buildSlug: string): Show | undefined {
  return shows.find((s) => s.builds.some((b) => b.slug === buildSlug));
}

export function getAllBuilds(): Build[] {
  return shows.flatMap((s) => s.builds);
}

export function getFeaturedBuilds(): Build[] {
  return getAllBuilds().filter((b) => b.featured);
}
