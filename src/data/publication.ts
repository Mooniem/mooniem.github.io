export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2024",
    conference: "ACM Conference on Fairness, Accountability, and Transparency (FAccT)",
    title: "Careless Whisper: Speech-to-Text Hallucination Harms",
    authors: "Allison Koenecke, Anna Seo Gyeong Choi, Katelyn X. Mei, Hilke Schellmann, Mona Sloane",
    paperUrl: "https://arxiv.org/abs/2402.08021",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Hallucination in speech-to-text output in OpenAI Whisper.",
    // imageUrl:
    //   "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2023",
    conference: "ACM Conference on Fairness, Accountability, and Transparency (FAccT)",
    title: "Bias Against 93 Stigmatized Groups in Masked Language Models and Downstream Sentiment Classification Tasks",
    authors: "Katelyn X. Mei, Sonia Fereidooni, Aylin Caliskan",
    paperUrl: "https://arxiv.org/abs/2306.05550",
    codeUrl: "https://github.com/Mooniem/MLMs_bias_stigmas",
  },
];
