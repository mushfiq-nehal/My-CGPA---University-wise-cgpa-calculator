export interface GradeEntry {
  minMark: number;
  maxMark: number;
  grade: string;
  point: number;
}

export interface GradingSystem {
  id: string;
  name: string;
  shortName: string;
  maxGPA: number;
  description: string;
  entries: GradeEntry[];
}

export const UGC_BANGLADESH: GradingSystem = {
  id: 'ugc-bd',
  name: 'UGC Standard Grading System (Bangladesh)',
  shortName: 'UGC Bangladesh',
  maxGPA: 4.0,
  description: 'Standard grading system prescribed by the University Grants Commission (UGC), used across major public and private universities in Bangladesh.',
  entries: [
    { minMark: 80, maxMark: 100, grade: 'A+', point: 4.00 },
    { minMark: 75, maxMark: 79,  grade: 'A',  point: 3.75 },
    { minMark: 70, maxMark: 74,  grade: 'A-', point: 3.50 },
    { minMark: 65, maxMark: 69,  grade: 'B+', point: 3.25 },
    { minMark: 60, maxMark: 64,  grade: 'B',  point: 3.00 },
    { minMark: 55, maxMark: 59,  grade: 'B-', point: 2.75 },
    { minMark: 50, maxMark: 54,  grade: 'C+', point: 2.50 },
    { minMark: 45, maxMark: 49,  grade: 'C',  point: 2.25 },
    { minMark: 40, maxMark: 44,  grade: 'D',  point: 2.00 },
    { minMark: 0,  maxMark: 39,  grade: 'F',  point: 0.00 },
  ],
};

export const STANDARD_4_0: GradingSystem = {
  id: 'standard-4-0',
  name: 'Standard 4.0 GPA Scale',
  shortName: '4.0 Scale (US)',
  maxGPA: 4.0,
  description: 'The standard 4.0 GPA scale used in the United States and many international universities.',
  entries: [
    { minMark: 93, maxMark: 100, grade: 'A',  point: 4.00 },
    { minMark: 90, maxMark: 92,  grade: 'A-', point: 3.70 },
    { minMark: 87, maxMark: 89,  grade: 'B+', point: 3.30 },
    { minMark: 83, maxMark: 86,  grade: 'B',  point: 3.00 },
    { minMark: 80, maxMark: 82,  grade: 'B-', point: 2.70 },
    { minMark: 77, maxMark: 79,  grade: 'C+', point: 2.30 },
    { minMark: 73, maxMark: 76,  grade: 'C',  point: 2.00 },
    { minMark: 70, maxMark: 72,  grade: 'C-', point: 1.70 },
    { minMark: 67, maxMark: 69,  grade: 'D+', point: 1.30 },
    { minMark: 65, maxMark: 66,  grade: 'D',  point: 1.00 },
    { minMark: 0,  maxMark: 64,  grade: 'F',  point: 0.00 },
  ],
};

export const INDIA_10_POINT: GradingSystem = {
  id: 'india-10',
  name: '10-Point Grading Scale (India)',
  shortName: '10.0 Scale (India)',
  maxGPA: 10.0,
  description: 'The 10-point grading scale used by IITs, NITs, and many Indian universities following UGC India guidelines.',
  entries: [
    { minMark: 90, maxMark: 100, grade: 'O',  point: 10.0 },
    { minMark: 80, maxMark: 89,  grade: 'A+', point: 9.0  },
    { minMark: 70, maxMark: 79,  grade: 'A',  point: 8.0  },
    { minMark: 60, maxMark: 69,  grade: 'B+', point: 7.0  },
    { minMark: 50, maxMark: 59,  grade: 'B',  point: 6.0  },
    { minMark: 40, maxMark: 49,  grade: 'C',  point: 5.0  },
    { minMark: 0,  maxMark: 39,  grade: 'F',  point: 0.0  },
  ],
};

export const PAKISTAN_HEC: GradingSystem = {
  id: 'pakistan-hec',
  name: 'HEC Pakistan Grading Scale',
  shortName: 'HEC Pakistan',
  maxGPA: 4.0,
  description: 'The grading scale recommended by the Higher Education Commission (HEC) of Pakistan.',
  entries: [
    { minMark: 90, maxMark: 100, grade: 'A',  point: 4.00 },
    { minMark: 85, maxMark: 89,  grade: 'A-', point: 3.70 },
    { minMark: 80, maxMark: 84,  grade: 'B+', point: 3.30 },
    { minMark: 75, maxMark: 79,  grade: 'B',  point: 3.00 },
    { minMark: 71, maxMark: 74,  grade: 'B-', point: 2.70 },
    { minMark: 68, maxMark: 70,  grade: 'C+', point: 2.30 },
    { minMark: 64, maxMark: 67,  grade: 'C',  point: 2.00 },
    { minMark: 60, maxMark: 63,  grade: 'C-', point: 1.70 },
    { minMark: 57, maxMark: 59,  grade: 'D+', point: 1.30 },
    { minMark: 53, maxMark: 56,  grade: 'D',  point: 1.00 },
    { minMark: 45, maxMark: 52,  grade: 'D-', point: 0.70 },
    { minMark: 0,  maxMark: 44,  grade: 'F',  point: 0.00 },
  ],
};

