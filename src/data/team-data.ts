export interface TeamMember {
  name: string;
  title: string;
  department: string;
  experience: string;
  bio: string;
  initials: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Alex Chen',
    title: 'Anode Engineering Specialist',
    department: 'Anode Team',
    experience: '10+ years combined experience',
    bio: 'Alex supports substrate design and electrochemical review for custom anodes, including geometry and operating conditions.',
    initials: 'AC',
  },
  {
    name: 'Tony Qi',
    title: 'Welding & Coating Operator',
    department: 'Anode Team',
    experience: '7+ years average experience',
    bio: 'Tony works on preparation, coating and welding steps that need controlled execution and inspection during anode production.',
    initials: 'TQ',
  },
  {
    name: 'Jakey Lu',
    title: 'Lead PEM Systems Engineer',
    department: 'PEM Electrolyzer Team',
    experience: '10+ years with Titanium Parts',
    bio: 'Jakey leads PEM stack and hydrogen-system technical work, reviewing system performance, interfaces and the production basis for each project.',
    initials: 'JL',
  },
  {
    name: 'Grace Zhang',
    title: 'Customer Service Manager',
    department: 'PEM Electrolyzer Team',
    experience: '6 years with Titanium Parts',
    bio: 'Grace supports PEM customers from inquiry and quotation through order coordination and after-sales communication.',
    initials: 'GZ',
  },
  {
    name: 'Tom Yang',
    title: 'PEM Assembly Engineer',
    department: 'PEM Electrolyzer Team',
    experience: '8+ years of experience',
    bio: 'Tom works on PEM stack assembly and system integration, including mechanical and electrical interfaces defined in the approved design.',
    initials: 'TY',
  },
  {
    name: 'Kim Liu',
    title: 'Hydrogen System Tester',
    department: 'PEM Electrolyzer Team',
    experience: '7+ years of experience',
    bio: 'Kim supports system testing, including hydrogen output, pressure stability and the checks specified for release or FAT.',
    initials: 'KL',
  },
];
