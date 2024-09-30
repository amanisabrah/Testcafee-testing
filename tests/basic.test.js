import { Selector } from "testcafe"


fixture `Devexpress Testcafe testing application`
    .page `https://devexpress.github.io/testcafe/example/`

test('Test Case1', async t =>{
    //here goes test cafe code
    await t.typeText('#developer-name', 'Amani sabra')
    await t.click('#submit-button')

})