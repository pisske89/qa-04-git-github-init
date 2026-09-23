import {
    multiply,
    calculatePercentage,
    isEven,
    compareStrings,
    isPositive,
} from "../src/Math5";

describe("Testiranje pomocnih funkcija", () => {
    // 1. Množenje
    describe("multiply", () => {
        test("treba tacno pomnoziti dva pozitivna broja", () => {
            expect(multiply(4, 5)).toBe(20);
        });

        test("treba vratiti negativan broj kada se mnoze pozitivan i negativan", () => {
            expect(multiply(3, -2)).toBe(-6);
        });
    });

    // 2. Izračunavanje procenta
    describe("calculatePercentage", () => {
        test("treba izracunati tacan procenat od ukupnog broja", () => {
            expect(calculatePercentage(25, 200)).toBe(12.5);
        }); // <-- Ovdje je falilo zatvaranje prvog testa!

        test("treba vratiti 100 kada je deo jednak ukupnom broju", () => {
            expect(calculatePercentage(50, 50)).toBe(100);
        });
    });

    // 3. Provjera parnog broja
    describe("isEven", () => {
        test("treba vratii truthy za paran broj", () => {
            expect(isEven(4)).toBeTruthy();
        });

        test("treba vratiti falsy za neparan broj", () => {
            expect(isEven(5)).not.toBeTruthy();
        });
    });
})