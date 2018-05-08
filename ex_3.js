/*Write a JavaScript program to get the current date.
Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */
let current = new Date();
let year = current.getFullYear();
let month = current.getMonth()+1;
let monthSet = month < 10 ? '0'+month : month;
let date = current.getDate();
let dateSet = date < 10 ? '0'+date : date;
console.log(monthSet+'-'+dateSet+'-'+year);