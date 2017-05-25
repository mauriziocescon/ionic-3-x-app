import { Component, OnInit } from "@angular/core";

import { NavController, ModalController, NavParams } from "ionic-angular";
import { TranslateService } from "ng2-translate";

import { TodoDataService, Section, Task, UtilsService } from "../../../core/core.module";
import { TaskEditComponent } from "./task-edit/task-edit.component";
import { ActionsService } from "../../../core/actions.service";

@Component({
  selector: "tasks",
  templateUrl: "tasks.component.html"
})
export class TasksComponent implements OnInit {
  private navCtrl: NavController;
  private navParams: NavParams;
  private modalCtrl: ModalController;
  private todoDataService: TodoDataService;
  private utils: UtilsService;
  private actions: ActionsService;
  private translate: TranslateService;

  private section: Section;
  public tasks: Array<Task>;

  constructor(navCtrl: NavController, navParams: NavParams, modalCtrl: ModalController, todoDataService: TodoDataService, utils: UtilsService, actionsService: ActionsService, translate: TranslateService) {
    this.navCtrl = navCtrl;
    this.navParams = navParams;
    this.modalCtrl = modalCtrl;
    this.todoDataService = todoDataService;
    this.utils = utils;
    this.actions = actionsService;
    this.translate = translate;

    this.section = this.navParams.get("section");
  }

  public ngOnInit(): void {

  }

  public ionViewWillEnter(): void {
    this.todoDataService.getTasksForSections(this.section)
      .then((tasks: Array<Task>) => {
        this.tasks = tasks;
      });
  }

  public addTask(): void {
    let newTask = new Task(this.utils.createUUID(), this.utils.getDate(), "", false);

    let taskEditModal = this.modalCtrl.create(TaskEditComponent, {task: newTask});
    taskEditModal.onDidDismiss((editTask) => {
      if (editTask) {
        this.todoDataService.insertUpdateTaskForSection(editTask, this.section)
          .then(() => {
            this.tasks.splice(0, 0, editTask);

            this.translate.get("ACTION_CRE_TASK", {value: editTask.description})
              .subscribe((res: string) => {
                this.actions.addAction(res);
              });
          });
      }
    });

    taskEditModal.present();
  }

  public delete(task: Task): void {
    this.todoDataService.deleteTaskForSection(task, this.section)
      .then(() => {
        this.tasks = this.tasks.filter((t: Task) => {
          return task.id != t.id;
        });

        this.translate.get("ACTION_DEL_TASK", {value: task.description})
          .subscribe((res: string) => {
            this.actions.addAction(res);
          });
      });
  }

  public modify(task: Task): void {
    const newTask = Object.assign({}, task);

    let taskEditModal = this.modalCtrl.create(TaskEditComponent, {task: newTask});
    taskEditModal.onDidDismiss((editTask) => {
      if (editTask) {
        this.todoDataService.insertUpdateTaskForSection(editTask, this.section)
          .then(() => {
            task = editTask;

            this.ionViewWillEnter();
            this.translate.get("ACTION_MOD_TASK", {value: task.description})
              .subscribe((res: string) => {
                this.actions.addAction(res);
              });
          });
      }
    });

    taskEditModal.present();
  }

  public changeStatus(task: Task): void {
    const newTask = Object.assign({}, task);
    newTask.done = !newTask.done;

    this.todoDataService.insertUpdateTaskForSection(newTask, this.section)
      .then(() => {
        task.done = !task.done;
      });
  }
}
