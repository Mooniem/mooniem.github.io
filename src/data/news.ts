export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
      {
    date: "June 2026",
    title: "I'm starting my summer internship at Microsoft FATE Research!",
    description: "I'm excited to be interning at Microsoft FATE Research this summer, please reach out if you're interested in connecting!",
    // link: "https://icml.cc/",
  },
    {
    date: "May 2026",
    title: "Paper Presentation at ICWSM 2026!",
    description: "I presented our work on characterizing the roles and uses of Grok on X at ICWSM 2026!",
    // link: "https://icml.cc/",
  },
  {
    date: "April 2026",
    title: "Paper accepted at ACL 2026!",
    description: "Our work on human evaluation protocols for long-form text generation has been accepted at ACL 2026 for oral presentation! I'll be attending ACL 2026 in San Diego, CA. Looking forward to seeing everyone there!",
    // link: "https://icml.cc/",
  },
 // uncomment this when you have news
//    {
//   date: "February 2026",
//   title: "New preprint on how users interact with Grok on X is available on arXiv!",
//   description:"",
//   link:"https://arxiv.org/abs/2602.11286" ,
// },
//   {
//   date: "June 2025",
//   title: "I passed my qualifying exam and became a PhD candidate!",
//   description:"",
//   link:"" ,
// },
//  {
//   date: "April 2025",
//   title: "New position paper on critical thinking in the era of GenAI is accepted to CHI 2025 workshop!",
//   description: "Paper is included in publications below.",
//   link: "https://aireasoning.media.mit.edu/",
// },
  // {
  //   date: "March 2025",
  //   title: "New article on AI hallucination published in the Conversation",
  //   description: "Check out my latest article on AI hallucination and its implications for society.",
  //   link: "https://theconversation.com/what-are-ai-hallucinations-why-ais-sometimes-make-things-up-242896?mkt_tok=NTI3LUFIUi0yNjUAAAGZZv8ruLxTTWAhJ8OEa-i0u5lBTPH_C-4Nt1z2gKVtVM2yLAq5bZ-HcHwOxEAqXyBjt-n_zTZ-RKDO3VSm070veF0WvawYWT5JKQ0OIXcNNw",
  // },
];
