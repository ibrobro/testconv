/**
 * 
 */
export function convertDDToDMS(coordinate: number): string {
  const d = Math.floor(Math.abs(coordinate));
  const mfactor = (Math.abs(coordinate) - Math.floor(Math.abs(coordinate))) * 60;
  const m = Math.floor(mfactor);
  const sfactor = (Math.abs(mfactor) - Math.floor(mfactor)) * 60;
  const s = Math.floor(sfactor);

  return `${coordinate < 0 ? '-' : ' '}${d}° ${m}' ${s}''`;
}