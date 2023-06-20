/// Date Object: answer o1 a

function DayOfWeek(day) {
  const date = new Date(day);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = date.getDay();
    const dayOfWeek = daysOfWeek[d]; 
   
    return dayOfWeek;
  
}

 const dayOfWeek = DayOfWeek('1993-10-4');
 console.log(dayOfWeek); 
