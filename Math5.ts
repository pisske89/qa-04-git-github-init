export function  multiply(a: number, b: number): number {
    return a * b
}
export function calculatePercentage(part: number, total: number): number {
    if (total === 0) {
        throw new Error('total is less than 0');
    }
    return (part/total) * 100;
}

export function isEven(num: number) : boolean{
    return num % 2 === 0;
}

export function compareStrings(str1:string, str2:string) : boolean {
    return str1 === str2
}

export function isPositive(nb:number): boolean {
    return nb > 0
}

