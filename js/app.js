'use strict';
var seattle = {
  min : 23,
  max : 65,
  avgcookie : 6.3,
  avgNumCus : function(){
    var rang = this.max - this.min;
    var rand = Math.random() * rang + this.min;
    return Math.ceil(rand);
  },
};
var tokyo = {
  min : 3,
  max : 24,
  avgcookie : 1.2,
  avgNumCus : function(){
    var rang = this.max - this.min;
    var rand = Math.random() * rang + this.min;
    return Math.ceil(rand);
  },
};
var dubai = {
  min : 11,
  max : 38,
  avgcookie : 3.7,
  avgNumCus : function(){
    var rang = this.max - this.min;
    var rand = Math.random() * rang + this.min;
    return Math.ceil(rand);
  },
};
var paris = {
  min : 20,
  max : 38,
  avgcookie : 2.3,
  avgNumCus : function(){
    var rang = this.max - this.min;
    var rand = Math.random() * rang + this.min;
    return Math.ceil(rand);
  },
};
var lima = {
  min : 2,
  max : 16,
  avgcookie : 4.6,
  avgNumCus : function(){
    var rang = this.max - this.min;
    var rand = Math.random() * rang + this.min;
    return Math.ceil(rand);
  },
};
var obj = [seattle, tokyo, dubai, paris, lima];//5
var hour = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '];//14
for (var j = 0; j < obj.length ; j++){
  obj[j].cookNumArr = [];
  for (var i = 0; i < hour.length ; i++) {  
    obj[j].cookNumArr.push( Math.ceil(obj[j].avgNumCus() * obj[j].avgcookie));    
  }
}

