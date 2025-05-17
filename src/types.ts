import { ATTRIBUTE_LIST } from "./consts";

export type Attributes = {
  Strength: number;
  Dexterity: number;
  Constitution: number;
  Intelligence: number;
  Wisdom: number;
  Charisma: number;
};

export type Class = "Barbarian" | "Wizard" | "Bard";

export type Skills = Record<string, number>;

export type Attribute = (typeof ATTRIBUTE_LIST)[number];

type CharacterState = {
  name: string;
  attributes: Attributes;

  // attributesRemaining: number;
  skills: Skills;

  // remainingSkillPoints: number;
  // calcTotalSkill: (skillName: string) => number;
};

export type State = {
  addNewCharacter: () => void;
  incrementAttribute: ({
    characterIndex,
    attributeName,
  }: {
    characterIndex: number;
    attributeName: Attribute;
  }) => void;
  decrementAttribute: ({
    characterIndex,
    attributeName,
  }: {
    characterIndex: number;
    attributeName: Attribute;
  }) => void;
  incrementSkill: ({
    characterIndex,
    skillName,
  }: {
    characterIndex: number;
    skillName: string;
  }) => void;
  decrementSkill: ({
    characterIndex,
    skillName,
  }: {
    characterIndex: number;
    skillName: string;
  }) => void;
  getRemainingSkillPoints: (characterIndex: number) => number;
  getRemainingAttributePoints: (characterIndex: number) => number;
  calcTotalSkills: ({
    characterIndex,
    skillName,
  }: {
    characterIndex: number;
    skillName: string;
  }) => number;
  characters: CharacterState[];
};
