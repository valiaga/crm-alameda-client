import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { Anio } from './anio';
import { Injectable } from '@angular/core';

@Injectable()
export class AnioService {
  private basePath: string = '/anios';

  private anios: FirebaseListObservable<Anio[]> = null; //lista de objetos
  private anio: FirebaseObjectObservable<Anio>=null; //solo un objeto

  constructor(private db: AngularFireDatabase) { }

  /**
   * Lista de años con las condiciones de query;
   * @param query 
   */
  public getAniosList(query = { }): FirebaseListObservable<Anio[]>{
    this.anios = this.db.list(this.basePath, {
      query: query
    });
    return this.anios;
  }

  /**
   * Traer a un año según su Id.
   * @param key 
   */
  public getAnio(key: string): FirebaseObjectObservable<Anio>{
    const anioPath = `${this.basePath}/${key}`;
    this.anio = this.db.object(anioPath);
    return this.anio;
  }

  /**
   * Crear un nuevo año.
   * @param anio 
   */
  public createAnio(anio: Anio): void{
    this.anios.push(anio)
      .catch(err => this.handleError(err))
  }
  
  /**
   * Editar un año. no retorna nada.
   * @param key Clave primaria de objeto
   * @param value Nuevo valor a reemplazar
   */
  public updateAnio(key: string, value: any): void{
    this.anios.update(key, value)
      .catch(err => this.handleError(err))
  }

  /**
   * Eliminar objeto
   * @param key Clave primaria del objeto a eliminar
   */
  public deleteAnio(key: string): void{
    this.anios.remove(key)
      .catch(err => this.handleError(err));
  }

  /**
   * Eliminar toda la lista.
   */
  public deleteAll():void{
    this.anios.remove()
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
