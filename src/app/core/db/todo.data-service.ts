import { Injectable } from "@angular/core";

import { Storage } from "@ionic/storage";
import "rxjs/Rx";

import { AppConstantsService } from "../app-constants.service";

import { Task } from "./tasks.model";
import { Section } from "./sections.model";
import { SectionDb, TaskDb } from "./todo.model";

/**
 * Data is stored using
 * @ionic/storage mechanism.
 *
 * In particular, storage.get("TODO_DB_KEY")
 * returns an Array of {@Link SectionDb}.
 */

@Injectable()
export class TodoDataService {
  private storage: Storage;
  private appConstants: AppConstantsService;

  constructor(storage: Storage,
              appConstantsService: AppConstantsService) {
    this.storage = storage;
    this.appConstants = appConstantsService;

    this.setupDb();
  }

  /**
   * Initial setup
   *
   * @returns {Promise<T>}
   */
  public setupDb(): any {
    return new Promise((resolve, reject) => {
      this.storage.ready()
        .then(() => {
          this.storage.get(this.appConstants.Application.TODO_DB_KEY)
            .then((data) => {
              if (data === null) {
                this.storage.set(this.appConstants.Application.TODO_DB_KEY, []).then(() => {
                  resolve();
                });
              }
              else {
                console.log("Db contains data");
                console.log(JSON.stringify(data));
                resolve();
              }
            })
        })
        .catch(() => {
          // initialize
          this.storage.set(this.appConstants.Application.TODO_DB_KEY, []).then(() => {
            resolve();
          });
        })
    });
  }

  /**
   * Compare sectionDb
   * with section
   *
   * @param sectionDb
   * @param section
   * @returns {boolean}
   */
  private areSectionsEqual(sectionDb: SectionDb, section: Section): boolean {
    return sectionDb.id === section.id;
  }

  /**
   * Update sectionDb with
   * data from section
   *
   * @param sectionDb
   * @param section
   */
  private updateSection(sectionDb: SectionDb, section: Section): void {
    // update fields
    sectionDb.creationDate = section.creationDate;
    sectionDb.type = section.type;
    sectionDb.description = section.description;
  }

  /**
   * Compare taskDb
   * with task
   *
   * @param taskDb
   * @param task
   * @returns {boolean}
   */
  private areTasksEqual(taskDb: TaskDb, task: Task): boolean {
    return taskDb.id === task.id;
  }

  /**
   * Update taskDb with
   * data from task
   *
   * @param taskDb
   * @param task
   */
  private updateTask(taskDb: TaskDb, task: Task): void {
    // update fields
    taskDb.creationDate = task.creationDate;
    taskDb.description = task.description;
    taskDb.done = task.done;
  }

  /**
   * Update or insert a new
   * {@link SectionDb} inside
   * the db
   *
   * @param section An existing or new section
   * @returns {Promise<T>}
   */
  public insertUpdateSection(section: Section): any {
    return new Promise((resolve, reject) => {
      this.storage.ready()
        .then(() => {
          this.storage.get(this.appConstants.Application.TODO_DB_KEY)
            .then((secsDb: SectionDb[]) => {
              let sIndex = secsDb.findIndex((secDb: SectionDb) => {
                return this.areSectionsEqual(secDb, section);
              });

              let secDb = sIndex != -1 ? secsDb[sIndex] : new SectionDb(section.id);
              this.updateSection(secDb, section);


              if (sIndex != -1) {
                secsDb.splice(sIndex, 1, secDb)
              }
              else {
                secsDb = secsDb.concat(secDb);
              }

              this.storage.set(this.appConstants.Application.TODO_DB_KEY, secsDb)
                .then(() => {
                  resolve();
                });
            });
        })
    });
  }

  /**
   * Delete an existing
   * {@link SectionDb}
   * inside the db
   *
   * @param section An existing section
   * @returns {Promise<T>}
   */
  public deleteSection(section: Section): any {
    return new Promise((resolve, reject) => {
      this.storage.ready()
        .then(() => {
          this.storage.get(this.appConstants.Application.TODO_DB_KEY)
            .then((secsDb: SectionDb[]) => {

              let sIndex = secsDb.findIndex((secDb: SectionDb) => {
                return this.areSectionsEqual(secDb, section);
              });

              if (sIndex === -1) {
                resolve();
              }
              else {
                secsDb.splice(sIndex, 1);
                this.storage.set(this.appConstants.Application.TODO_DB_KEY, secsDb)
                  .then(() => {
                    resolve();
                  });
              }
            });
        })
    });
  }

