export interface Todo {
  id: string;
  title: string;
  isFinished: boolean;
  createdAt: Date;
  finishedAt: Date | null;
}
