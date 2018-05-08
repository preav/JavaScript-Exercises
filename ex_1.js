//Write a JavaScript program to display the current day and time in the following //format:
//Sample Output : Today is : Friday.
//Current time is : 4 PM : 50 : 22
let current = new Date();
let weekday = current.getDay();
let time = current.getHours();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday' , 'Friday', 'Saturday']
console.log('Today is : ',days[weekday]);
console.log('Time is  : ', getTime());



function getTime(){
 let current = new Date();
 let hour = current.getHours();
 let time = hour < 12 ? ' AM' : ' PM';
 let minute = current.getMinutes();
 let seconds = current.getSeconds();
 return hour+time+' : '+minute+' : '+seconds;
}