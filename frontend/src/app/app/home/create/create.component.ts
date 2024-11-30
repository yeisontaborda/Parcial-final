import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  public nombreCurso : String = "";
  public precioCurso : number = 0;
  public duracionCurso : number = 0;

  constructor(private http: HttpClient, 
    private router:Router){
      this.router
      .routeReuseStrategy.shouldReuseRoute 
      = () => false;
  }

  public createCourse(){

    var token = sessionStorage.getItem('session_token')!;

    var url = "http://172.16.13.189:9898/api/curso";

    var headers = new HttpHeaders().set(
      'Authorization', token
    );

    var body ={
      nombre: this.nombreCurso,
      precio: this.precioCurso,
      duracionHoras: this.duracionCurso
    }

    this.http.post(url, body, {headers}).subscribe(
      {
        next:resp =>{
          this.router.navigate(['/home']);
        },
        error: err => {
          console.log(err);
        }
      }
    );

    


    
  }
}
