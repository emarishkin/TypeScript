class TypeScript{
    vesrsion:string

    constructor(vesrsion:string){
        this.vesrsion=vesrsion
    }

    info(name:string){
        return `[${name}]: type script version is ${this.vesrsion}`
    }
}

class Car{
    readonly model:string
    readonly namberOfWeels:number=4

    constructor(theModal:string){
        this.model=theModal
    }
}