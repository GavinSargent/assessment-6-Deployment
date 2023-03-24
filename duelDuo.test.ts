
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

// test('Title shows up when page loads', async () => {
//     const title = await driver.findElement(By.id('title'))
//     const displayed = await title.isDisplayed()
//     expect(displayed).toBe(true)
// })


test("Test checks clicking on the 'Draw' button displays the div with id = 'choices'", async()=>{
    await driver.findElement(By.id('draw')).click()

    await driver.sleep(2000)

    let displayedCards = await driver.findElement(By.id('choices'))
    let displayed = await displayedCards.isDisplayed()
    expect(displayed).toBe(true)
})

//Check that clicking an “Add to Duo” button displays the div with id = “player-duo”
test("Test checks that clicking 'Add to Duo' button displays the div with id ='player-duo", async ()=>{
    await driver.findElement(By.id('draw')).click()

    await driver.sleep(200)

    await driver.findElement(By.xpath("//button[text()='Add to Duo']")).click()

    await driver.sleep(200)

    let playerBot = await driver.findElement(By.id('player-duo'))

    let displayed = await playerBot.isDisplayed()

    expect(displayed).toBe(true)
})