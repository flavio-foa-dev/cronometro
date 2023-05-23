export function convertTimeToSeg(tempo:string){
  if(!tempo){ return 0}
  const [hour="0", minute="0", second="0"] = tempo.split(':');

  const hourToSeg = Number(hour) * 3600;
  const minutToSeg = Number(minute) * 60;
  const secutToSeg = Number(second) * 1

  return hourToSeg + minutToSeg + secutToSeg

}