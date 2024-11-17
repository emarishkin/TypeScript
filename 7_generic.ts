const arrayOfNumbers:Array<number>=[1,2,2,234,234]
const arrayOfStrings:Array<string>=['helpp','hello']

function reverse<T>(array: T[]):T[]{
 return array.reverse()
}
reverse(arrayOfNumbers)
reverse(arrayOfStrings)