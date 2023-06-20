export class Demo {
  private _sample: number = 0;

  get sample(): number {
    return this._sample;
  }

  set sample(val: number) {
    this._sample = val;
  }

  public increment() {
    this._sample++;
  }

  public print() {
    console.log(`Print from class ${this._sample}`);
  }
}
