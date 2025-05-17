import type { Attributes, Class, Skills } from "../types/types";

export const ATTRIBUTE_LIST = [
  "Strength",
  "Dexterity",
  "Constitution",
  "Intelligence",
  "Wisdom",
  "Charisma",
];

export const CLASS_LIST: Record<Class, Attributes> = {
  Barbarian: {
    Strength: 14,
    Dexterity: 9,
    Constitution: 9,
    Intelligence: 9,
    Wisdom: 9,
    Charisma: 9,
  },
  Wizard: {
    Strength: 9,
    Dexterity: 9,
    Constitution: 9,
    Intelligence: 14,
    Wisdom: 9,
    Charisma: 9,
  },
  Bard: {
    Strength: 9,
    Dexterity: 9,
    Constitution: 9,
    Intelligence: 9,
    Wisdom: 9,
    Charisma: 14,
  },
};

export const SKILL_LIST = [
  { name: "Acrobatics", attributeModifier: "Dexterity" },
  { name: "Animal Handling", attributeModifier: "Wisdom" },
  { name: "Arcana", attributeModifier: "Intelligence" },
  { name: "Athletics", attributeModifier: "Strength" },
  { name: "Deception", attributeModifier: "Charisma" },
  { name: "History", attributeModifier: "Intelligence" },
  { name: "Insight", attributeModifier: "Wisdom" },
  { name: "Intimidation", attributeModifier: "Charisma" },
  { name: "Investigation", attributeModifier: "Intelligence" },
  { name: "Medicine", attributeModifier: "Wisdom" },
  { name: "Nature", attributeModifier: "Intelligence" },
  { name: "Perception", attributeModifier: "Wisdom" },
  { name: "Performance", attributeModifier: "Charisma" },
  { name: "Persuasion", attributeModifier: "Charisma" },
  { name: "Religion", attributeModifier: "Intelligence" },
  { name: "Sleight of Hand", attributeModifier: "Dexterity" },
  { name: "Stealth", attributeModifier: "Dexterity" },
  { name: "Survival", attributeModifier: "Wisdom" },
];

export const DEFAULT_SKILLS = SKILL_LIST.reduce<Skills>((acc, { name }) => {
  acc[name] = 0;
  return acc;
}, {});

const DEFAULT_ATTRIBUTE_VALUE = 10;

export const DEFAULT_ATTRIBUTES = {
  Strength: DEFAULT_ATTRIBUTE_VALUE,
  Dexterity: DEFAULT_ATTRIBUTE_VALUE,
  Constitution: DEFAULT_ATTRIBUTE_VALUE,
  Intelligence: DEFAULT_ATTRIBUTE_VALUE,
  Wisdom: DEFAULT_ATTRIBUTE_VALUE,
  Charisma: DEFAULT_ATTRIBUTE_VALUE,
};

export const DEFAULT_CHARACTER = {
  name: "Character 1",
  skills: { ...DEFAULT_SKILLS },
  attributes: { ...DEFAULT_ATTRIBUTES },
};

export const MAX_ATTRIBUTE_POINTS = 70;

export const API_URL =
  "https://recruiting.verylongdomaintotestwith.ca/api/{laustin}/character ";
