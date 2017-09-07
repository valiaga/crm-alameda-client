import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { Persona } from './persona';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonaService {

  private basePath: string = '/personas';

  private personas: FirebaseListObservable<Persona[]> = null; //lista de objetos
  private persona: FirebaseObjectObservable<Persona>=null; //solo un objeto

  constructor(private db: AngularFireDatabase) { }

  /**
   * Lista de personas con las condiciones de query;
   * @param query 
   */
  public getPersonasList(query = { }): FirebaseListObservable<Persona[]>{
    this.personas = this.db.list(this.basePath, {
      query: query
    });
    return this.personas;
  }

  /**
   * Traer a una persona según su Id.
   * @param key 
   */
  public getPersona(key: string): FirebaseObjectObservable<Persona>{
    const personaPath = `${this.basePath}/${key}`;
    this.persona = this.db.object(personaPath);
    return this.persona;
  }

  /**
   * Crear una nueva persona.
   * @param unidad 
   */
  public createPersona(persona: Persona): void{
    this.personas.push(persona)
      .catch(err => this.handleError(err))
  }
  
  /**
   * Editar una persona. no retorna nada.
   * @param key Clave primaria de objeto
   * @param value Nuevo valor a reemplazar
   */
  public updatePersona(key: string, value: any): void{
    this.personas.update(key, value)
      .catch(err => this.handleError(err))
  }

  /**
   * Eliminar objeto
   * @param key Clave primaria del objeto a eliminar
   */
  public deletePersona(key: string): void{
    this.personas.remove(key)
      .catch(err => this.handleError(err));
  }

  /**
   * Eliminar toda la lista.
   */
  public deleteAll():void{
    this.personas.remove()
      .catch(err => this.handleError(err));
  }

  /**
   * Manejador de errores
   * @param error Error
   */
  public handleError(error){
    console.log('Error: ',error);
  }
}