export const FIVE_POINT: GradingSystem = {
  id: 'five-point',
  name: '5.0 GPA Scale',
  shortName: '5.0 Scale',
  maxGPA: 5.0,
  description: 'A 5-point GPA scale used by some universities, providing additional grade differentiation.',
  entries: [
    { minMark: 90, maxMark: 100, grade: 'A+', point: 5.00 },
    { minMark: 80, maxMark: 89,  grade: 'A',  point: 4.00 },
    { minMark: 70, maxMark: 79,  grade: 'B',  point: 3.00 },
    { minMark: 60, maxMark: 69,  grade: 'C',  point: 2.00 },
    { minMark: 50, maxMark: 59,  grade: 'D',  point: 1.00 },
    { minMark: 0,  maxMark: 49,  grade: 'F',  point: 0.00 },
  ],
};

// ─── BRAC University Grading System ──────────────────────────────────────────
// Source: BRAC University official academic regulations (Fall 2020 onwards)
export const BRACU: GradingSystem = {
  id: 'bracu',
  name: 'BRAC University Grading System',
  shortName: 'BRACU',
  maxGPA: 4.0,
  description: 'Official grading system of BRAC University (introduced from Fall 2020 semester). Uses a 13-tier scale with A+ and A both earning 4.0 grade points for exceptional and excellent performance.',
  entries: [
    { minMark: 97, maxMark: 100, grade: 'A+', point: 4.0 },
    { minMark: 90, maxMark: 96,  grade: 'A',  point: 4.0 },
    { minMark: 85, maxMark: 89,  grade: 'A-', point: 3.7 },
    { minMark: 80, maxMark: 84,  grade: 'B+', point: 3.3 },
    { minMark: 75, maxMark: 79,  grade: 'B',  point: 3.0 },
    { minMark: 70, maxMark: 74,  grade: 'B-', point: 2.7 },
    { minMark: 65, maxMark: 69,  grade: 'C+', point: 2.3 },
    { minMark: 60, maxMark: 64,  grade: 'C',  point: 2.0 },
    { minMark: 57, maxMark: 59,  grade: 'C-', point: 1.7 },
    { minMark: 55, maxMark: 56,  grade: 'D+', point: 1.3 },
    { minMark: 52, maxMark: 54,  grade: 'D',  point: 1.0 },
    { minMark: 50, maxMark: 51,  grade: 'D-', point: 0.7 },
    { minMark: 0,  maxMark: 49,  grade: 'F',  point: 0.0 },
  ],
};

// ─── North South University Grading System ────────────────────────────────────
// Source: NSU official academic regulations
export const NSU: GradingSystem = {
  id: 'nsu',
  name: 'North South University Grading System',
  shortName: 'NSU',
  maxGPA: 4.0,
  description: 'Official grading system of North South University. Uses an 11-tier scale on a 4.0 maximum. Only grades A through F count toward GPA calculation; I (Incomplete) and W (Withdrawal) are excluded.',
  entries: [
    { minMark: 93, maxMark: 100, grade: 'A',  point: 4.0 },
    { minMark: 90, maxMark: 92,  grade: 'A-', point: 3.7 },
    { minMark: 87, maxMark: 89,  grade: 'B+', point: 3.3 },
    { minMark: 83, maxMark: 86,  grade: 'B',  point: 3.0 },
    { minMark: 80, maxMark: 82,  grade: 'B-', point: 2.7 },
    { minMark: 77, maxMark: 79,  grade: 'C+', point: 2.3 },
    { minMark: 73, maxMark: 76,  grade: 'C',  point: 2.0 },
    { minMark: 70, maxMark: 72,  grade: 'C-', point: 1.7 },
    { minMark: 67, maxMark: 69,  grade: 'D+', point: 1.3 },
    { minMark: 60, maxMark: 66,  grade: 'D',  point: 1.0 },
    { minMark: 0,  maxMark: 59,  grade: 'F',  point: 0.0 },
  ],
};

export const ALL_GRADING_SYSTEMS: GradingSystem[] = [
  UGC_BANGLADESH,
  BRACU,
  NSU,
  STANDARD_4_0,
  INDIA_10_POINT,
  PAKISTAN_HEC,
  FIVE_POINT,
];

export function getGradingSystemById(id: string): GradingSystem | undefined {
  return ALL_GRADING_SYSTEMS.find((s) => s.id === id);
}
