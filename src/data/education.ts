export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2022—Present",
    institution: "University of Washington",
    degree: "Ph.D. in Information Science",
    advisor: "Prof. Lucy Lu Wang and Prof. Katharina Reinecke",
  },
  {
    year: "2018—2022",
    institution: "Middlebury College",
    degree: "B.A. in Psychology and Mathematics",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
