module.exports = {
  'Google Advanced Search form test' : function (browser) {

      const categorySelector = 'a[href="https://nyxcosmetic.ru/lips"]';


      browser
        .url('https://nyxcosmetic.ru/')
        .waitForElementVisible('body')
        .waitForElementVisible(categorySelector)
        .click(categorySelector)
        .saveScreenshot('tests_output/categorySelect.png')
        .end();
    }
  };
