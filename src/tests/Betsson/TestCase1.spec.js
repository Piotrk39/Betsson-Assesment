const {test, expect} = require('@playwright/test');
const { CommonSteps } = require('../../pages/CommonSteps');
const { RegistrationPage } = require('../../pages/Registration/RegistrationPage');

test('Successful Registration', async ({ page, baseURL }) => {
    const common = new CommonSteps(page);
    const register = new RegistrationPage(page);

    await test.step('Navigate to Registration page', async ()=> {
    await common.navigate(baseURL);
  });

  await test.step('Fill in the form and submit it', async ()=> {
     await register.fillinRegistrationForm();
     await register.clickRegisterButton();
  });

  await test.step('Verify the pop-up', async ()=> {
    await register.verifyRegistrationMessage();
  })

});