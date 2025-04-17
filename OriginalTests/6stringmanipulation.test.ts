// CONCEPT: toLowerCase
// NAME: convertToLowercase

function convertToLowercase(input: string): string {
    return "";
}

// CONCEPT: split
// NAME: divideByHyphen

function divideByHyphen(input: string): string[] {
    return [];
}

// CONCEPT: replace (spaces)
// NAME: eraseSpaces

function eraseSpaces(input: string): string {
    return "";
}

// CONCEPT: trim
// NAME: clipWhitespace

function clipWhitespace(input: string): string {
    return "";
}

// CONCEPT: replace (unwanted chars)
// NAME: sanitizeText

function sanitizeText(input: string): string {
    return "";
}


// TESTS

describe("convertToLowercase function", () => {
    test("changes uppercase to lowercase", () => {
        expect(convertToLowercase("HELLO")).toBe("hello");
    });

    test("handles strings with a mix of cases", () => {
        expect(convertToLowercase("HeLLo WoRLD")).toBe("hello world");
    });
});

describe("divideByHyphen function", () => {
    test("divides a string at the hyphen", () => {
        expect(divideByHyphen("a-b-c")).toEqual(["a", "b", "c"]);
    });

    test("returns an array with one item when there are no hyphens", () => {
        expect(divideByHyphen("abc")).toEqual(["abc"]);
    });
});

describe("eraseSpaces function", () => {
    test("takes out all spaces", () => {
        expect(eraseSpaces("a b c")).toBe("abc");
    });

    test("takes out spaces at the start, end, and inside", () => {
        expect(eraseSpaces("  hello world  ")).toBe("helloworld");
    });
});

describe("clipWhitespace function", () => {
    test("takes out only the outer whitespace", () => {
        expect(clipWhitespace("  hello world  ")).toBe("hello world");
    });

    test("returns the same string if there is no outer whitespace", () => {
        expect(clipWhitespace("hi")).toBe("hi");
    });
});

describe("sanitizeText function", () => {
    test("removes slashes, quotes, and semicolons", () => {
        expect(sanitizeText(`"he/ll'o;`)).toBe("hello");
    });

    test("cleans a complex mix of unwanted characters", () => {
        expect(sanitizeText(` /he'll;"o/ `)).toBe("hello");
    });
});


// ANSWERS

/*
function convertToLowercase(input: string): string {
    return input.toLowerCase();
}

function divideByHyphen(input: string): string[] {
    return input.split("-");
}

function eraseSpaces(input: string): string {
    return input.replace(/\s/g, "");
}

function clipWhitespace(input: string): string {
    return input.trim();
}

function sanitizeText(input: string): string {
    return input.replace(/[\/"'`;]/g, "");
}
*/

