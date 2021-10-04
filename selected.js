var count = 0;
var s = [];
var i = 0;
s = JSON.parse(localStorage.getItem("data"));
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
                <br>Price/per item => ${u.price} <br>
                <lable>Select Quantity</lable><br>
                <button class="fas fa-plus" onclick="add(${u.price})"></button>
                <input type="number" id="quntity" value="${1}" ></input>
                <button class="fas fa-minus" onclick="sub(${u.price})"></button>
                </div><tr><tr><tr><button class="far fa-trash-alt" type="Delete" onclick="remove(${s[i]})"></button>`;
          }
        }
      });
    })
}
//add quntity
add = (e) => {

  count++
  document.getElementById('quntity').value = count;
  document.getElementById('total').innerHTML = `Total = ${e * count}`;
  console.log("add" + e * count)

}
// subtract quantity
sub = (e) => {
  count--;
  document.getElementById('quntity').value = count;
  document.getElementById('total').innerHTML = `Total = ${e * count}`;
  console.log(`sub` + e * count)
}
//remove cart item
function remove(a) {
  var index = s.indexOf(a);
  localStorage.removeItem("data", s.splice(index, 1));
  console.log(localStorage.getItem("data"))
  document.getElementById('pdata').innerHTML = "";
  datause();
}
