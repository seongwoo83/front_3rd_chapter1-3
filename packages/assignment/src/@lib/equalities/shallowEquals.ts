// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== 'object' || objA === null ||
      typeof objB !== 'object' || objB === null) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(objB, key) || objA[key] !== objB[key]) {
      return false;
    }
  }
  return true;
}
// export function shallowEquals(objA: any, objB: any): boolean {
//   if(objA === objB){
//     return true;
//   }
//   if(typeof objA !== 'object' || typeof objB !== 'object'){
//     return false;
//   }else{
//     const keyOfA : string[] = Object.keys(objA);
//     const keyOfB : string[] = Object.keys(objB);

//     if(keyOfA.length !== keyOfB.length){
//       return false;
//     }
//     for(const key of keyOfA){
//       if(!keyOfB.includes(key) || objA[key] !== objB[key]){
//         return false;
//       }
//     }
//   }

//   return true;
// }
