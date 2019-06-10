import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<div>
 Child component:<br/>
 <span>Amount available: {{amount}}</span>
 <button (click)="withdraw()">Withdraw 50 </button>
 </div>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  //@Input() name: string;
  @Input() amount: number;
  @Output() amountChange = new EventEmitter();
 
  withdraw(){
    this.amount -= 50;
    this.amountChange.emit(this.amount);
  }
}
