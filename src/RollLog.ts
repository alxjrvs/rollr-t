export default class RollLog {
  readonly total: number;
  readonly results: number[];
  constructor(total: number, results: number[]){
    this.total = total;
    this.results = results;
  }
}