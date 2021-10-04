var description = document.getElementsByClassName('nordata');
var normaldata = [];
var i = 0;
var a = [];
var count = "";
var j = 0;
var ser = document.querySelector('#itemsearch');
// To Show Normal data without filter
fetch("https://fakestoreapi.com/products/").then(
   async data => {
      const adata = await data.json();
      normaldata = adata;
      normaldata.forEach((u) => {
         document.getElementById('data').innerHTML += `<div class="nordata" ><p class="IDP">${u.id}</p>${u.title}<br><img src=  ${u.image}   style="width:200px;height:200px"><br>Price => ${u.price} <br><center><button type="submit" id="btn" onclick="addcart(${u.id})">ADD TO CART</button></center></div><tr><tr><tr>`;
      });
   })
// To show data after search
ser.addEventListener('onkeyup', search = () => {
   document.getElementById('data').innerHTML = " "
   normaldata.forEach((u) => {
      if (u.title.toLowerCase().includes(ser.value.toLowerCase())) {
         document.getElementById('data').innerHTML += `<div class="nordata"><p class="IDP">${u.id}</p>${u.title}<br><img src=  ${u.image}   style="width:200px;height:200px"><br>Price => ${u.price} <br><center><button type="submit" id="btn"  onclick="addcart()">ADD TO CART</button></center></div><tr><tr><tr>`;
      }
   })
})
// To search data after category sorting
function getcatfilter() {
   i = 2;
   document.getElementById('data').innerHTML = " "
   if (document.getElementById('categorydropdown').value === normaldata.category) {
      alert('my data')
   }
   normaldata.forEach((u) => {
      if (document.getElementById('categorydropdown').value === u.category) {
         document.getElementById('data').innerHTML += `<div class="nordata"><p class="IDP">${u.id}</p>${u.title}<br><img src=  ${u.image}   style="width:200px;height:200px"><br>Price => ${u.price} <br><center><button type="submit" id="btn" onclick="addcart()">ADD TO CART</button></center></div><tr><tr><tr>`;
      }
   })
}
//  To show data after price sorting
function getfilter() {
   if (document.getElementById('FilterDropdown').value == 'L2H') {
      document.getElementById('data').innerHTML = " ";
      normaldata.sort(function (a, b) {
         return a.price - b.price;
      })
      if (i == 0) {
         normaldata.forEach((u) => {
            document.getElementById('data').innerHTML += `<div class="nordata"><p class="IDP">${u.id}</p>${u.title}<br><img src=  ${u.image}   style="width:200px;height:200px"><br>Price => ${u.price} <br><center><button type="submit" id="btn" onclick="addcart()">ADD TO CART</button></center></div><tr><tr><tr>`;
         })
      }
   } else {
      document.getElementById('data').innerHTML = " "
      normaldata.sort(function (a, b) {
         return b.price - a.price;
      })
      if (i == 0) {
         normaldata.forEach((u) => {
            document.getElementById('data').innerHTML += `<div class="nordata"><p class="IDP">${u.id}</p>${u.title}<br><img src=  ${u.image}   style="width:200px;height:200px"><br>Price => ${u.price} <br><center><button type="submit" id="btn" onclick="addcart()">ADD TO CART</button></center></div><tr><tr><tr>`;
         })
      }
   }
   normaldata.forEach((u, index) => {
      if (u.title.toLowerCase().includes(ser.value.toLowerCase())) {
         if (document.getElementById('categorydropdown').value === u.category) {
            document.getElementById('data').innerHTML += `<div class="nordata"><p class="IDP">${u.id}</p>${u.title}<br><img src=  ${u.image}   style="width:200px;height:200px"><br>Price => ${u.price} <br><center><button type="submit" id="btn"onclick="addcart()">ADD TO CART</button></center></div><tr><tr><tr>`;
         }
      }
   })
   return normaldata;
}
// add to cart store data 
function addcart(x) {
   a.push(x)
   console.log(a);
   localStorage.setItem("data", JSON.stringify(a));   
   document.getElementById('num').innerHTML = `CART ITEM ${a.length}`;
}