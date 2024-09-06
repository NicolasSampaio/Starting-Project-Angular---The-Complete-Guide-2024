export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export interface NewTask extends Omit<Task, 'id' | 'userId'> {}
