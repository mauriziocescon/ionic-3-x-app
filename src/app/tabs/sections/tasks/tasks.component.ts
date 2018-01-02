import { Component, OnInit } from "@angular/core";

import { NavController, ModalController, NavParams } from "ionic-angular";

import { TranslateService } from "@ngx-translate/core";

import { TodoDataService, Section, Task, UtilsService } from "../../../core/core.module";
import { TaskEditComponent } from "./task-edit/task-edit.component";
import { ActionsService } from "../../../core/actions.service";

@Component({
  selector: "tasks",
  templateUrl: "tasks.component.html"
})
export class TasksComponent implements OnInit {
  private section: Section;
  tasks: Task[];

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private modalCtrl: ModalController,
              private todoDataService: TodoDataService,
              private utils: UtilsService,
              private actions: ActionsService,
              private translate: TranslateService) {
    this.section = this.navParams.get("section");
  }

  ngOnInit(): void {

  }

  ionViewWillEnter(): void {
    this.todoDataService.getTasksForSections(this.section)
      .then((tasks: Task[]) => {
        this.tasks = tasks;
      });
  }

  addTask(): void {
    let newTask = new Task(this.utils.createUUID(), this.utils.getDate(), "", false);

    let taskEditModal = this.modalCtrl.create(TaskEditComponent, {task: newTask});
    taskEditModal.onDidDismiss((editTask) => {
      if (editTask) {
        this.todoDataService.insertUpdateTaskForSection(editTask, this.section)
          .then(() => {
            this.tasks.splice(0, 0, editTask);

            this.translate.get("TASKS.ACTION_CRE_TASK", {value: editTask.description})
              .subscribe((res: string) => {
                this.actions.addAction(res);
              });
          });
      }
    });

    taskEditModal.present();
  }

  delete(task: Task): void {
    this.todoDataService.deleteTaskForSection(task, this.section)
      .then(() => {
        this.tasks = this.tasks.filter((t: Task) => {
          return task.id != t.id;
        });

        this.translate.get("TASKS.ACTION_DEL_TASK", {value: task.description})
          .subscribe((res: string) => {
            this.actions.addAction(res);
          });
      });
  }

  modify(task: Task): void {
    const newTask = Object.assign({}, task);

    let taskEditModal = this.modalCtrl.create(TaskEditComponent, {task: newTask});
    taskEditModal.onDidDismiss((editTask) => {
      if (editTask) {
        this.todoDataService.insertUpdateTaskForSection(editTask, this.section)
          .then(() => {
            task = editTask;

            this.ionViewWillEnter();
            this.translate.get("TASKS.ACTION_MOD_TASK", {value: task.description})
              .subscribe((res: string) => {
                this.actions.addAction(res);
              });
          });
      }
    });

    taskEditModal.present();
  }

  changeStatus(task: Task): void {
    const newTask = Object.assign({}, task);
    newTask.done = !newTask.done;

    this.todoDataService.insertUpdateTaskForSection(newTask, this.section)
      .then(() => {
        task.done = !task.done;
      });
  }
}
