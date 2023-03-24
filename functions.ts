const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test("return the same number of items as it receives", async ()=>{
        expect(shuffleArray([1,2,3])).toHaveLength(3)
    })

    test("returns the same items in an array", async () => {
        let returnedAnswer = shuffleArray([1,2,3])
        expect(returnedAnswer.includes(1,2,3)).toBe(true)
    })
})