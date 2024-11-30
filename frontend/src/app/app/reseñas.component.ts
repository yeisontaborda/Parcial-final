import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reseñas',
  templateUrl: './reseñas.component.html',
  styleUrls: ['./reseñas.component.css']
})
export class ReseñasComponent implements OnInit {
  reseñas: any[];
  titulo: string;
  descripcion: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/reseñas')
      .subscribe((response: any) => {
        this.reseñas = response;
      });
  }

  createReseña(): void {
    this.http.post('http://localhost:3000/reseñas', { titulo: this.titulo, descripcion: this.descripcion })
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
