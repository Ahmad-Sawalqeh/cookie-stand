'use strict';

// var obj = [seattle, tokyo, dubai, paris, lima];//5
var hour = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];//14

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
};

Shops.prototype.generateHourlySales = function() {
  for (var i = 0; i < hour.length ; i++) {
    var cookEachHour = Math.ceil(this.avgNumCus() * this.avgcookie);
    this.cookNumArr.push( cookEachHour );
    this.totalSale += cookEachHour;
  }
};

Shops.prototype.renderDataRow = function(table){
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = this.location;

  for (var i = 0; i < this.cookNumArr.length; i++) {
    td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.cookNumArr[i];
  }
  td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = this.totalSale;
};

//header row
function renderHeaderRow(table){
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var th = document.createElement('th');
  tr.appendChild(th);
  for(var i = 0; i < hour.length ; i++){
    th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = hour[i];
  }
  th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = 'Daily Total';
}

//footer row
var footerRow;
function renderFooterRow(table){
  var tr = document.createElement('tr');
  footerRow = tr;
  table.appendChild(tr);
  var td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = 'Totals';
  var megaTotal = 0;
  // loop through totals
  for (var i = 0; i < hour.length; i++) {
    td = document.createElement('td');
    tr.appendChild(td);
    var totalHourSales = 0;
    for (var j = 0; j < obj.length; j++) {
      var shop = obj[j];
      totalHourSales += shop.cookNumArr[i];
    }
    td.textContent = totalHourSales;
    megaTotal += totalHourSales;
  }
  td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = megaTotal;
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
// table.setAttribute('cellspacing','15px');

renderHeaderRow(table);
for (var i = 0; i < obj.length; i++) {
  var shop = obj[i];
  shop.renderDataRow(table);
}
renderFooterRow(table);

function assignNullValueToInputs(){
  document.getElementById('input1').value = null;
  document.getElementById('input2').value = null;
  document.getElementById('input3').value = null;
  document.getElementById('input4').value = null;
}

function onClickHandler(event) {
  event.preventDefault();
  var locationName = event.target.location.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avgSales = parseFloat(event.target.avgSales.value);
  var newShop = new Shops(locationName, min, max, avgSales);
  obj.push(newShop);
  table.removeChild(footerRow);
  newShop.renderDataRow(table);
  renderFooterRow(table);
  assignNullValueToInputs();
}
var form = document.getElementById('addShopForm');
form.addEventListener('submit', onClickHandler);


