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

// ─── North South University Grading System ──────────────────────────────────
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

// ─── United International University Grading System ──────────────────────────
export const UIU: GradingSystem = {
  id: 'uiu',
  name: 'United International University Grading System',
  shortName: 'UIU',
  maxGPA: 4.0,
  description: 'Official grading system of United International University (UIU), Bangladesh. Uses a 10-tier scale on a 4.0 maximum.',
  entries: [
    { minMark: 90, maxMark: 100, grade: 'A',  point: 4.00 },
    { minMark: 86, maxMark: 89,  grade: 'A-', point: 3.67 },
    { minMark: 82, maxMark: 85,  grade: 'B+', point: 3.33 },
    { minMark: 78, maxMark: 81,  grade: 'B',  point: 3.00 },
    { minMark: 74, maxMark: 77,  grade: 'B-', point: 2.67 },
    { minMark: 70, maxMark: 73,  grade: 'C+', point: 2.33 },
    { minMark: 66, maxMark: 69,  grade: 'C',  point: 2.00 },
    { minMark: 62, maxMark: 65,  grade: 'C-', point: 1.67 },
    { minMark: 58, maxMark: 61,  grade: 'D+', point: 1.33 },
    { minMark: 55, maxMark: 57,  grade: 'D',  point: 1.00 },
    { minMark: 0,  maxMark: 54,  grade: 'F',  point: 0.00 },
  ],
};

// ─── Independent University, Bangladesh Grading System ──────────────────────
export const IUB: GradingSystem = {
  id: 'iub',
  name: 'Independent University, Bangladesh Grading System',
  shortName: 'IUB',
  maxGPA: 4.0,
  description: 'Official grading system of Independent University, Bangladesh (IUB). Uses an 11-tier scale on a 4.0 maximum.',
  entries: [
    { minMark: 90, maxMark: 100, grade: 'A',  point: 4.00 },
    { minMark: 85, maxMark: 89,  grade: 'A-', point: 3.70 },
    { minMark: 80, maxMark: 84,  grade: 'B+', point: 3.30 },
    { minMark: 75, maxMark: 79,  grade: 'B',  point: 3.00 },
    { minMark: 70, maxMark: 74,  grade: 'B-', point: 2.70 },
    { minMark: 65, maxMark: 69,  grade: 'C+', point: 2.30 },
    { minMark: 60, maxMark: 64,  grade: 'C',  point: 2.00 },
    { minMark: 55, maxMark: 59,  grade: 'C-', point: 1.70 },
    { minMark: 50, maxMark: 54,  grade: 'D+', point: 1.30 },
    { minMark: 45, maxMark: 49,  grade: 'D',  point: 1.00 },
    { minMark: 0,  maxMark: 44,  grade: 'F',  point: 0.00 },
  ],
};

// ─── Vellore Institute of Technology (VIT) Grading System ─────────────────────
export const VIT: GradingSystem = {
  id: 'vit',
  name: 'Vellore Institute of Technology Grading System',
  shortName: 'VIT',
  maxGPA: 10.0,
  description: 'Official relative grading scale of VIT (Vellore Institute of Technology). Measures CGPA on a 10.0 scale.',
  entries: [
    { minMark: 90, maxMark: 100, grade: 'S', point: 10.0 },
    { minMark: 80, maxMark: 89,  grade: 'A', point: 9.0  },
    { minMark: 70, maxMark: 79,  grade: 'B', point: 8.0  },
    { minMark: 60, maxMark: 69,  grade: 'C', point: 7.0  },
    { minMark: 55, maxMark: 59,  grade: 'D', point: 6.0  },
    { minMark: 50, maxMark: 54,  grade: 'E', point: 5.0  },
    { minMark: 0,  maxMark: 49,  grade: 'F', point: 0.0  },
  ],
};

