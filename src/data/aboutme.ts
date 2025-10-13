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
  title: "Ph.D. Candidate",
  institution: "University of Washington",
  // Note that links work in the description
  description:
    "I'm a fourth-year PhD candidate in Information Science at the University of Washington. \
     I'm fortunate to be advised by <a href='https://llwang.net/'>Lucy Lu Wang </a> \
     and <a href = 'https://homes.cs.washington.edu/~reinecke/'> Katharina Reinecke</a>.\
     I'm also very grateful to be mentored by <a href = 'https://koenecke.infosci.cornell.edu/'> Allison Koenecke </a> and <a href='https://www.monasloane.org/'> Mona Sloane </a>.\
     Before my PhD, I spent four amazing years at <a href='https://www.middlebury.edu/'> \
     Middlebury College</a> from which I obtained my Bachelor's of Art in Psychology and\
     Mathematics. \n\n"+

    "My research interests derive from the intersection of psychology, humanties, and data science.\
    Through large-scale online experiments and collection of real-world social media data, my projects focus on human cognition and decision-making in the age of generative AI, including 1) how individuals interact with AI systems in various settings, \
     2) how AI systems affect individuals' behaviors, \
     3) psychological factors underlying our engagement with AI systems.",
  email: "kmei@uw.edu",
  imageUrl: "/profile3.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=m8Fcl7QQLMAC&hl=en",
  githubUsername: "mooniem",
  linkedinUsername: "katelynmei",
  // twitterUsername: "janesmith",
  // blogUrl: "https://",
  // cvUrl: "https://",
  // institutionUrl: "https://www.stanford.edu",
  // altName: "",
  funDescription: "When I'm not researching, I'm painting, bouldering, running, biking, playing sports with friends.",
  // secretDescription: "I like playing volleyball, hiking, running outside of research."
};
