'use strict';

// var obj = [seattle, tokyo, dubai, paris, lima];//5
var hour = ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];//14

function Shops(location,min,max,avg){
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgcookie = avg;
  this.cookNumArr = [];
  this.totalSale = 0;
  // this.avgNumCus();
  this.generateHourlySales();
  // this.tableRender();
}

Shops.prototype.avgNumCus = function() {
  var rang = this.max - this.min;
  var rand = Math.random() * rang + this.min;
  return Math.ceil(rand);
}

Shops.prototype.generateHourlySales = function() {
  for (var i = 0; i < hour.length ; i++) {  
    var cookEachHour = Math.ceil(this.avgNumCus() * this.avgcookie);
    // console.log(cookEachHour);
    this.cookNumArr.push( cookEachHour );    
    this.totalSale += cookEachHour;
  }
  // console.log(this.cookNumArr);
}

Shops.prototype.listRender = function(){
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
  li = document.createElement('li');
  li.textContent = 'Total: ' + this.totalSale + ' cookies';
  ul.appendChild(li);
}

//header row
function renderHeaderRow(table){
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var th = document.createElement('th');
  table.appendChild(th);
  for(var i; i < hour.length ; i++){
    th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = hour[i];
  }
  th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = 'Daily Total';
}

//footer row
function renderFooterRow(){

}

//data row
function renderDataRow(){
  
}



var seattle = new Shops('seattle', 23, 65, 6.3);
var tokyo = new Shops('tokyo', 3, 24, 1.2);
var dubai = new Shops('dubai', 11, 38, 3.7);
var paris = new Shops('paris', 20, 38, 2.3);
var lima = new Shops('lima', 2, 16, 4.6);

var obj = [seattle, tokyo, dubai, paris, lima];

var container = document.getElementById('content-area');
var table = document.createElement('table');
container.appendChild(table);
table.setAttribute('cellspacing','15px');

renderHeaderRow(table);

for (var i = 0; i < obj.length; i++) {
  var shop = obj[i];
  shop.generateHourlySales();
}

  // seattle.generateHourlySales();
  // seattle.tableRender();




// Shops.prototype.listRender = function(){
//   var container = document.getElementById('content-area');
//   var h2 = document.createElement('h2');
//   container.appendChild(h2);
//   h2.textContent = this.location;
//   var ul = document.createElement('ul');
//   container.appendChild(ul);
//   for(var i = 0; i < hour.length; i++) {
//     var li = document.createElement('li');
//     ul.appendChild(li);
//     var salesInfo = hour[i] + ': ' + this.cookNumArr[i] + ' cookies';
//     // Template literal notatiion
//     // saleInfo = '${hours[i]}: ${seattle.hourlySales[i]} cookies'
//     li.textContent = salesInfo;
//   }
//   li = document.createElement('li');
//   li.textContent = 'Total: ' + this.totalSale + ' cookies';
//   ul.appendChild(li);
// };


















// var row = document.createElement('tr');
//   for(var i = -1 ; i < hour.length ; i++ ){
//     var rowData = document.createElement('td');
//     rowData.textContent = hour[i];
//     row.appendChild(rowData);
//   }
//   table.appendChild(row);
//   row = document.createElement('tr');
//   rowData = document.createElement('td');
//   rowData.textContent = this.location;
//   rowData.appendChild(row);
//   for( i = 0 ; i < hour.length ; i++ ){
//     var rowDataCook = document.createElement('td');
//     console.log(cookNumArr[i]);
//     rowDataCook.textContent = this.cookNumArr[i];
//     row.appendChild(rowDataCook);
//   }
//   table.appendChild(row);






















// var seattle = {
//   location : 'Seattle',
//   min : 23,
//   max : 65,
//   avgcookie : 6.3,
//   cookNumArr : [],
//   totalSale : 0,

//   avgNumCus : function(){
//     var rang = this.max - this.min;
//     var rand = Math.random() * rang + this.min;
//     return Math.ceil(rand);
//   },

//   generateHourlySales: function () {
//     for (var i = 0; i < hour.length ; i++) {  
//       var cookEachHour = Math.ceil(this.avgNumCus() * this.avgcookie);
//       this.cookNumArr.push( cookEachHour );
//       this.totalSale += cookEachHour;
//     }
//   },

//   render: function() {
//     var container = document.getElementById('content-area');
//     var h2 = document.createElement('h2');
//     container.appendChild(h2);
//     h2.textContent = this.location;
//     var ul = document.createElement('ul');
//     container.appendChild(ul);
//     for(var i = 0; i < hour.length; i++) {
//       var li = document.createElement('li');
//       ul.appendChild(li);
//       var salesInfo = hour[i] + ': ' + this.cookNumArr[i] + ' cookies';
//       // Template literal notatiion
//       // saleInfo = '${hours[i]}: ${seattle.hourlySales[i]} cookies'
//       li.textContent = salesInfo;
//     }
//     var li = document.createElement('li');
//     li.textContent = 'Total: ' + this.totalSale + ' cookies';
//     ul.appendChild(li);
//   },
// };

// // seattle.generateHourlySales();
// // seattle.render();

// var tokyo = {
//   location : 'Tokyo',
//   min : 3,
//   max : 24,
//   avgcookie : 1.2,
//   cookNumArr : [],
//   totalSale : 0,

//   avgNumCus : function(){
//     var rang = this.max - this.min;
//     var rand = Math.random() * rang + this.min;
//     return Math.ceil(rand);
//   },

