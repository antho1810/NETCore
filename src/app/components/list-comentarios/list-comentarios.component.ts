import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/Comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {
  listComentario: Comentario[] = [];

  constructor(private _comentarioService: ComentarioService ) { }

  ngOnInit(): void {
    this.getComentario();
  }

  getComentario(){
    this._comentarioService.getLisComentario().subscribe(data=>{
      this.listComentario = data;
    }, error => {
      console.log(error);
    })
  }

  
  eliminarComentario(id: any){
    console.log(id);
    this._comentarioService.deleteComentario(id).subscribe(data =>{
      this.getComentario();
    }, error => {
      console.log(error);
    })
  }

}
