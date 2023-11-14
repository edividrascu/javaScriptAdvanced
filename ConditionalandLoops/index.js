function calculateSalary(puestoDeTrabajo) {
    let salary;     // definimos una variable vacia para poder meterne datos
  
    switch (puestoDeTrabajo) {  
        case 'director general':
            salary = 2200; 
            break;
        case 'gerente':
        case 'cto':
                salary = 1800;
                break;
        case 'promotor':
            salary = 1500;
            break;
        default:
            salary = 1000;
    }
  return salary; 
    
}

const ceoSalary = calculateSalary('director general'); //aqui le decimos que el ceoSalary es igual a la function de calculateSalary 
const managerSalary = calculateSalary('gerente');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('promotor');
const otherSalary = calculateSalary('other');

console.log(ceoSalary + " director general");       // 2200
console.log(managerSalary + " gerente");   // 1800
console.log(ctoSalary + " cto");       // 1800
console.log(developerSalary +" promotor"); // 1500
console.log(otherSalary +" Predeterminado");     // 1000

 

// document.getElementById('salaryForm').addEventListener('submit', e => {
//     e.preventDefault();

   
//     const formData = new FormData(e.target);
//     const puestoDeTrabajo = formData.get('puesto');

   
//     const salary = calculateSalary(puestoDeTrabajo);

   
//     const resultadoSalario = document.getElementById('resultadoSalario');
//     resultadoSalario.textContent = `El salario para ${puestoDeTrabajo} es: ${salary} euros.`;
// });
