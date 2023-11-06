export class ReactiveSet<V> extends Set<V> {
  #subs = new Set<(v: this) => any>();

  update<T extends () => any>(runner: T) {
    const { size } = this;
    const result: ReturnType<T> = runner();
    if (size !== this.size) {
      for (const sub of this.#subs)
        sub(this);
    }
    return result;
  }

  subscribe(listener: (v: this) => any) {
    this.#subs.add(listener);
    return () => { this.#subs.delete(listener); };
  }

  add(value: V): this {
    return this.update(() => super.add(value));
  }

  delete(value: V): boolean {
    return this.update(() => super.delete(value));
  }

  clear(): void {
    return this.update(() => super.clear());
  }
}