import { ViewChild, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('slideWithNav',{static:false})slideWithNav:IonSlides;
  slideOpts = {
    initialSlide:0,
    slidesPerView: 1,
    };

  constructor(
    private gerenciadorDeRotas: Router
  ) { }

  ngOnInit() {
  }

  sair(){
    /*
    Executa toda a lógica de sair, apagando dados do usuário, etc...
    Navega para a página de login
    */
    console.log('Saindo..');
    this.gerenciadorDeRotas.navigateByUrl('login');
  }

}
