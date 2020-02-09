module.exports = {
  'Cycle URL login bug test' : function (browser) {
    browser
      .url('https://nyxcosmetic.ru/')
      .waitForElementVisible('body')
      .waitForElementVisible('.header-link_login')
      .click('.header-link_login')
      .waitForElementVisible('.header-logo')
      .click('.header-logo')
      .waitForElementVisible('.header-link_login')
      .click('header-link_login')
      .assert.urlContains('https://nyxcosmetic.ru/customer/account/login')
      .end();
  }
};
