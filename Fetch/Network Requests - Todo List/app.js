// Función asincra para realizar la solicitud el get MAS DETALLADA  
async function fetchData() {
    //  Hacemos una  constante de la URL de la API 
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos'; // Y si acgreamos esto ?_limit=10 he visto que puedes hacer que solo obtengas los primero 10 
  
    try {
      // Hacer la solicitud GET utilizando Fetch con await
      const response = await fetch(apiUrl);
  
      // Verificar si la solicitud fue exitosa 
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
  
      // Convertir la respuesta a formato JSON con await
      const data = await response.json();
  
      // Aquí puedes trabajar con los datos obtenidos de la API
      console.log(data);
    } catch (error) {
      // Manejar cualquier error que pueda ocurrir durante la solicitud
      console.error('Error en la solicitud:', error);
    }
  }
  
  // Llamar a la función para obtener los datos
  fetchData();
  
  // lo que hicimos en clase MAS RESUMIDA   
  async function todoList() {
    let url="https://jsonplaceholder.typicode.com/todos"
  
    let list = await fetch(url)
    console.log(list)
    let data = await list.json()
    console.log(data)
  }
  todoList()
  

