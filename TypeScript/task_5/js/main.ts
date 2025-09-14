// Task 10 â- Brand convention & Nominal typing

// Branded interfaces to differentiate Major vs Minor credits nominally
export interface MajorCredits {
  credits: number;
  brand: 'Major';
}

export interface MinorCredits {
  credits: number;
  brand: 'Minor';
}

// Helpers to build branded values (optional but handy)
export function major(credits: number): MajorCredits {
  return { credits, brand: 'Major' };
}

export function minor(credits: number): MinorCredits {
  return { credits, brand: 'Minor' };
}

// Sum functions: accept and return the corresponding branded type
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'Major' };
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'Minor' };
}

// Quick sanity check (optional)
// const a = major(3);
// const b = major(4);
// console.log(sumMajorCredits(a, b)); // { credits: 7, brand: 'Major' }
// const c = minor(2);
// const d = minor(5);
// console.log(sumMinorCredits(c, d)); // { credits: 7, brand: 'Minor' }
