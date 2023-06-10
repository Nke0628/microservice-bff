import DataLoader from 'dataloader';

export abstract class BaseBatchLoader<K, V> extends Object {
  protected dataloader: DataLoader<K, V> = new DataLoader<K, V>(
    this.batchLoad.bind(this),
  );

  public load(key: K): Promise<V> {
    return this.dataloader.load(key);
  }

  protected abstract batchLoad(keys: K[]): Promise<(V | Error)[]>;
}
