// const str: string = 'Hello'
// console.log(str)

const isFetchinng: boolean = true
const int: number = 30
const float:number=30.2
const massage:string='hello world'

// массивы

const numberArray:number[] = [1,1,2,3,5,5,7,7]
const numberArray2:Array<number> = [1,1,2,3,5,5,7]

const words:string[]=['hello','TypeScript']

// tuple
const contact:[string,number] = ['Egor',112123]

//any модкм измкнит переменную вне зависимости от ее типа
let variable:any=42
variable='new string'
variable=[]

// =====

function sayMyName(name:string):void{
    console.log(name)
}
sayMyName('egor')

// never

function throwError(massage:string): never{
    throw new Error(massage)
}

function infinite():never{
    while(true){

    }
}
 // type создан к типа

type Login = string
const login:Login='admin'

type ID= string | Number
const id1:ID=1
const id2:ID='123'

// null & underfined

type SomeType = string | null | undefined


