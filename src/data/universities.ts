export type Country = 'BD' | 'IN' | 'PK';

export interface AcademicStanding {
  label: string;
  minCGPA: number;
  maxCGPA: number;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface University {
  slug: string;
  name: string;
  shortName: string;
  country: Country;
  city: string;
  gradingSystemId: string;
  description: string;
  established?: number;
  website?: string;
  totalStudents?: string;
  academicStanding: AcademicStanding[];
  faq: FAQ[];
  relatedSlugs?: string[];
}

export const UNIVERSITIES: University[] = [
  {
    slug: 'du-cgpa-calculator',
    name: 'University of Dhaka',
    shortName: 'DU',
    country: 'BD',
    city: 'Dhaka',
    gradingSystemId: 'ugc-bd',
    description: 'The University of Dhaka, established in 1921, is the oldest and most prestigious public university in Bangladesh. It uses the UGC standard grading system across all its faculties.',
    established: 1921,
    website: 'https://du.ac.bd',
    totalStudents: '33,000+',
    academicStanding: [
      { label: 'First Class', minCGPA: 3.00, maxCGPA: 4.00, description: 'Excellent academic performance' },
      { label: 'Second Class (Upper)', minCGPA: 2.50, maxCGPA: 2.99, description: 'Good academic performance' },
      { label: 'Second Class (Lower)', minCGPA: 2.00, maxCGPA: 2.49, description: 'Satisfactory performance' },
      { label: 'Pass', minCGPA: 1.00, maxCGPA: 1.99, description: 'Minimum passing standard' },
    ],
    faq: [
      { question: 'What grading system does University of Dhaka use?', answer: 'DU follows the UGC standard grading system with a 4.0 scale, where A+ = 4.00, A = 3.75, A- = 3.50, and so on down to D = 2.00 and F = 0.00.' },
      { question: 'What is a good CGPA at University of Dhaka?', answer: 'A CGPA of 3.00 or above is considered First Class at DU. A CGPA between 2.50–2.99 is Second Class (Upper), which is also considered good.' },
      { question: 'How is CGPA calculated at DU?', answer: 'CGPA = Σ(Credit Hours × Grade Point) ÷ Σ(Credit Hours). Each course grade is converted to a grade point, multiplied by credit hours, and divided by total credits.' },
      { question: 'Can I convert my DU CGPA to percentage?', answer: 'A common approximation is: Percentage = CGPA × 25. So a CGPA of 3.50 ≈ 87.5%. However, official conversions vary by institution.' },
    ],
    relatedSlugs: ['brac-cgpa-calculator', 'nsu-cgpa-calculator', 'buet-cgpa-calculator'],
  },
  {
    slug: 'brac-cgpa-calculator',
    name: 'BRAC University',
    shortName: 'BRACU',
    country: 'BD',
    city: 'Dhaka',
    gradingSystemId: 'bracu',
    description: 'BRAC University is a leading private university in Bangladesh known for its quality education and modern campus in Dhaka. It uses its own 13-tier grading system (introduced Fall 2020) where both A+ and A carry a 4.0 grade point.',
    established: 2001,
    website: 'https://bracuniversity.ac.bd',
    totalStudents: '12,000+',
    academicStanding: [
      { label: 'Dean\'s List', minCGPA: 3.80, maxCGPA: 4.00, description: 'Outstanding academic achievement' },
      { label: 'First Class', minCGPA: 3.00, maxCGPA: 3.79, description: 'Excellent academic performance' },
      { label: 'Second Class', minCGPA: 2.50, maxCGPA: 2.99, description: 'Good academic performance' },
      { label: 'Pass', minCGPA: 2.00, maxCGPA: 2.49, description: 'Minimum passing standard' },
    ],
    faq: [
      { question: 'What grading system does BRAC University use?', answer: 'BRAC University uses its own 13-tier grading scale (introduced from Fall 2020). Notably, both A+ (97–100) and A (90–<97) earn 4.0 grade points. The scale goes down to D- (50–<52) at 0.7 and F (below 50) at 0.0.' },
      { question: 'Do A and A+ have the same grade point at BRACU?', answer: 'Yes. At BRAC University, both A+ (97–100, Exceptional) and A (90–<97, Excellent) carry a 4.0 grade point. This differs from most US-style systems where A+ may be 4.0 and A is 4.0 but they are distinguished descriptively.' },
      { question: 'What CGPA is required for Dean\'s List at BRACU?', answer: 'Students need a CGPA of 3.80 or above to be on the Dean\'s List at BRAC University.' },
      { question: 'How many credit hours are required to graduate from BRACU?', answer: 'Most undergraduate programs at BRAC University require 120–132 credit hours to graduate, varying by department.' },
      { question: 'What is the minimum passing mark at BRAC University?', answer: 'Students must score at least 50 marks to pass a course. A score below 50 results in an F grade (0.0 grade points).' },
    ],
    relatedSlugs: ['du-cgpa-calculator', 'nsu-cgpa-calculator'],
  },
  {
    slug: 'nsu-cgpa-calculator',
    name: 'North South University',
    shortName: 'NSU',
    country: 'BD',
    city: 'Dhaka',
    gradingSystemId: 'nsu',
    description: 'North South University (NSU) is the first private university in Bangladesh, established in 1992. It uses its own 11-tier grading system on a 4.0 scale, with GPA class equivalences: 3.00+ = First Class, 2.50–2.99 = Second Class, 2.00–2.49 = Third Class.',
    established: 1992,
    website: 'https://northsouth.edu',
    totalStudents: '22,000+',
    academicStanding: [
      { label: 'First Class', minCGPA: 3.00, maxCGPA: 4.00, description: 'GPA 3.00 and above — NSU official class equivalence' },
      { label: 'Second Class', minCGPA: 2.50, maxCGPA: 2.99, description: 'GPA 2.50 to 2.99 — NSU official class equivalence' },
      { label: 'Third Class', minCGPA: 2.00, maxCGPA: 2.49, description: 'GPA 2.00 to 2.49 — NSU official class equivalence' },
    ],
    faq: [
      { question: 'What grading system does NSU use?', answer: 'NSU uses its own 11-tier grading system on a 4.0 scale. A (93+) = 4.0, A- (90–92) = 3.7, B+ (87–89) = 3.3, B (83–86) = 3.0, and so on down to F (below 60) = 0.0.' },
      { question: 'What grades count toward NSU GPA calculation?', answer: 'Only grades A, A-, B+, B, B-, C+, C, C-, D+, D, and F are used to calculate credits attempted. Incomplete (I) and Withdrawal (W) grades are excluded from GPA calculation and do not count toward graduation credits.' },
      { question: 'What are the GPA class equivalences at NSU?', answer: 'NSU officially defines: GPA 3.00 and above = First Class, GPA 2.50 to 2.99 = Second Class, GPA 2.00 to 2.49 = Third Class.' },
      { question: 'Can I retake courses to improve my NSU CGPA?', answer: 'Yes. NSU allows students to retake any course where they earned a grade of B or lower. When retaking, only the best grade is used to calculate the CGPA. For F grades, the F counts until the course is retaken and a better grade is earned.' },
      { question: 'What happens to an Incomplete (I) grade at NSU?', answer: 'An Incomplete (I) grade must be resolved within one semester. If not completed, it reverts to the tentative final grade set by the instructor, or becomes an F if no tentative grade was assigned.' },
    ],
    relatedSlugs: ['brac-cgpa-calculator', 'du-cgpa-calculator'],
  },
  {
    slug: 'buet-cgpa-calculator',
    name: 'Bangladesh University of Engineering and Technology',
    shortName: 'BUET',
    country: 'BD',
    city: 'Dhaka',
    gradingSystemId: 'ugc-bd',
    description: 'BUET is the premier engineering university in Bangladesh, established in 1962. It is highly competitive and produces top engineers, architects, and planners.',
    established: 1962,
    website: 'https://buet.ac.bd',
    totalStudents: '6,000+',
    academicStanding: [
      { label: 'First Class (Honors)', minCGPA: 3.75, maxCGPA: 4.00, description: 'Highest distinction' },
      { label: 'First Class', minCGPA: 3.00, maxCGPA: 3.74, description: 'Excellent performance' },
      { label: 'Second Class', minCGPA: 2.25, maxCGPA: 2.99, description: 'Good performance' },
      { label: 'Pass', minCGPA: 2.00, maxCGPA: 2.24, description: 'Minimum standard' },
    ],
    faq: [
      { question: 'What grading system does BUET use?', answer: 'BUET follows the UGC 4.0 grading system. Given the technical rigor of engineering programs, a CGPA of 3.00+ is considered excellent.' },
      { question: 'What is a good CGPA at BUET?', answer: 'Due to the high academic rigor at BUET, a CGPA above 3.00 is considered very good. Most top students maintain a CGPA between 3.25 and 3.75.' },
    ],
    relatedSlugs: ['ruet-cgpa-calculator', 'kuet-cgpa-calculator', 'sust-cgpa-calculator'],
  },
  {
    slug: 'ruet-cgpa-calculator',
    name: 'Rajshahi University of Engineering & Technology',
    shortName: 'RUET',
    country: 'BD',
    city: 'Rajshahi',
    gradingSystemId: 'ugc-bd',
    description: 'RUET is a leading public engineering university in Rajshahi, Bangladesh. It offers undergraduate and graduate programs in engineering and technology.',
    established: 1964,
    website: 'https://ruet.ac.bd',
    totalStudents: '4,500+',
    academicStanding: [
      { label: 'First Class', minCGPA: 3.00, maxCGPA: 4.00, description: 'Excellent academic performance' },
      { label: 'Second Class (Upper)', minCGPA: 2.50, maxCGPA: 2.99, description: 'Good performance' },
      { label: 'Second Class (Lower)', minCGPA: 2.00, maxCGPA: 2.49, description: 'Satisfactory performance' },
      { label: 'Pass', minCGPA: 1.50, maxCGPA: 1.99, description: 'Minimum passing standard' },
    ],
    faq: [
      { question: 'What grading system does RUET use?', answer: 'RUET follows the UGC standard 4.0 grading scale used across Bangladesh public universities.' },
      { question: 'How competitive is admission at RUET?', answer: 'RUET is one of the most competitive engineering universities in Bangladesh, with admission based on HSC results and an engineering admission test.' },
    ],
    relatedSlugs: ['buet-cgpa-calculator', 'kuet-cgpa-calculator'],
  },
  {
    slug: 'kuet-cgpa-calculator',
    name: 'Khulna University of Engineering & Technology',
    shortName: 'KUET',
    country: 'BD',
    city: 'Khulna',
    gradingSystemId: 'ugc-bd',
    description: 'KUET is a public engineering university in Khulna, Bangladesh, offering programs across engineering, science, and technology disciplines.',
    established: 1974,
    website: 'https://kuet.ac.bd',
    totalStudents: '4,000+',
    academicStanding: [
      { label: 'First Class', minCGPA: 3.00, maxCGPA: 4.00, description: 'Excellent academic performance' },
      { label: 'Second Class (Upper)', minCGPA: 2.50, maxCGPA: 2.99, description: 'Good performance' },
      { label: 'Second Class (Lower)', minCGPA: 2.00, maxCGPA: 2.49, description: 'Satisfactory performance' },
    ],
    faq: [
      { question: 'What grading system does KUET use?', answer: 'KUET uses the UGC standard grading system with a 4.0 scale, consistent with other public engineering universities in Bangladesh.' },
    ],
    relatedSlugs: ['buet-cgpa-calculator', 'ruet-cgpa-calculator', 'sust-cgpa-calculator'],
  },
  {
    slug: 'sust-cgpa-calculator',
    name: 'Shahjalal University of Science and Technology',
    shortName: 'SUST',
    country: 'BD',
    city: 'Sylhet',
    gradingSystemId: 'ugc-bd',
    description: 'SUST is a leading science and technology university in Sylhet, Bangladesh, known for its computer science and engineering programs.',
    established: 1991,
    website: 'https://sust.edu',
    totalStudents: '8,000+',
    academicStanding: [
      { label: 'First Class', minCGPA: 3.00, maxCGPA: 4.00, description: 'Excellent performance' },
      { label: 'Second Class (Upper)', minCGPA: 2.50, maxCGPA: 2.99, description: 'Good performance' },
      { label: 'Second Class (Lower)', minCGPA: 2.00, maxCGPA: 2.49, description: 'Satisfactory performance' },
    ],
    faq: [
      { question: 'What grading system does SUST use?', answer: 'SUST follows the UGC standard 4.0 grading scale. The university is known for its rigorous science and technology programs.' },
      { question: 'What are the popular departments at SUST?', answer: 'SUST is particularly well-known for its Computer Science & Engineering (CSE), Software Engineering, and Physics departments.' },
    ],
    relatedSlugs: ['buet-cgpa-calculator', 'du-cgpa-calculator'],
  },
  {
    slug: 'iit-delhi-cgpa-calculator',
    name: 'Indian Institute of Technology Delhi',
    shortName: 'IIT Delhi',
    country: 'IN',
    city: 'New Delhi',
    gradingSystemId: 'india-10',
    description: 'IIT Delhi is one of India\'s premier technical institutions, established in 1961. It uses a 10-point grading system and is ranked among the top engineering universities in Asia.',
    established: 1961,
    website: 'https://iitd.ac.in',
    totalStudents: '10,000+',
    academicStanding: [
      { label: 'High Distinction', minCGPA: 9.0, maxCGPA: 10.0, description: 'Outstanding performance' },
      { label: 'Distinction', minCGPA: 8.0, maxCGPA: 8.99, description: 'Excellent performance' },
      { label: 'First Class', minCGPA: 6.5, maxCGPA: 7.99, description: 'Good performance' },
      { label: 'Pass', minCGPA: 5.0, maxCGPA: 6.49, description: 'Minimum passing standard' },
    ],
    faq: [
      { question: 'What grading system does IIT Delhi use?', answer: 'IIT Delhi uses a 10-point grading scale where O (Outstanding) = 10, A+ = 9, A = 8, B+ = 7, B = 6, C = 5, and F = 0.' },
      { question: 'What is a good CGPA at IIT Delhi?', answer: 'A CGPA above 8.0 on the 10-point scale is considered excellent at IIT Delhi. Most top recruiters look for a CGPA of 7.5 or above.' },
      { question: 'How do I convert IIT Delhi CGPA to percentage?', answer: 'IIT Delhi uses its own formula: Percentage = (CGPA – 0.75) × 10. So a CGPA of 8.5 ≈ 77.5%. Always verify with the official transcript.' },
    ],
    relatedSlugs: ['iit-bombay-cgpa-calculator'],
  },
  {
    slug: 'iit-bombay-cgpa-calculator',
    name: 'Indian Institute of Technology Bombay',
    shortName: 'IIT Bombay',
    country: 'IN',
    city: 'Mumbai',
    gradingSystemId: 'india-10',
    description: 'IIT Bombay, established in 1958, is one of India\'s most prestigious institutions. It is consistently ranked among the top 5 universities in India and top 200 globally.',
    established: 1958,
    website: 'https://iitb.ac.in',
    totalStudents: '13,000+',
    academicStanding: [
      { label: 'High Distinction', minCGPA: 9.0, maxCGPA: 10.0, description: 'Outstanding performance' },
      { label: 'Distinction', minCGPA: 8.0, maxCGPA: 8.99, description: 'Excellent performance' },
      { label: 'First Class', minCGPA: 6.5, maxCGPA: 7.99, description: 'Good performance' },
      { label: 'Pass', minCGPA: 5.0, maxCGPA: 6.49, description: 'Minimum passing standard' },
    ],
    faq: [
      { question: 'What grading system does IIT Bombay use?', answer: 'IIT Bombay uses a 10-point grading system similar to other IITs, with grades ranging from O (10) to F (0).' },
      { question: 'What is a competitive CGPA at IIT Bombay?', answer: 'For top campus placements and research opportunities, a CGPA of 8.0+ is competitive. For premier companies, 8.5+ is preferred.' },
    ],
    relatedSlugs: ['iit-delhi-cgpa-calculator'],
  },
  {
    slug: 'nust-cgpa-calculator',
    name: 'National University of Sciences and Technology',
    shortName: 'NUST',
    country: 'PK',
    city: 'Islamabad',
    gradingSystemId: 'pakistan-hec',
    description: 'NUST is Pakistan\'s top-ranked university and one of the leading science and technology institutions in South Asia, established in 1991.',
    established: 1991,
    website: 'https://nust.edu.pk',
    totalStudents: '18,000+',
    academicStanding: [
      { label: 'President\'s Honor List', minCGPA: 3.90, maxCGPA: 4.00, description: 'Highest distinction' },
      { label: 'Dean\'s Honor List', minCGPA: 3.50, maxCGPA: 3.89, description: 'High distinction' },
      { label: 'First Division', minCGPA: 3.00, maxCGPA: 3.49, description: 'Excellent performance' },
      { label: 'Second Division', minCGPA: 2.00, maxCGPA: 2.99, description: 'Satisfactory performance' },
    ],
    faq: [
      { question: 'What grading system does NUST use?', answer: 'NUST follows the HEC Pakistan 4.0 grading scale. Students need a minimum CGPA of 2.0 to pass and 3.0+ for First Division.' },
      { question: 'How competitive is NUST?', answer: 'NUST is among the most competitive universities in Pakistan. Admission is based on the NET (NUST Entry Test) score and academic results.' },
    ],
    relatedSlugs: ['lums-cgpa-calculator'],
  },
  {
    slug: 'lums-cgpa-calculator',
    name: 'Lahore University of Management Sciences',
    shortName: 'LUMS',
    country: 'PK',
    city: 'Lahore',
    gradingSystemId: 'standard-4-0',
    description: 'LUMS is Pakistan\'s premier business and management university, established in 1984. It is known for its rigorous academic programs and strong alumni network.',
    established: 1984,
    website: 'https://lums.edu.pk',
    totalStudents: '5,000+',
    academicStanding: [
      { label: 'High Honors', minCGPA: 3.50, maxCGPA: 4.00, description: 'Top academic achievers' },
      { label: 'Honors', minCGPA: 3.00, maxCGPA: 3.49, description: 'Excellent performance' },
      { label: 'Good Standing', minCGPA: 2.00, maxCGPA: 2.99, description: 'Satisfactory performance' },
    ],
    faq: [
      { question: 'What grading system does LUMS use?', answer: 'LUMS uses the standard 4.0 GPA scale, similar to US universities. This includes plus/minus grades (A-, B+, etc.).' },
      { question: 'What GPA is required to make the Dean\'s List at LUMS?', answer: 'Students need a semester GPA of 3.50 or above to qualify for the Dean\'s List at LUMS.' },
    ],
    relatedSlugs: ['nust-cgpa-calculator'],
  },
];

export function getUniversityBySlug(slug: string): University | undefined {
  return UNIVERSITIES.find((u) => u.slug === slug);
}

export function getUniversitiesByCountry(country: Country): University[] {
  return UNIVERSITIES.filter((u) => u.country === country);
}

export const COUNTRY_NAMES: Record<Country, string> = {
  BD: 'Bangladesh',
  IN: 'India',
  PK: 'Pakistan',
};
