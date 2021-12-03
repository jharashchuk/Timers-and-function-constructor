//  Задание 4!
// -реализуем функцию по созданию счётчика с методами increment(), decrement(), showValue(), discard()

function CreateCounter(initialValue = 0) {
    this.result = initialValue;
  
    this.showValue = function() {
            return this.result;
        };
    this.increment = function(val = 1) {
            return this.result += val;
        };
    this.decrement = function(val = 1) {
            return this.result -= val;
        };
    this.discard = function() {
            return initialValue;
        };        
  }  
    // 1.
      const counter = new CreateCounter();
      console.log(counter.showValue()); //--> 0
      console.log(counter.increment()); //--> 1
      console.log(counter.increment());// --> 2
      console.log(counter.increment(3)); //--> 5
      console.log(counter.decrement());// --> 4
      console.log(counter.decrement(3));// --> 1
      console.log(counter.showValue());// --> 1
      console.log(counter.discard());//--> 0  
    // 2.
      const counter2 = new CreateCounter(5);
      console.log(counter2.showValue());// --> 5
      console.log(counter2.increment());// --> 6
      console.log(counter2.increment());// --> 7
      console.log(counter2.increment(7));// --> 14
      console.log(counter2.decrement());// --> 13
      console.log(counter2.decrement(3));// --> 10
      console.log(counter2.showValue());// --> 10
      console.log(counter2.discard());// -->5