// ─── SRM Institute of Science and Technology Grading System ───────────────────
export const SRM: GradingSystem = {
  id: 'srm',
  name: 'SRM Institute of Science and Technology Grading System',
  shortName: 'SRM',
  maxGPA: 10.0,
  description: 'Official absolute grading system of SRM Institute of Science and Technology (SRMIST). Measures CGPA on a 10.0 scale.',
  entries: [
    { minMark: 91, maxMark: 100, grade: 'O',  point: 10.0 },
    { minMark: 81, maxMark: 90,  grade: 'A+', point: 9.0  },
    { minMark: 71, maxMark: 80,  grade: 'A',  point: 8.0  },
    { minMark: 61, maxMark: 70,  grade: 'B+', point: 7.0  },
    { minMark: 56, maxMark: 60,  grade: 'B',  point: 6.0  },
    { minMark: 50, maxMark: 55,  grade: 'C',  point: 5.0  },
    { minMark: 0,  maxMark: 49,  grade: 'F',  point: 0.0  },
  ],
};

// ─── APJ Abdul Kalam Technological University (KTU) Grading System ────────────
export const KTU: GradingSystem = {
  id: 'ktu',
  name: 'APJ Abdul Kalam Technological University Grading System',
  shortName: 'KTU Kerala',
  maxGPA: 10.0,
  description: 'Official grading system of KTU Kerala. Letter grades and credit-points are awarded based on raw marks.',
  entries: [
    { minMark: 90, maxMark: 100, grade: 'S',  point: 10.0 },
    { minMark: 85, maxMark: 89,  grade: 'A+', point: 9.0  },
    { minMark: 80, maxMark: 84,  grade: 'A',  point: 8.5  },
    { minMark: 75, maxMark: 79,  grade: 'B+', point: 8.0  },
    { minMark: 70, maxMark: 74,  grade: 'B',  point: 7.0  },
    { minMark: 65, maxMark: 69,  grade: 'C',  point: 6.0  },
    { minMark: 60, maxMark: 64,  grade: 'P',  point: 5.0  },
    { minMark: 0,  maxMark: 59,  grade: 'F',  point: 0.0  },
  ],
};

// ─── Guru Gobind Singh Indraprastha University (IPU) Grading System ───────────
export const IPU: GradingSystem = {
  id: 'ipu',
  name: 'Guru Gobind Singh Indraprastha University Grading System',
  shortName: 'GGSIPU IPU',
  maxGPA: 10.0,
  description: 'Official grading system of GGSIPU IPU, Delhi. Uses a 10-point scale for SGPA and CGPA calculation.',
  entries: [
    { minMark: 90, maxMark: 100, grade: 'O',  point: 10.0 },
    { minMark: 75, maxMark: 89,  grade: 'A+', point: 9.0  },
    { minMark: 65, maxMark: 74,  grade: 'A',  point: 8.0  },
    { minMark: 55, maxMark: 64,  grade: 'B+', point: 7.0  },
    { minMark: 50, maxMark: 54,  grade: 'B',  point: 6.0  },
    { minMark: 45, maxMark: 49,  grade: 'C',  point: 5.0  },
    { minMark: 40, maxMark: 44,  grade: 'P',  point: 4.0  },
    { minMark: 0,  maxMark: 39,  grade: 'F',  point: 0.0  },
  ],
};

// ─── Saveetha Institute of Medical and Technical Sciences Grading System ──────
export const SAVEETHA: GradingSystem = {
  id: 'saveetha',
  name: 'Saveetha Institute of Medical and Technical Sciences Grading System',
  shortName: 'Saveetha',
  maxGPA: 10.0,
  description: 'Official grading system of Saveetha University (SIMATS), Chennai. Uses a 10-point scale with RA for Re-Appear.',
  entries: [
    { minMark: 91, maxMark: 100, grade: 'O',  point: 10.0 },
    { minMark: 81, maxMark: 90,  grade: 'A+', point: 9.0  },
    { minMark: 71, maxMark: 80,  grade: 'A',  point: 8.0  },
    { minMark: 61, maxMark: 70,  grade: 'B+', point: 7.0  },
    { minMark: 50, maxMark: 60,  grade: 'B',  point: 6.0  },
    { minMark: 0,  maxMark: 49,  grade: 'RA', point: 0.0  },
  ],
};

