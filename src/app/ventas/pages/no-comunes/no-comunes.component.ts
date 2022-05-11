import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  nombre: string = 'Rafa';
  genero: string = 'masculino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Eduardo', 'Fernando'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    other: 'tenemos # clientes esperando.',
  };

  cambiarCliente() {
    this.nombre = 'Melissa';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.shift();
  }

  persona = {
    nombre: 'Rafa',
    edad: 22,
    direccion: 'Cadiz',
  };

  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: true,
    },
  ];

  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos datos de la promesa');
    }, 3500);
  });
}
