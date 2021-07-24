export default {
    'prefix cb': () => `
        opcodePrefix = 0xcb;
    `,
    'prefix ed': () => `
        opcodePrefix = 0xed;
    `,
    'DI': () => `
        iff1 = iff2 = 0;
        break;
    `,
    'JP nn': () => `
        pc = u16(readMem(pc++)) + (u16(readMem(pc++)) << 8);
    `,
    'LD DE,nn': () => `
        E = readMem(pc++);
        D = readMem(pc++);
    `,
    'LD I,A': () => `
        I = A;
        t++;
    `,
    'LD r,n': (r) => `
        ${r} = readMem(pc++);
    `,
    'LD r,r': (r1, r2) => (
        r1 == r2 ? '' : `
        ${r1} = ${r2};
        `
    ),
    'NOP': () => '',
    'OUT (n),A': () => `
        readMem(pc++);
        t += 4;
    `,
    'XOR A': () => `
        A = 0;
        F = sz53pTable[0];
    `,
    'XOR r': (r) => `
        A = A ^ ${r};
        F = sz53pTable[A];
    `,
}