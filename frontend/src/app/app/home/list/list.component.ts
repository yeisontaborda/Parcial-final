import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  public listaCursos : any = {cursosEncontrados: [
    {nombre: "", duracionHoras: 0, precio: 0}
  ]};
  constructor(private http: HttpClient){}

  ngOnInit(){
    var token = sessionStorage.getItem("session_token")!;

    var url = "http://172.16.13.189:9898/api/curso";

    var headers = new HttpHeaders().set(
      'Authorization', token
    )

    this.http.get(url, {headers}).subscribe(
      {
        next: resp => {
          this.listaCursos = resp
        },
        error : err =>{
          console.log(err)
        }
      }
    );

  }

}
