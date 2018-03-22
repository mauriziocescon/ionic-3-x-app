import { ITask } from './tasks.model';
import { ISection } from './sections.model';

/**
 * Task object
 * that is stored
 * inside a {@Link SectionDb}
 */
export class TaskDb implements ITask {
  id: string;
  creationDate: string;
  description: string;
  done: boolean;

  constructor(id: string) {
    this.id = id;
  }
}

/**
 * SectionDb object
 * that is stored
 * inside a {@Link TodoDb}
 */
export class SectionDb implements ISection {
  id: string;
  creationDate: string;
  type: string;
  description: string;
  tasks: TaskDb[];

  constructor(id: string) {
    this.id = id;
    this.tasks = [];
  }
}
