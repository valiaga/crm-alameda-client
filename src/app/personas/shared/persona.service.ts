import { LoggerService } from '../../shared/services/logger/logger.service';
import {
    AngularFireDatabase,
    FirebaseListObservable,
    FirebaseObjectObservable,
} from 'angularfire2/database';
import { Persona } from './persona';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonaService {

  private basePath: string = '/personas';

  private personas: FirebaseListObservable<Persona[]> = null; //lista de objetos
  private persona: FirebaseObjectObservable<Persona> = null; //solo un objeto

  constructor(private db: AngularFireDatabase,
              private logger: LoggerService) { }

  /**
   * Lista de personas con las condiciones de query;
   * @param query 
   */
  public getPersonasList(query = { }): FirebaseListObservable<Persona[]>{
    this.logger.info('getPersonasList');
    this.logger.info('query', query);

    this.personas = this.db.list(this.basePath, {
      query: query
    });
    return this.personas;
  }

  /**
   * Traer a una persona según su Id.
   * @param key 
   */
  public getPersonaByKey(key: string): FirebaseObjectObservable<Persona>{
    this.logger.info('getPersonaByKey');
    this.logger.info('key', key);

    const personaPath = `${this.basePath}/${key}`;
    this.persona = this.db.object(personaPath);
    return this.persona;
  }

  /**
   * Crear una nueva persona.
   * @param persona 
   */
  public createPersona(persona: Persona): firebase.database.ThenableReference {
    this.logger.info('createPersona');
    this.logger.info('persona', persona);

    delete persona.$key;
    this.personas=this.personas || this.getPersonasList({limitToLast: 1});
    return this.personas.push(persona);
  }
  
  /**
   * Editar una persona. no retorna nada.
   * @param key Clave primaria de objeto
   * @param value Nuevo valor a reemplazar
   */
  public updatePersona(key: string, value: any): firebase.Promise<void> {
    this.logger.info('updatePersona');
    this.logger.info('KEY: ', key);
    this.logger.info('value: ', value);
    
    delete value.$key;    
    return this.personas.update(key, value);
      // .catch(err => this.handleError(err))
  }

  /**
   * Eliminar objeto
   * @param key Clave primaria del objeto a eliminar
   */
  public deletePersona(key: string): void{
    this.logger.info('deletePersona');
    this.logger.info('KEY: ', key)

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
