export class CardModel{  
  constructor(_pick: string,_cardNumber:number) {
          this.pick = _pick;
          this.cardNumber = _cardNumber;
      }
}

export class CardHelper {  
  constructor(_pick: string, _cn: number,_count:number) {
    this.pick = _pick;
          this.cn = _cn;
          this.count = _count;
      }
}