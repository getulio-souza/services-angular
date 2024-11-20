import { Injectable } from "@angular/core";

@Injectable()
export class CursosService{

    private cursos: string[] = ['angular', 'react', 'javacript', 'PHP'] 

    getCursos(){
        return this.cursos
    }

    addCurso(curso: string){
        this.cursos.push(curso)
    }
}