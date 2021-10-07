var count = 0;
var s = [];
var i = 0,k=0;
var  normaldata = []
s = JSON.parse(localStorage.getItem("data"));
var jh=0;
datause();
function datause() {
  i++;
  document.getElementById('pdata').innerHTML = "";
  fetch("https://fakestoreapi.com/products/").then(
    async data => {
      const adata = await data.json();
      normaldata = adata;
      normaldata.forEach(u => {
        for (let i = 0; i < s.length; i++) {
          if (u.id == s[i]) {            
            document.getElementById('pdata').innerHTML += `<div class="nordata">${u.title}<br>
                <img src=  ${u.image} style="width:200px;height:200px">
                <br><h5 id="price">Price/per item => ${u.price} </h5><br>
                <lable>Select Quantity</lable><br>
                <button class="fas fa-plus" onclick="add(${u.price},${i})"></button>
                <input type="number" id="quntity${i}" min="1" value="1" style="width =10px;" ></input>
                <button class="fas fa-minus" onclick="sub(${u.price},${i})"></button>
                <button class="far fa-trash-alt" type="Delete" onclick="remove(${s[i]},${u.price})"></button>
                </div><tr><tr><tr>`;
                if(k===0){
                count+=u.price;
                document.getElementById('total').innerHTML = `TOTAL = ${  Math.floor(count)}`;
                }
          } 
        }
      });
    })
}
function add(e,p){
  count=count+e;
   jh++;
  total();
  document.getElementById(`quntity${p}`).value= jh;
}
function sub(e,p){
  jh--;
  document.getElementById(`quntity${p}`).value= jh;
  count=count-e;
  total();
}
//remove cart item
function remove(a,b) {
  count = count - b;
  total();
  var index = s.indexOf(a);
  localStorage.removeItem("data", s.splice(index, 1));
  console.log(localStorage.getItem("data"))
  document.getElementById('pdata').innerHTML = "";
  k++;
  datause();
}
function total(){

  document.getElementById('total').innerHTML = " ";
  document.getElementById('total').innerHTML = `TOTAL = ${  Math.floor(count)}`;
}