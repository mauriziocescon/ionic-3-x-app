import { Component } from "@angular/core";

import { NavController, ModalController, LoadingController, AlertController } from "ionic-angular";
import { TranslateService } from "ng2-translate";

import { HowAboutSalesService, TodoDataService, HelperService } from "../../core/core.module";
import { LoginComponent } from "../../shared/login/login.component";

@Component({
  selector: "settings",
  templateUrl: "settings.component.html"
})
export class SettingsComponent {
  private navCtrl: NavController;
  private modalCtrl: ModalController;
  private loadingCtrl: LoadingController;
  private alertCtrl: AlertController;
  private translate: TranslateService;
  private howAboutSales: HowAboutSalesService;
  private todoDataService: TodoDataService;
  private helper: HelperService;

  public loginSuccess: boolean;

  constructor(navCtrl: NavController, modalCtrl: ModalController, loadingCtrl: LoadingController, alertCtrl: AlertController, howAboutSalesService: HowAboutSalesService, todoDataService: TodoDataService, helperService: HelperService, translate: TranslateService) {
    this.navCtrl = navCtrl;
    this.modalCtrl = modalCtrl;
    this.loadingCtrl = loadingCtrl;
    this.alertCtrl = alertCtrl;
    this.translate = translate;
    this.howAboutSales = howAboutSalesService;
    this.todoDataService = todoDataService;
    this.helper = helperService;
  }

  public login(): void {
    this.loginSuccess = false;

    let loginModal = this.modalCtrl.create(LoginComponent);
    loginModal.onDidDismiss((login: boolean) => {
      if (login) {
        this.loginSuccess = true;
        // ...
      }
    });

    loginModal.present();
  }

  public getTodos(): void {

    this.translate.get("LOADING")
      .subscribe((res: string) => {

        let loading = this.loadingCtrl.create({
          content: res
        });
        loading.present();

        this.howAboutSales.getTasks().then((tasks) => {
          console.log(JSON.stringify(tasks, null, 2));
          this.todoDataService.mergeSectionsTasksDb(this.helper.mapHowAboutSalesGetTodosToDbEntries(tasks));
          loading.dismiss();

          let alert = this.alertCtrl.create({
            title: "TODOS_SUCCESS",
            subTitle: "CHECK_TODOS",
            buttons: ["Dismiss"]
          });
          alert.present();
        });
      });
  }

  public getPredefinedActivity(): void {

    this.translate.get("LOADING")
      .subscribe((res: string) => {

        let loading = this.loadingCtrl.create({
          content: res
        });
        loading.present();

        this.howAboutSales.getPredefinedActivity().then((activities) => {
          console.log(JSON.stringify(activities, null, 2));
          loading.dismiss();

          let alert = this.alertCtrl.create({
            title: "PREDEFINED_SUCCESS",
            subTitle: "Data downloaded, but not managed",
            buttons: ["Dismiss"]
          });
          alert.present();
        });
      });
  }
}
