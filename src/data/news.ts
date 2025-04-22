export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  /*{
    date: "March 2024",
    title: "Paper accepted at ICML 2024",
    description: "Our work on causal discovery in time series data has been accepted at ICML 2024.",
    link: "https://icml.cc/",
  }*/
 // uncomment this when you have news
 {
  date: "April 2025",
  title: "New position paper on critical thinking in the era of GenAI is accepted to CHI 2025 workshop!",
  description: "Paper is included in publications below.",
  link: "https://aireasoning.media.mit.edu/",
},
  {
    date: "March 2025",
    title: "New article on AI hallucination published in the Conversation",
    description: "Check out my latest article on AI hallucination and its implications for society.",
    link: "https://theconversation.com/what-are-ai-hallucinations-why-ais-sometimes-make-things-up-242896?mkt_tok=NTI3LUFIUi0yNjUAAAGZZv8ruLxTTWAhJ8OEa-i0u5lBTPH_C-4Nt1z2gKVtVM2yLAq5bZ-HcHwOxEAqXyBjt-n_zTZ-RKDO3VSm070veF0WvawYWT5JKQ0OIXcNNw",
  },
];
