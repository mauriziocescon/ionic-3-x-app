export interface ISection {
  id: string;
  creationDate: string;
  type: string;
  description: string;
}

export class Section implements ISection {
  id: string;
  creationDate: string;
  type: string;
  description: string;

  constructor(id: string, creationDate: string, type: string, description: string) {
    this.id = id;
    this.creationDate = creationDate;
    this.type = type;
    this.description = description;
  }
}
