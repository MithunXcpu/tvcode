export interface VoteItem {
  id: string;
  title: string;
  show: string;
  description: string;
  initialVotes: number;
}

export const voteItems: VoteItem[] = [
  {
    id: "minority-report-precrime",
    title: "PreCrime Interface",
    show: "Minority Report",
    description: "The gesture-controlled holographic interface used by PreCrime officers to scrub through precognitive visions and identify future criminals.",
    initialVotes: 42,
  },
  {
    id: "tron-grid",
    title: "The Grid OS",
    show: "TRON: Legacy",
    description: "The digital frontier operating system with light-cycle paths, identity disc management, and program lifecycle controls.",
    initialVotes: 38,
  },
  {
    id: "matrix-digital-rain",
    title: "Matrix Digital Rain",
    show: "The Matrix",
    description: "The iconic green cascading code that represents the Matrix itself. An interactive version where you can decode the symbols.",
    initialVotes: 56,
  },
  {
    id: "blade-runner-esper",
    title: "Esper Photo Analysis",
    show: "Blade Runner",
    description: "The voice-controlled photo enhancement machine Deckard uses to zoom, pan, and enhance a photograph to find hidden details.",
    initialVotes: 31,
  },
  {
    id: "ex-machina-bluebook",
    title: "BlueBook Search Engine",
    show: "Ex Machina",
    description: "Nathan Bateman's search engine that powers the world and secretly harvests data to build AI consciousness.",
    initialVotes: 27,
  },
  {
    id: "devs-quantum-sim",
    title: "Quantum Simulation Viewer",
    show: "Devs",
    description: "The Amaya campus quantum computer visualization that can simulate and replay any moment in history.",
    initialVotes: 19,
  },
  {
    id: "upload-afterlife-ui",
    title: "Lakeview Afterlife UI",
    show: "Upload",
    description: "The digital afterlife management interface where the living can visit, customize, and manage the experience of their uploaded loved ones.",
    initialVotes: 23,
  },
  {
    id: "person-of-interest-machine",
    title: "The Machine Interface",
    show: "Person of Interest",
    description: "The surveillance AI's classification view that labels every person as RELEVANT or IRRELEVANT with threat assessment overlays.",
    initialVotes: 35,
  },
];
