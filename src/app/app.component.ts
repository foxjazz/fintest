import { Component ,  OnInit} from '@angular/core';
declare var finesse: any;
import '../finesse.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){
    this.uri = "https://uccx-001-app-prod.statebridgecompany.com:8445";
  }
  uri: string;
  title = 'app works!';
  connect(){



    // finesse.ClientServices.init({host: this.uri, restHost: this.uri, id: "jdickinson", password: "4"});
  }
  ngOnInit(){

    this.title = 'test';
    // fi.gadget.Config = {host: this.uri, restHost: this.uri, id: "jdickinson", password: "isFriday!4"}
    // fi.clientservices.ClientServices.init(fi.gadget.Config);
  }
}


