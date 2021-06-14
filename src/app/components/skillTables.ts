import { skill } from "./skill";

export const AWARENESS_SKILL_TABLE: skill[] = [
    { name: 'Concentration', lvl: 0, stat: 0, base: 0 },
    { name: 'Conceal/Reveal Object', lvl: 0, stat: 0, base: 0 },
    { name: 'Lip Reading', lvl: 0, stat: 0, base: 0 },
    { name: 'Perception', lvl: 0, stat: 0, base: 0 },
    { name: 'Tracking', lvl: 0, stat: 0, base: 0 }
];

export const BODY_SKILL_TABLE: skill[] = [
    { name: 'Athletics', lvl: 0, stat: 0, base: 0 },
    { name: 'Contortionist', lvl: 0, stat: 0, base: 0 },
    { name: 'Dance', lvl: 0, stat: 0, base: 0 },
    { name: 'Endurance', lvl: 0, stat: 0, base: 0 },
    { name: 'Resist', lvl: 0, stat: 0, base: 0 },
    { name: 'Stealth', lvl: 0, stat: 0, base: 0 }
];

export const CONTROL_SKILL_TABLE: skill[] = [
    { name: 'Drive Land Vehicle', lvl: 0, stat: 0, base: 0 },
    { name: 'Pilot Air Vehicle(x2)', lvl: 0, stat: 0, base: 0 },
    { name: 'Pilot Sea Vehicle', lvl: 0, stat: 0, base: 0 },
    { name: 'Riding', lvl: 0, stat: 0, base: 0 }
];

export const EDUCATION_SKILL_TABLE: skill[] = [
    { name: 'Accounting', lvl: 0, stat: 0, base: 0 },
    { name: 'Animal Handling', lvl: 0, stat: 0, base: 0 },
    { name: 'Bureaucracy', lvl: 0, stat: 0, base: 0 },
    { name: 'Business', lvl: 0, stat: 0, base: 0 },
    { name: 'Composition', lvl: 0, stat: 0, base: 0 },
    { name: 'Criminology', lvl: 0, stat: 0, base: 0 },
    { name: 'Cryptography', lvl: 0, stat: 0, base: 0 },
    { name: 'Deduction', lvl: 0, stat: 0, base: 0 },
    { name: 'Education', lvl: 0, stat: 0, base: 0 },
    { name: 'Gamble', lvl: 0, stat: 0, base: 0 },
    { name: 'Library Search', lvl: 0, stat: 0, base: 0 },
    { name: 'Tactics', lvl: 0, stat: 0, base: 0 },
    { name: 'Wilderness Survival', lvl: 0, stat: 0, base: 0 },
    { name: 'Language', lvl: 0, stat: 0, base: 0 },     //these last three have sub-skills of some sort
    { name: 'Local Expert', lvl: 0, stat: 0, base: 0 },
    { name: 'Science', lvl: 0, stat: 0, base: 0 },
];

export const FIGHTING_SKILL_TABLE: skill[] = [
    { name: 'Brawling', lvl: 0, stat: 0, base: 0 },
    { name: 'Evasion', lvl: 0, stat: 0, base: 0 },
    { name: 'Martial Arts(x2)', lvl: 0, stat: 0, base: 0 },
    { name: 'Melee Weapon', lvl: 0, stat: 0, base: 0 }
];

export const RANGED_SKILL_TABLE: skill[] = [
    { name: 'Archery', lvl: 0, stat: 0, base: 0 },
    { name: 'Autofire(x2)', lvl: 0, stat: 0, base: 0 },
    { name: 'Handgun', lvl: 0, stat: 0, base: 0 },
    { name: 'Heavy Weapons(x2)', lvl: 0, stat: 0, base: 0 },
    { name: 'Shoulder Arms', lvl: 0, stat: 0, base: 0 }
];

export const PERFORMANCE_SKILL_TABLE: skill[] = [
    { name: 'Acting', lvl: 0, stat: 0, base: 0 },
    { name: 'Play Instrument', lvl: 0, stat: 0, base: 0 }       //this has two sub-skills
];

export const SOCIAL_SKILL_TABLE: skill[] = [
    { name: 'Bribery', lvl: 0, stat: 0, base: 0 },
    { name: 'Conversation', lvl: 0, stat: 0, base: 0 },
    { name: 'Human Perception', lvl: 0, stat: 0, base: 0 },
    { name: 'Interrogation', lvl: 0, stat: 0, base: 0 },
    { name: 'Persuasion', lvl: 0, stat: 0, base: 0 },
    { name: 'Personal Grooming', lvl: 0, stat: 0, base: 0 },
    { name: 'Streetwise', lvl: 0, stat: 0, base: 0 },
    { name: 'Trading', lvl: 0, stat: 0, base: 0 },
    { name: 'Wardrobe & Style', lvl: 0, stat: 0, base: 0 }
];

export const TECHNIQUE_SKILL_TABLE: skill[] = [
    { name: 'Air Vehicle Tech', lvl: 0, stat: 0, base: 0 },
    { name: 'Basic Tech', lvl: 0, stat: 0, base: 0 },
    { name: 'Cybertech', lvl: 0, stat: 0, base: 0 },
    { name: 'Demolitions(x2)', lvl: 0, stat: 0, base: 0 },
    { name: 'Electronics/Security Tech(x2)', lvl: 0, stat: 0, base: 0 },
    { name: 'First Aid', lvl: 0, stat: 0, base: 0 },
    { name: 'Forgery', lvl: 0, stat: 0, base: 0 },
    { name: 'Land Vehicle Tech', lvl: 0, stat: 0, base: 0 },
    { name: 'Paint/Draw/Sculpt', lvl: 0, stat: 0, base: 0 },
    { name: 'Paramedic(x2)', lvl: 0, stat: 0, base: 0 },
    { name: 'Photography/Film', lvl: 0, stat: 0, base: 0 },
    { name: 'Pick Lock', lvl: 0, stat: 0, base: 0 },
    { name: 'Pick Pocket', lvl: 0, stat: 0, base: 0 },
    { name: 'Sea Vehicle Tech', lvl: 0, stat: 0, base: 0 }, 
    { name: 'Weaponstech', lvl: 0, stat: 0, base: 0 }
];