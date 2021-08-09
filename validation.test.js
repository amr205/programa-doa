const validatePassord = require('./validation').validatePassord

describe('Validation testing',()=>{
    it('should run', ()=>{})

    it('should return false when empty', ()=>{
        expect(validatePassord('')).toBe(false)
    })

    it('should return false when pwd is less 8 chars', ()=>{
        expect(validatePassord('ooooooo')).toBe(false)
    })

    it('should return true when pwd have at least one Upper, one Lower and one Digit', ()=>{
        expect(validatePassord('MochaJest1212')).toBe(true)
    })

    it('should return false when pwd  doesnt have at least one Upper', ()=>{
        expect(validatePassord('mochajest1212')).toBe(false)
    })

    it('should return false when pwd  doesnt have at least one Lower', ()=>{
        expect(validatePassord('MOCHAJEST1212')).toBe(false)
    })

    it('should return false when pwd  doesnt have at least one Digit', ()=>{
        expect(validatePassord('MochaJestMOCHA')).toBe(false)
    })
})