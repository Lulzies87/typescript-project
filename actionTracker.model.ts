export const actions = ["Study", "Exercise", "Read a book", "Meditate", "Gaming"] as const;
export type Action = (typeof actions)[number];
export interface ActionLog {
  name: Action;
  startTime: Date;
  endTime: Date;
}
