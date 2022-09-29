interface Dao<ID, Model> {
  findall: () => Promise<Model[]>;
  create: (model: Model) => Promise<Model>;
  remove: (id: ID) => Promise<void>;
}
