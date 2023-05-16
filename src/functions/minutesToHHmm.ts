export function minutesToHHmm (minutes: number) {

const m = minutes % 60;

const h = (minutes-m)/60;

return  + h.toString() + " ч. " + m.toString() + " мин. ";
}