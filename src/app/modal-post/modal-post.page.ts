import { Component, Input, OnInit } from '@angular/core';
import { Platform, ModalController, IonRouterOutlet } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.page.html',
  styleUrls: ['./modal-post.page.scss'],
})
export class ModalPostPage implements OnInit {
  @Input() data: any

  constructor(private modalCrtl: ModalController) { }
  async close(){
    await this.modalCrtl.dismiss({userData :this.data})
  }

  ngOnInit() {
  }
  public tab= []
  file: File

  changeListener($event) : void {

    this.file = $event.target.files;
   this.tab.push(this.file)


 
  }


  remove(imag){
    alert(imag.name)

  }

}