//   generateHourlySales: function () {
//     for (var i = 0; i < hour.length ; i++) {  
//       var cookEachHour = Math.ceil(this.avgNumCus() * this.avgcookie);
//       this.cookNumArr.push( cookEachHour );
//       this.totalSale += cookEachHour;
//     }
//   },

//   render: function() {
//     var container = document.getElementById('content-area');
//     var h2 = document.createElement('h2');
//     container.appendChild(h2);
//     h2.textContent = this.location;
//     var ul = document.createElement('ul');
//     container.appendChild(ul);
//     for(var i = 0; i < hour.length; i++) {
//       var li = document.createElement('li');
//       ul.appendChild(li);
//       var salesInfo = hour[i] + ': ' + this.cookNumArr[i] + ' cookies';
//       // Template literal notatiion
//       // saleInfo = '${hours[i]}: ${seattle.hourlySales[i]} cookies'
//       li.textContent = salesInfo;
//     }
//     var li = document.createElement('li');
//     li.textContent = 'Total: ' + this.totalSale + ' cookies';
//     ul.appendChild(li);
//   },
// };

// // tokyo.generateHourlySales();
// // tokyo.render();

// var dubai = {
//   location : 'Dubai',
//   min : 11,
//   max : 38,
//   avgcookie : 3.7,
//   cookNumArr : [],
//   totalSale : 0,

//   avgNumCus : function(){
//     var rang = this.max - this.min;
//     var rand = Math.random() * rang + this.min;
//     return Math.ceil(rand);
//   },

//   generateHourlySales: function () {
//     for (var i = 0; i < hour.length ; i++) {  
//       var cookEachHour = Math.ceil(this.avgNumCus() * this.avgcookie);
//       this.cookNumArr.push( cookEachHour );
//       this.totalSale += cookEachHour;
//     }
//   },

//   render: function() {
//     var container = document.getElementById('content-area');
//     var h2 = document.createElement('h2');
//     container.appendChild(h2);
//     h2.textContent = this.location;
//     var ul = document.createElement('ul');
//     container.appendChild(ul);
//     for(var i = 0; i < hour.length; i++) {
//       var li = document.createElement('li');
//       ul.appendChild(li);
//       var salesInfo = hour[i] + ': ' + this.cookNumArr[i] + ' cookies';
//       // Template literal notatiion
//       // saleInfo = '${hours[i]}: ${seattle.hourlySales[i]} cookies'
//       li.textContent = salesInfo;
//     }
//     var li = document.createElement('li');
//     li.textContent = 'Total: ' + this.totalSale + ' cookies';
//     ul.appendChild(li);
//   },
// };

// // dubai.generateHourlySales();
// // dubai.render();

// var paris = {
//   location : 'Paris',
//   min : 20,
//   max : 38,
//   avgcookie : 2.3,
//   cookNumArr : [],
//   totalSale : 0,

//   avgNumCus : function(){
//     var rang = this.max - this.min;
//     var rand = Math.random() * rang + this.min;
//     return Math.ceil(rand);
//   },

//   generateHourlySales: function () {
//     for (var i = 0; i < hour.length ; i++) {  
//       var cookEachHour = Math.ceil(this.avgNumCus() * this.avgcookie);
//       this.cookNumArr.push( cookEachHour );
//       this.totalSale += cookEachHour;
//     }
//   },

//   render: function() {
//     var container = document.getElementById('content-area');
//     var h2 = document.createElement('h2');
//     container.appendChild(h2);
//     h2.textContent = this.location;
//     var ul = document.createElement('ul');
//     container.appendChild(ul);
//     for(var i = 0; i < hour.length; i++) {
//       var li = document.createElement('li');
//       ul.appendChild(li);
//       var salesInfo = hour[i] + ': ' + this.cookNumArr[i] + ' cookies';
//       // Template literal notatiion
//       // saleInfo = '${hours[i]}: ${seattle.hourlySales[i]} cookies'
//       li.textContent = salesInfo;
//     }
//     var li = document.createElement('li');
//     li.textContent = 'Total: ' + this.totalSale + ' cookies';
//     ul.appendChild(li);
//   },
// };

// // paris.generateHourlySales();
// // paris.render();

// var lima = {
//   location : 'lima',
//   min : 2,
//   max : 16,
//   avgcookie : 4.6,
//   cookNumArr : [],
//   totalSale : 0,

//   avgNumCus : function(){
//     var rang = this.max - this.min;
//     var rand = Math.random() * rang + this.min;
//     return Math.ceil(rand);
//   },

//   generateHourlySales: function () {
//     for (var i = 0; i < hour.length ; i++) {  
//       var cookEachHour = Math.ceil(this.avgNumCus() * this.avgcookie);
//       this.cookNumArr.push( cookEachHour );
//       this.totalSale += cookEachHour;
//     }
//   },

//   render: function() {
//     var container = document.getElementById('content-area');
//     var h2 = document.createElement('h2');
//     container.appendChild(h2);
//     h2.textContent = this.location;
//     var ul = document.createElement('ul');
//     container.appendChild(ul);
//     for(var i = 0; i < hour.length; i++) {
//       var li = document.createElement('li');
//       ul.appendChild(li);
//       var salesInfo = hour[i] + ': ' + this.cookNumArr[i] + ' cookies';
//       // Template literal notatiion
//       // saleInfo = '${hours[i]}: ${seattle.hourlySales[i]} cookies'
//       li.textContent = salesInfo;
//     }
//     var li = document.createElement('li');
//     li.textContent = 'Total: ' + this.totalSale + ' cookies';
//     ul.appendChild(li);
//   },

// };


