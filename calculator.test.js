sum = require("./calculator")

test('(local) verificar suma de dos números positivos', ()=>{
    expect(sum(5,4)).toBe(9)
})

test('(prod) verificar suma de dos números positivos, caso 2', ()=>{
    expect(sum(4,4)).toBe(8)
})