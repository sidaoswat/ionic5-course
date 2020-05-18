import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interface';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public componentes: Observable<Componente[]>;

  constructor(private menu: MenuController, private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenu();
  }

  public toggleMenu(): void {
    this.menu.toggle();
  }

}

