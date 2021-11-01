export const convertHourToMinutes = (time: string) => {
  const [hour, minutes] = time?.split(":").map(Number);
  const timeInMinutes = hour * 60 + minutes;
  return timeInMinutes;
};

export const convertMinutesToHoursMinutes = (minutes: number) => {
  let h: number | string = Math.floor(minutes / 60);
  let m: number | string = minutes % 60;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  return `${h}:${m}`;
};
