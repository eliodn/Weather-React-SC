export default function DateUtil(props) {
  constructor(date);
  date = date;
}

day((short = false));
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

if (short) {
  return days[date.getDay()].substring(0, 3);
} else {
  return days[date.getDay()];
}

time();
let minutes = date.getMinutes();
if (minutes < 10) minutes = `${0}minutes`;

return `${date.getHours()}:${minutes}`;

dayTime();
return `${day()} ${time()}`;
