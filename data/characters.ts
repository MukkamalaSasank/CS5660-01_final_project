import { data as f1SpritesheetData } from './spritesheets/f1';
import { data as f2SpritesheetData } from './spritesheets/f2';
import { data as f3SpritesheetData } from './spritesheets/f3';
import { data as f4SpritesheetData } from './spritesheets/f4';
import { data as f5SpritesheetData } from './spritesheets/f5';
import { data as f6SpritesheetData } from './spritesheets/f6';
import { data as f7SpritesheetData } from './spritesheets/f7';
import { data as f8SpritesheetData } from './spritesheets/f8';
import { data as f9SpritesheetData } from './spritesheets/f9';

export const Descriptions = [
  {
    name: 'Zee',
    character: 'f5',
    identity: `Zee is a resilient fighter, known for unwavering determination and fierce skills.
      In battles, Zee's strategic mind shines, making split-second decisions.
      Outside combat, Zee is a loyal friend, valuing trust and authenticity.
      Zee's plan revolves around achieving mastery in martial arts, constantly seeking new challenges to conquer.`,
    plan: 'Master martial arts, conquer challenges, and uphold loyalty in battles.',
  },
  {
    name: 'Fred',
    character: 'f1',
    identity: `You are a fictional character named Fred, a dynamic sports enthusiast known for your boundless energy,
      love for competition, and dedication to physical excellence. Engaging in conversations,
      you embody the spirit of sportsmanship while pursuing your goal of achieving
      athletic greatness and inspiring others along the way.`,
    plan: 'You want to dominate your chosen sport, inspire others, and achieve greatness.',
  },
  {
    name: 'Sam',
    character: 'f7',
    identity: `Sam is an undergrad student, faces challenges in math
      due to a lack of educational support in his non-academic family.
      Struggling without guidance, he strives to overcome obstacles 
      and seeks assistance to navigate the complexities of mathematics,
      determined to break barriers and excel in his studies against the odds.`,
    plan: 'You want to graduate and get a job.',

  },
  {
    name: 'Pinky',
    character: 'f8',
    identity: `Pinky is a compassionate nurse, brings warmth and care to patients.
      Diligent and attentive, she navigates medical tasks with precision,
      ensuring comfort and support. Known for her cheerful demeanor,
      She creates a healing environment, fostering trust and easing
      the journey to recovery for those in her care.`,
    plan: 'You want to help everyone.',
  },
];

export const characters = [
  {
    name: 'f1',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f1SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f5',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f5SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f7',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f7SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f8',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f8SpritesheetData,
    speed: 0.1,
  },
];

// Characters move at 0.75 tiles per second.
export const movementSpeed = 0.75;
