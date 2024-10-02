import { Selector } from "testcafe"


fixture `Devexpress Testcafe testing application`
    .page `https://devexpress.github.io/testcafe/example/`
    .before(async t =>{
        //test setup goes here, axait runDatabaseReset(), await seedTestData()
    })
    .beforeEach(async t => {
        //run befor each test 
        await t.setTestSpeed(0.5)

    })
    .after(async t =>{
        //cleaning test data, Logging and sending data tp monitoring systems
    })
    .afterEach(async t => {
        //runs after each test
    })

test('Test Case1', async t =>{
    //here goes test cafe code
    const inputName = Selector('#developer-name')
    const submitButton = Selector('#submit-button')
    const welcomeText = Selector('#article-header').innerText
    const OPSystem = Selector('#windows')
    const firstCheckBox = Selector ('#remote-testing')
    const secCheckBox = Selector ('#reusing-js-code')


    await t.typeText( inputName, 'Amani')
    await t.click( OPSystem)
    await t.click( firstCheckBox)
    await t.click( secCheckBox)
   //await t.wait(3000)//wait for 3 sec
    await t.click( submitButton)
    await t.expect( welcomeText).contains('Amani')
})