// ─── University of Agriculture Faisalabad Grading System ─────────────────────
export const UAF: GradingSystem = {
  id: 'uaf',
  name: 'University of Agriculture Faisalabad Grading System',
  shortName: 'UAF',
  maxGPA: 4.0,
  description: 'Official grading system of University of Agriculture, Faisalabad (UAF). Uses a 5-tier absolute grading scale.',
  entries: [
    { minMark: 80, maxMark: 100, grade: 'A', point: 4.0 },
    { minMark: 65, maxMark: 79,  grade: 'B', point: 3.0 },
    { minMark: 50, maxMark: 64,  grade: 'C', point: 2.0 },
    { minMark: 40, maxMark: 49,  grade: 'D', point: 1.0 },
    { minMark: 0,  maxMark: 39,  grade: 'F', point: 0.0 },
  ],
};

// ─── COMSATS University Islamabad Grading System ──────────────────────────────
export const COMSATS: GradingSystem = {
  id: 'comsats',
  name: 'COMSATS University Islamabad Grading System',
  shortName: 'COMSATS',
  maxGPA: 4.0,
  description: 'Official grading system of COMSATS University Islamabad (CUI). Uses an HEC-aligned 9-tier scale.',
  entries: [
    { minMark: 90, maxMark: 100, grade: 'A',  point: 4.0 },
    { minMark: 85, maxMark: 89,  grade: 'A-', point: 3.7 },
    { minMark: 80, maxMark: 84,  grade: 'B+', point: 3.3 },
    { minMark: 75, maxMark: 79,  grade: 'B',  point: 3.0 },
    { minMark: 70, maxMark: 74,  grade: 'B-', point: 2.7 },
    { minMark: 65, maxMark: 69,  grade: 'C+', point: 2.3 },
    { minMark: 60, maxMark: 64,  grade: 'C',  point: 2.0 },
    { minMark: 50, maxMark: 59,  grade: 'D',  point: 1.0 },
    { minMark: 0,  maxMark: 49,  grade: 'F',  point: 0.0 },
  ],
};

// ─── University of Management and Technology Grading System ──────────────────
export const UMT: GradingSystem = {
  id: 'umt',
  name: 'University of Management and Technology Grading System',
  shortName: 'UMT Lahore',
  maxGPA: 4.0,
  description: 'Official grading system of UMT Lahore. Uses a 10-tier relative grading scale aligned with HEC guidelines.',
  entries: [
    { minMark: 85, maxMark: 100, grade: 'A',  point: 4.0 },
    { minMark: 80, maxMark: 84,  grade: 'A-', point: 3.7 },
    { minMark: 75, maxMark: 79,  grade: 'B+', point: 3.3 },
    { minMark: 70, maxMark: 74,  grade: 'B',  point: 3.0 },
    { minMark: 65, maxMark: 69,  grade: 'B-', point: 2.7 },
    { minMark: 61, maxMark: 64,  grade: 'C+', point: 2.3 },
    { minMark: 58, maxMark: 60,  grade: 'C',  point: 2.0 },
    { minMark: 55, maxMark: 57,  grade: 'C-', point: 1.7 },
    { minMark: 50, maxMark: 54,  grade: 'D',  point: 1.0 },
    { minMark: 0,  maxMark: 49,  grade: 'F',  point: 0.0 },
  ],
};

