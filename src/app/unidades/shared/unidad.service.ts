import { Unidad } from './unidad';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class UnidadService {

  private basePath: string = '/unidades';

  private unidades: FirebaseListObservable<Unidad[]> = null; //lista de objetos
  private unidad: FirebaseObjectObservable<Unidad>=null; //solo un objeto

  // constructor(private af: AngularFire,
  //             private db: AngularFireDatabase
  // ) { }

  constructor(private db: AngularFireDatabase) { }

  /**
   * Traer una lista de unidades.
   * @param query Condiciones para la llamada
   */
  public getUnidadesList(query = {}):FirebaseListObservable<Unidad[]>{
    this.unidades = this.db.list(this.basePath, {
      query: query
    });
    return this.unidades;
  }

  /**
   * Traer una unidad.
   * @param key Clave primaria de la Unidad.
   */
  public getUnidad(key: string): FirebaseObjectObservable<Unidad>{
    const unidadPath = `${this.basePath}/${key}`;
    this.unidad = this.db.object(unidadPath);
    return this.unidad;
  }

  /**
   * Crear un nueva unidad. no retorna nada.
   */
  public createUnidad(unidad: Unidad): void{
    this.unidades.push(unidad)
      .catch(err => this.handleError(err))
  }

  /**
   * Editar una unidad. no retorna nada.
   * @param key Clave primaria de objeto
   * @param value Nuevo valor a reemplazar
   */
  public updateUnidad(key: string, value: any): void{
    this.unidades.update(key, value)
      .catch(err => this.handleError(err))
  }

  /**
   * Eliminar objeto
   * @param key Clave primaria del objeto a eliminar
   */
  public deleteUnidad(key: string): void{
    this.unidades.remove(key)
      .catch(err => this.handleError(err));
  }

  /**
   * Eliminar toda la lista.
   */
  public deleteAll():void{
    this.unidades.remove()
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
