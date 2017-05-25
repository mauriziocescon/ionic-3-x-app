export interface ITask {
  id: string;
  creationDate: string;
  description: string;
  done: boolean;
}

export class Task implements ITask {
  id: string;
  creationDate: string;
  description: string;
  done: boolean;

  constructor(id: string, creationDate: string, description: string, done: boolean) {
    this.id = id;
    this.creationDate = creationDate;
    this.description = description;
    this.done = done;
  }
}
