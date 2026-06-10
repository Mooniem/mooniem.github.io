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
    year: "2026",
    conference: "The International AAAI Conference on Web and Social Media",
    title: "Grok in the Wild: Characterizing the Roles and Uses of Large Language Models on Social Media",
    authors: "Katelyn X. Mei, Robert Wolfe, Nicholas Weber, Martin Saveski",
    paperUrl: "https://arxiv.org/abs/2602.11286",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Characterize the roles and uses of Grok on X.",
    // imageUrl:
    //   "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2026",
    conference: "The 64th Annual Meeting of the Association for Computational Linguistics (ACL) ",
    title: "Illusions of the Gold Standard: A Large-scale Analysis of Human Evaluation Protocols for Long-form Text Generation",
    authors: "Katelyn X. Mei, Yili Hsu, Minjoon Choi, Zongwan Cao, Chenjun Xu, Bingbing Wen, Su Lin Blodgett, Lucy Lu Wang",
    paperUrl: "https://arxiv.org/abs/2606.07936",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Large-scale analysis of human evaluation protocols for long-form text generation.",
    // imageUrl:
    //   "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2025",
    conference: "ACM Workshop on Human-AI Interaction for Augmented Reasoning (CHI)",
    title: "Designing AI Systems that Augment Human Performed vs. Demonstrated Critical Thinking",
    authors: "Katelyn X. Mei, Nic Weber",
    paperUrl: "https://arxiv.org/abs/2504.14689",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Propose new definitions for evaluating the impact of GenAI on human critical thinking and systems design.",
    // imageUrl:
    //   "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2026",
    conference: "ACM Conference on Fairness, Accountability, and Transparency (FAccT)",
    title: "Addressing Pitfalls in Auditing Practices of Automatic Speech Recognition Technologies: A Case Study of People with Aphasia",
    authors: "Katelyn X. Mei, Anna Seo Gyeong Choi, Hilke Schellmann, Mona Sloane, Allison Koenecke",
    paperUrl: "https://arxiv.org/abs/2506.08846",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Propose new practices for auditing ASR systems to better include people with speech impairments.",
    // imageUrl:
    //   "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },

  {
    year: "2025",
    conference: "ACM Transactions on Computer-Human Interaction (TOCHI)",
    title: "Passing the Buck to AI: How Individuals' Decision-Making Patterns Affect Reliance on AI",
    authors: "Katelyn X. Mei, Rock Yuren Pang, Alex Lyford, Lucy Lu Wang, Katharina Reinecke",
    paperUrl: "https://arxiv.org/abs/2505.01537",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Examine the effect of individuals' decision-making patterns on their reliance on AI suggestions.",
    // imageUrl:
    //   "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  // {
  //   year: "2024",
  //   conference: "ACM Conference on Fairness, Accountability, and Transparency (FAccT)",
  //   title: "Careless Whisper: Speech-to-Text Hallucination Harms",
  //   authors: "Allison Koenecke, Anna Seo Gyeong Choi, Katelyn X. Mei, Hilke Schellmann, Mona Sloane",
  //   paperUrl: "https://arxiv.org/abs/2402.08021",
  //   // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
  //   //bibtex: "https://arxiv.org/abs/2409.15476.bib",
  //   tldr: "Hallucination in speech-to-text output in OpenAI Whisper.",
  //   // imageUrl:
  //   //   "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   // award: "🏆 Best Paper Award",
  //   // if you have an image in public/images, you can use it like this:
  //   // imageUrl: "/images/publication-image.jpg"
  // },
  {
    year: "2023",
    conference: "ACM Conference on Fairness, Accountability, and Transparency (FAccT)",
    title: "Bias Against 93 Stigmatized Groups in Masked Language Models and Downstream Sentiment Classification Tasks",
    authors: "Katelyn X. Mei, Sonia Fereidooni, Aylin Caliskan",
    paperUrl: "https://arxiv.org/abs/2306.05550",
    codeUrl: "https://github.com/Mooniem/MLMs_bias_stigmas",
  },
];
