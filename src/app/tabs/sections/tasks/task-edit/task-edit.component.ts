import { Component, OnInit } from "@angular/core";

import { ViewController, NavParams } from "ionic-angular";

import "rxjs/Rx";

import { Task } from "../../../../core/core.module";

@Component({
  selector: "task-edit",
  templateUrl: "task-edit.component.html"
})
export class TaskEditComponent implements OnInit {
  private task: Task;

  constructor(private viewCtrl: ViewController,
              private navParams: NavParams) {
  }

  ngOnInit(): void {
    this.task = this.navParams.get("task");
  }

  changeStatus(task: Task): void {
    task.done = !task.done;
  }

  save(): void {
    this.viewCtrl.dismiss(this.task);
  }

  dismiss(): void {
    this.viewCtrl.dismiss();
  }
}
