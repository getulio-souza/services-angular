import { Injectable, EventEmitter } from "@angular/core";
import { LogService } from "../../shared/log.service";

@Injectable()
export class CursosService{

    emitirCursoCriado = new EventEmitter<string>()
    static criouNovoCurso = new EventEmitter<string>()
    //quando declaramos um metodo ou atributo de uma classe como 'estatico',
    //nao precisamos da instancia da classe para acessar os mesmos

    private cursos: string[] = ['angular', 'react', 'javacript', 'PHP'];

    constructor(private logService: LogService){}

    getCursos(){
        this.logService.consoleLog('obtendo lista de cursos...')
        return this.cursos;

    }

    addCurso(curso: string){
        this.logService.consoleLog(`Criando novo curso...${curso}`)
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso)
        CursosService.criouNovoCurso.emit(curso)
    }
}