  /**
   * Get {@Link Section}
   * from the db
   *
   * @returns {Promise<T>}
   */
  public getSections(): Promise<Section[]> {
    return new Promise((resolve, reject) => {
      this.storage.ready()
        .then(() => {
          this.storage.get(this.appConstants.Application.TODO_DB_KEY)
            .then((secsDb: SectionDb[]) => {
              if (secsDb) {
                let secs = secsDb.map((secDb: SectionDb) => {
                  return new Section(secDb.id, secDb.creationDate, secDb.type, secDb.description);
                })
                  .sort((s1, s2) => {
                    return (s1.creationDate < s2.creationDate) ? 1 : -1;
                  });
                resolve(secs);
              }
              resolve([]);
            });
        })
    });
  }

  /**
   * Update or insert a new
   * {@link SectionDb} inside
   * the db, adding or changing
   * also one {@link TaskDb}
   *
   * @param task An existing or new task of section
   * @param section An existing or new section
   * @returns {Promise<T>}
   */
  public insertUpdateTaskForSection(task: Task, section: Section): any {
    return new Promise((resolve, reject) => {
      this.storage.ready()
        .then(() => {
          this.storage.get(this.appConstants.Application.TODO_DB_KEY)
            .then((secsDb: SectionDb[]) => {
              let sIndex = secsDb.findIndex((secDb: SectionDb) => {
                return this.areSectionsEqual(secDb, section);
              });

              let secDb = sIndex != -1 ? secsDb[sIndex] : new SectionDb(section.id);
              this.updateSection(secDb, section);

              let tIndex = secDb.tasks.findIndex((taskDb: TaskDb) => {
                return this.areTasksEqual(taskDb, task);
              });

              let taskDb = tIndex != -1 ? secDb.tasks[tIndex] : new TaskDb(task.id);
              this.updateTask(taskDb, task);
              if (tIndex === -1) {
                secDb.tasks.push(taskDb);
              }


              if (sIndex != -1) {
                secsDb.splice(sIndex, 1, secDb)
              }
              else {
                secsDb = secsDb.concat(secDb);
              }

              this.storage.set(this.appConstants.Application.TODO_DB_KEY, secsDb)
                .then(() => {
                  resolve();
                });
            });
        })
    });
  }

  /**
   * Delete an existing
   * {@link TaskDb} of
   * {@link SectionDb}
   * inside the db
   *
   * @param task An existing task of section
   * @param section An existing section
   * @returns {Promise<T>}
   */
  public deleteTaskForSection(task: Task, section: Section): any {
    return new Promise((resolve, reject) => {
      this.storage.ready()
        .then(() => {
          this.storage.get(this.appConstants.Application.TODO_DB_KEY)
            .then((secsDb: SectionDb[]) => {
              let sIndex = secsDb.findIndex((secDb: SectionDb) => {
                return this.areSectionsEqual(secDb, section);
              });

              if (sIndex === -1) {
                resolve();
              }
              else {
                let secDb = secsDb[sIndex];
                let tIndex = secDb.tasks.findIndex((taskDb: TaskDb) => {
                  return this.areTasksEqual(taskDb, task);
                });

                if (tIndex === -1) {
                  resolve();
                }
                else {
                  secDb.tasks.splice(tIndex, 1);
                  this.storage.set(this.appConstants.Application.TODO_DB_KEY, secsDb)
                    .then(() => {
                      resolve();
                    });
                }
              }
            })
        });
    });
  }

  /**
   * Get {@Link Tasks}
   * from the db
   *
   * @returns {Promise<T>}
   */
  public getTasksForSections(section: Section): Promise<Task[]> {
    return new Promise((resolve, reject) => {
      this.storage.ready()
        .then(() => {
          this.storage.get(this.appConstants.Application.TODO_DB_KEY)
            .then((secsDb: SectionDb[]) => {
              let sIndex = secsDb.findIndex((secDb: SectionDb) => {
                return this.areSectionsEqual(secDb, section);
              });

              if (sIndex === -1) {
                resolve([]);
              }
              else {

                let tasks = secsDb[sIndex].tasks.map((taskDb: TaskDb) => {
                  return new Task(taskDb.id, taskDb.creationDate, taskDb.description, taskDb.done);
                }).sort((t1, t2) => {
                  return (t1.creationDate < t2.creationDate) ? 1 : -1;
                });
                resolve(tasks);
              }
            });
        })
    });
  }
}
