interface Repository {
  create<Y>(param: any, id?: string): Promise<Y>;
  update?<T>(id: string, param: T): Promise<{}>;
  findOneById<Y>(id: string): Promise<Y>;
  findOneByName?<Y>(id: string): Promise<Y>;
  findOneByNumber?<Y>(id: string): Promise<Y>;
  findAll<Y>(param?: string): Promise<Y>;
  delete?(id: string): Promise<{}>;
  deleteOneByNumber?(id: string, contact_id?: string): Promise<{}>;
  deleteAll?(id: string): Promise<{}>;
}

export default Repository;
