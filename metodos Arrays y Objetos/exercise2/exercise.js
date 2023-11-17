// In this example we are trying to check if a value for the `city` property is defined. However, the code can be simplified. How can we do that?

const order = {}; 

if (!order?.customer?.address?.city) { // esto "!" es el negar, esto "?" pregunta si existe la propiedad en el objeto
  alert('City is required');
}else {
  alert("tramite enviado!!!!")
}
