interface listOfBody {
  0: "back";
  1: "cardio";
  2: "chest";
  3: "lower arms";
  4: "lower legs";
  5: "neck";
  6: "shoulders";
  7: "upper arms";
  8: "upper legs";
  9: "waist";
}

export interface exercise {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}

export type equipmentList =
  | "assisted"
  | "band"
  | "barbell"
  | "body weight"
  | "bosu ball"
  | "cable"
  | "dumbbell"
  | "elliptical machine"
  | "ez barbell"
  | "hammer"
  | "kettlebell"
  | "leverage machine"
  | "medicine ball"
  | "olympic barbell"
  | "resistance band"
  | "roller"
  | "rope"
  | "skierg machine"
  | "sled machine"
  | "smith machine"
  | "stability ball"
  | "stationary bike"
  | "stepmill machine"
  | "tire"
  | "trap bar"
  | "upper body ergometer"
  | "weighted"
  | "wheel roller";

export interface Equipment extends exercise {}

export const equipmentArray: equipmentList[] = [
  "assisted",
  "band",
  "barbell",
  "body weight",
  "bosu ball",
  "cable",
  "dumbbell",
  "elliptical machine",
  "ez barbell",
  "hammer",
  "kettlebell",
  "leverage machine",
  "medicine ball",
  "olympic barbell",
  "resistance band",
  "roller",
  "rope",
  "skierg machine",
  "sled machine",
  "smith machine",
  "stability ball",
  "stationary bike",
  "stepmill machine",
  "tire",
  "trap bar",
  "upper body ergometer",
  "weighted",
  "wheel roller",
];

type MuscleGroup = string;

export const muscleGroups: MuscleGroup[] = [
  "abductors",
  "abs",
  "adductors",
  "biceps",
  "calves",
  "cardiovascular system",
  "delts",
  "forearms",
  "glutes",
  "hamstrings",
  "lats",
  "levator scapulae",
  "pectorals",
  "quads",
  "serratus anterior",
  "spine",
  "traps",
  "triceps",
  "upper back",
];

export interface HeaderConfig {
  headers: {
    "X-RapidAPI-Key": HeadersInit | undefined;
    "X-RapidAPI-Host": HeadersInit | undefined;
  };
}
