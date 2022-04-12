<template>
  <div class="container">

  <div class="number">
    <button @click="append('0')">0</button>
    <button @click="append('1')">1</button>
    <button @click="append('2')">2</button>
    <button @click="append('3')">3</button>
    <button @click="append('4')">4</button>
    <button @click="append('5')">5</button>
    <button @click="append('6')">6</button>
    <button @click="append('7')">7</button>
    <button @click="append('8')">8</button>
    <button @click="append('9')">9</button>
  </div>

    <div class="operator">
    <button @click="add" >+</button>
    <button @click="substract" >-</button>
    <button @click="multiply" >x</button>
    <button @click="divide" >/</button>
    <button @click="equal" >=</button>
    <button @click="clear">C</button>
    </div>

    <div class="total">
    {{total || '0'}}
    </div>
  </div>
</template>


<script>
export default {
    data() {
        return {
            previous: null,
            total: '',
            operator: null,
            operatorClicked: false,
        }
    },
    methods: {
        clear() {
          this.total = '';
        },

        append(number) {
          if (this.operatorClicked) {
          this.total = '';
          this.operatorClicked = false;
          }
          this.total = `${this.total}${number}`;
        },

         setPrevious() {
          this.previous = this.total;
          this.operatorClicked = true;
        },

        add() {
          this.operator = (a, b) => a + b;
          this.setPrevious();
        },

        substract() {
          this.operator = (a, b) => b - a;
          this.setPrevious();
        },

        multiply() {
          this.operator = (a, b) => a * b;
          this.setPrevious();
        },

        divide() {
          this.operator = (a, b) => b / a;
          this.setPrevious();
        },

        equal() {
          this.total = `${this.operator(
          parseFloat(this.total),
          parseFloat(this.previous)
          )}`;
          this.previous = null;
        }
    }
}
</script>

<style scoped>
.total {
background-color: cornflowerblue;
height: 150px;
}

button {
 width: 150px;
 height: 150px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
