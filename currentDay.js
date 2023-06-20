// Date Object: answer o1 b

function CurrentDay() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const d = currentDate.getDay();
  const currentDayOfWeek = daysOfWeek[d];
  return currentDayOfWeek;
}
const currentDayOfWeek = CurrentDay();
console.log(currentDayOfWeek);