export const sorted = (numbers:number[]) => {
  const result = numbers.sort((a, b) => a-b);
  console.log(result);
}

const numbers= [1,5,3,7,0,5,3,6]

sorted(numbers)