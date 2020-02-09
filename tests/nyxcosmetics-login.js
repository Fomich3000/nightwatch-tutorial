module.exports = {
  'Cycle URL login bug test' : function (browser) {

    const loginUrlSelector = '.header-link_login';
    const mainLogoSelector = '.header-logo';

    browser
      .url('https://nyxcosmetic.ru/')
      .waitForElementVisible('body')
      .waitForElementVisible(loginUrlSelector)
      .click(loginUrlSelector)
      .waitForElementVisible(mainLogoSelector)
      .click(mainLogoSelector)
      .waitForElementVisible(loginUrlSelector)
      .click(loginUrlSelector)
      .assert.urlContains('/account/login')
      .end();
  }
};