// ─── University of Central Punjab Grading System ──────────────────────────────
export const UCP: GradingSystem = {
  id: 'ucp',
  name: 'University of Central Punjab Grading System',
  shortName: 'UCP Lahore',
  maxGPA: 4.0,
  description: 'Official grading system of UCP Lahore. Uses an 11-tier relative grading scale aligned with HEC guidelines.',
  entries: [
    { minMark: 90, maxMark: 100, grade: 'A',  point: 4.00 },
    { minMark: 86, maxMark: 89,  grade: 'A-', point: 3.67 },
    { minMark: 81, maxMark: 85,  grade: 'B+', point: 3.33 },
    { minMark: 77, maxMark: 80,  grade: 'B',  point: 3.00 },
    { minMark: 72, maxMark: 76,  grade: 'B-', point: 2.67 },
    { minMark: 68, maxMark: 71,  grade: 'C+', point: 2.33 },
    { minMark: 63, maxMark: 67,  grade: 'C',  point: 2.00 },
    { minMark: 58, maxMark: 62,  grade: 'C-', point: 1.67 },
    { minMark: 54, maxMark: 57,  grade: 'D+', point: 1.33 },
    { minMark: 50, maxMark: 53,  grade: 'D',  point: 1.00 },
    { minMark: 0,  maxMark: 49,  grade: 'F',  point: 0.00 },
  ],
};

// ─── University of Lahore Grading System ──────────────────────────────────────
export const UOL: GradingSystem = {
  id: 'uol',
  name: 'University of Lahore Grading System',
  shortName: 'UOL',
  maxGPA: 4.0,
  description: 'Official absolute grading system of University of Lahore. Uses an 11-tier grading scale on a 4.00 maximum.',
  entries: [
    { minMark: 85, maxMark: 100, grade: 'A',  point: 4.00 },
    { minMark: 80, maxMark: 84,  grade: 'A-', point: 3.67 },
    { minMark: 75, maxMark: 79,  grade: 'B+', point: 3.33 },
    { minMark: 71, maxMark: 74,  grade: 'B',  point: 3.00 },
    { minMark: 68, maxMark: 70,  grade: 'B-', point: 2.67 },
    { minMark: 64, maxMark: 67,  grade: 'C+', point: 2.33 },
    { minMark: 60, maxMark: 63,  grade: 'C',  point: 2.00 },
    { minMark: 57, maxMark: 59,  grade: 'C-', point: 1.67 },
    { minMark: 53, maxMark: 56,  grade: 'D+', point: 1.33 },
    { minMark: 50, maxMark: 52,  grade: 'D',  point: 1.00 },
    { minMark: 0,  maxMark: 49,  grade: 'F',  point: 0.00 },
  ],
};

// ─── University of the Punjab Grading System ──────────────────────────────────
export const PU: GradingSystem = {
  id: 'pu',
  name: 'University of the Punjab Grading System',
  shortName: 'Punjab University',
  maxGPA: 4.0,
  description: 'Official absolute grading system of University of the Punjab (PU), Lahore. Uses a 10-tier semester scale.',
  entries: [
    { minMark: 85, maxMark: 100, grade: 'A',  point: 4.00 },
    { minMark: 80, maxMark: 84,  grade: 'A-', point: 3.70 },
    { minMark: 75, maxMark: 79,  grade: 'B+', point: 3.30 },
    { minMark: 70, maxMark: 74,  grade: 'B',  point: 3.00 },
    { minMark: 65, maxMark: 69,  grade: 'B-', point: 2.70 },
    { minMark: 61, maxMark: 64,  grade: 'C+', point: 2.30 },
    { minMark: 58, maxMark: 60,  grade: 'C',  point: 2.00 },
    { minMark: 55, maxMark: 57,  grade: 'C-', point: 1.70 },
    { minMark: 50, maxMark: 54,  grade: 'D',  point: 1.00 },
    { minMark: 0,  maxMark: 49,  grade: 'F',  point: 0.00 },
  ],
};

export const ALL_GRADING_SYSTEMS: GradingSystem[] = [
  UGC_BANGLADESH,
  BRACU,
  NSU,
  UIU,
  IUB,
  VIT,
  SRM,
  KTU,
  IPU,
  SAVEETHA,
  UAF,
  COMSATS,
  UMT,
  UCP,
  UOL,
  PU,
  STANDARD_4_0,
  INDIA_10_POINT,
  PAKISTAN_HEC,
  FIVE_POINT,
];

export function getGradingSystemById(id: string): GradingSystem | undefined {
  return ALL_GRADING_SYSTEMS.find((s) => s.id === id);
}

