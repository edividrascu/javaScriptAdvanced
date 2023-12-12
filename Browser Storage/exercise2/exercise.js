// es el mismo ejercicio que el piermo sin darme cuenta ya habia hecho lo de impirmirlo por la consola 
const user = {
  id: 1,
  name: "John",
  age: 25,
};

localStorage.setItem("user", JSON.stringify(user));


const getUser = JSON.parse(localStorage.getItem("user"));
console.log(getUser);

let p = document.getElementById("p");

p.innerHTML = "ID: " + getUser.id + ", Name: " + getUser.name + ", Age: " + getUser.age;
p.style.background = "tomato"
p.style.color = "white"
p.style.marginLeft = "20px"
p.style.width = "400px"
p.style.fontSize = "30px"
