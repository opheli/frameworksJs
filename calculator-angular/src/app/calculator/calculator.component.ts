import { Component} from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  public total: number = 0;
  public current: number = 0;
  private previous: number = 0;
  private operator: string = '';
  private operatorClicked: boolean = false;

  getValue(number: number) {
    if(this.operatorClicked) {
      this.total = 0;
      this.operatorClicked = false;
    }

    this.total = parseInt(`${this.total}${number}`);
  }

  add() {
    this.total = this.total + this.previous;
    this.setPrevious();
    this.setOperator('+');
  }

  substract() {
    this.total = this.total - this.previous;
    this.setPrevious();
    this.setOperator('-');
  }

  divide() {
    if(this.previous != 0) {
      this.total = this.previous / this.total;
    }
    this.setPrevious();
    this.setOperator('/');
  }

  multiplicate() {
    if(this.previous != 0) {
      this.total = this.previous * this.total;
    }
    this.setPrevious();
    this.setOperator('*');
  }

  percent() {
      this.total = this.total / 100;
      this.setPrevious();
  }

  setPrevious() {
    this.previous = this.total;
    this.operatorClicked = true;
  }

  setOperator(operator: string) {
    this.operator = operator;
  }

  equal() {
    console.log(this.previous)
    console.log(this.current)
    console.log(this.operator)

    switch (this.operator) {
      case '+':
        this.total = this.total + this.previous ;
        break;

      case '-':
        this.total = this.previous - this.total ;
        break;

      case '/':
        this.total = this.previous / this.total ;
        break;

      case '*':
        this.total = this.total * this.previous ;
        break;
    }

    this.previous = 0;
  }

  clear() {
    this.total = 0;
    this.previous = 0;
  }
}
