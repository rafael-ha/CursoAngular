import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  regiones: string[] = [
    'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
  ];
  regionActiva: string = '';

  getClaseCSS(region: string): string {
    return region !== this.regionActiva
      ? 'btn btn-outline-primary'
      : 'btn btn-primary';
  }
  activarRegion(region: string) {
    if (region === this.regionActiva){return;}
    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(this.regionActiva)
    .subscribe({
      next:(paises)=>{
        this.paises = paises;
      }
    });
  }

 paises: Country[] = [];

  constructor(private paisService: PaisService) {}
}
