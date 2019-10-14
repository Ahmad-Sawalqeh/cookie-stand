'use strict';

// var obj = [seattle, tokyo, dubai, paris, lima];//5
var hour = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '];//14

var seattle = {
  location : 'Seattle',
  min : 23,
  max : 65,
  avgcookie : 6.3,
  cookNumArr : [],
  totalSale : 0,

  avgNumCus : function(){
    var rang = this.max - this.min;
    var rand = Math.random() * rang + this.min;
    return Math.ceil(rand);
  },

  generateHourlySales: function () {
    for (var i = 0; i < hour.length ; i++) {  
      var cookEachHour = Math.ceil(this.avgNumCus() * this.avgcookie);
      this.cookNumArr.push( cookEachHour );
      this.totalSale += cookEachHour;
    }
  },

  render: function() {
    var container = document.getElementById('content-area');
    var h2 = document.createElement('h2');
    container.appendChild(h2);
    h2.textContent = this.location;
    var ul = document.createElement('ul');
    container.appendChild(ul);
    for(var i = 0; i < hour.length; i++) {
      var li = document.createElement('li');
      ul.appendChild(li);
      var salesInfo = hour[i] + ': ' + this.cookNumArr[i] + ' cookies';
      // Template literal notatiion
      // saleInfo = '${hours[i]}: ${seattle.hourlySales[i]} cookies'
      li.textContent = salesInfo;
    }
    var li = document.createElement('li');
    li.textContent = 'Total: ' + this.totalSale + ' cookies';
    ul.appendChild(li);
  },
};

// seattle.generateHourlySales();
// seattle.render();

var tokyo = {
  location : 'Tokyo',
  min : 3,
  max : 24,
  avgcookie : 1.2,
  cookNumArr : [],
  totalSale : 0,

  avgNumCus : function(){
    var rang = this.max - this.min;
    var rand = Math.random() * rang + this.min;
    return Math.ceil(rand);
  },

  generateHourlySales: function () {
    for (var i = 0; i < hour.length ; i++) {  
      var cookEachHour = Math.ceil(this.avgNumCus() * this.avgcookie);
      this.cookNumArr.push( cookEachHour );
      this.totalSale += cookEachHour;
    }
  },

  render: function() {
    var container = document.getElementById('content-area');
    var h2 = document.createElement('h2');
    container.appendChild(h2);
    h2.textContent = this.location;
    var ul = document.createElement('ul');
    container.appendChild(ul);
    for(var i = 0; i < hour.length; i++) {
      var li = document.createElement('li');
      ul.appendChild(li);
      var salesInfo = hour[i] + ': ' + this.cookNumArr[i] + ' cookies';
      // Template literal notatiion
      // saleInfo = '${hours[i]}: ${seattle.hourlySales[i]} cookies'
      li.textContent = salesInfo;
    }
    var li = document.createElement('li');
    li.textContent = 'Total: ' + this.totalSale + ' cookies';
    ul.appendChild(li);
  },
};

// tokyo.generateHourlySales();
// tokyo.render();

var dubai = {
  location : 'Dubai',
  min : 11,
  max : 38,
  avgcookie : 3.7,
  cookNumArr : [],
  totalSale : 0,

  avgNumCus : function(){
    var rang = this.max - this.min;
    var rand = Math.random() * rang + this.min;
    return Math.ceil(rand);
  },

  generateHourlySales: function () {
    for (var i = 0; i < hour.length ; i++) {  
      var cookEachHour = Math.ceil(this.avgNumCus() * this.avgcookie);
      this.cookNumArr.push( cookEachHour );
      this.totalSale += cookEachHour;
    }
  },

  render: function() {
    var container = document.getElementById('content-area');
    var h2 = document.createElement('h2');
    container.appendChild(h2);
    h2.textContent = this.location;
    var ul = document.createElement('ul');
    container.appendChild(ul);
    for(var i = 0; i < hour.length; i++) {
      var li = document.createElement('li');
      ul.appendChild(li);
      var salesInfo = hour[i] + ': ' + this.cookNumArr[i] + ' cookies';
      // Template literal notatiion
      // saleInfo = '${hours[i]}: ${seattle.hourlySales[i]} cookies'
      li.textContent = salesInfo;
    }
    var li = document.createElement('li');
    li.textContent = 'Total: ' + this.totalSale + ' cookies';
    ul.appendChild(li);
  },
};

// dubai.generateHourlySales();
// dubai.render();

var paris = {
  location : 'Paris',
  min : 20,
  max : 38,
  avgcookie : 2.3,
  cookNumArr : [],
  totalSale : 0,

  avgNumCus : function(){
    var rang = this.max - this.min;
    var rand = Math.random() * rang + this.min;
    return Math.ceil(rand);
  },

  generateHourlySales: function () {
    for (var i = 0; i < hour.length ; i++) {  
      var cookEachHour = Math.ceil(this.avgNumCus() * this.avgcookie);
      this.cookNumArr.push( cookEachHour );
      this.totalSale += cookEachHour;
    }
  },

  render: function() {
    var container = document.getElementById('content-area');
    var h2 = document.createElement('h2');
    container.appendChild(h2);
    h2.textContent = this.location;
    var ul = document.createElement('ul');
    container.appendChild(ul);
    for(var i = 0; i < hour.length; i++) {
      var li = document.createElement('li');
      ul.appendChild(li);
      var salesInfo = hour[i] + ': ' + this.cookNumArr[i] + ' cookies';
      // Template literal notatiion
      // saleInfo = '${hours[i]}: ${seattle.hourlySales[i]} cookies'
      li.textContent = salesInfo;
    }
    var li = document.createElement('li');
    li.textContent = 'Total: ' + this.totalSale + ' cookies';
    ul.appendChild(li);
  },
};

// paris.generateHourlySales();
// paris.render();

var lima = {
  location : 'lima',
  min : 2,
  max : 16,
  avgcookie : 4.6,
  cookNumArr : [],
  totalSale : 0,

  avgNumCus : function(){
    var rang = this.max - this.min;
    var rand = Math.random() * rang + this.min;
    return Math.ceil(rand);
  },

  generateHourlySales: function () {
    for (var i = 0; i < hour.length ; i++) {  
      var cookEachHour = Math.ceil(this.avgNumCus() * this.avgcookie);
      this.cookNumArr.push( cookEachHour );
      this.totalSale += cookEachHour;
    }
  },

  render: function() {
    var container = document.getElementById('content-area');
    var h2 = document.createElement('h2');
    container.appendChild(h2);
    h2.textContent = this.location;
    var ul = document.createElement('ul');
    container.appendChild(ul);
    for(var i = 0; i < hour.length; i++) {
      var li = document.createElement('li');
      ul.appendChild(li);
      var salesInfo = hour[i] + ': ' + this.cookNumArr[i] + ' cookies';
      // Template literal notatiion
      // saleInfo = '${hours[i]}: ${seattle.hourlySales[i]} cookies'
      li.textContent = salesInfo;
    }
    var li = document.createElement('li');
    li.textContent = 'Total: ' + this.totalSale + ' cookies';
    ul.appendChild(li);
  },

};

var obj = [seattle, tokyo, dubai, paris, lima];

for (var i = 0; i < obj.length; i++) {
  var shop = obj[i];
  shop.generateHourlySales();
  shop.render();
}
