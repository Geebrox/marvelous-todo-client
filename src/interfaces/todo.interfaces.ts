export interface Todo {
  id: string;
  title: string;
  isFinished: boolean;
  createdAt: Date;
  finishedAt: Date | null;
}

export interface TodoFilter extends Partial<Todo> {
  take?: number;
  skip?: number;
}
