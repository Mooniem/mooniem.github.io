export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Katelyn Xiaoying Mei",
  title: "Ph.D. Student",
  institution: "University of Washington",
  // Note that links work in the description
  description:
    "I'm a third-year PhD student in Information Science at the University of Washington. \
     I'm fortunate to be advised by <a href='https://llwang.net/'>Lucy Lu Wang </a> \
     and <a href = 'https://homes.cs.washington.edu/~reinecke/'> Katharina Reinecke</a>. \
     Before my PhD, I spent four amazing years at <a href='https://www.middlebury.edu/'> \
     Middlebury College</a> from which I obtained my Bachelor's of Art in Psychology and\
     Mathematics. \n\n"+
    "My research interests derive from the intersection of psychology, humanties, and data science.\
    My projects focus on human behaviors in the age of generative AI, including 1) how individuals are impacted by AI systems, 2) how people engage with AI systems differently, and 3)what can (cannot) facilitate \
    effective Human-AI collaboration.",
  email: "kmei@uw.edu",
  imageUrl: "/profile.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=m8Fcl7QQLMAC&hl=en",
  githubUsername: "mooniem",
  linkedinUsername: "katelynmei",
  // twitterUsername: "janesmith",
  // blogUrl: "https://",
  // cvUrl: "https://",
  // institutionUrl: "https://www.stanford.edu",
  // altName: "",
  funDescription: "I like playing volleyball, hiking, running outside of research.",
  secretDescription: "I like playing volleyball, hiking, running outside of research."
};
