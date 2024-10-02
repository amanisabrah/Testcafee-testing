import { Selector } from "testcafe"


fixture `Devexpress Testcafe testing application`
    .page `https://devexpress.github.io/testcafe/example/`
    .before(async t =>{
        //test setup goes here, axait runDatabaseReset(), await seedTestData()
    })
    .beforeEach(async t => {
        //run befor each test 
    })
    .after(async t =>{
        //cleaning test data, Logging and sending data tp monitoring systems
    })
    .afterEach(async t => {
        //runs after each test
    })

test('Test Case1', async t =>{
    //here goes test cafe code
    await t.setTestSpeed(0.01)
    await t.typeText('#developer-name', 'Amani')
    await t.click('#submit-button')

    await t.expect(Selector('#article-header').innerText). contains('Amani')
})