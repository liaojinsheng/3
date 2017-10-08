import { MyappRouterPage } from './app.po';

describe('myapp-router App', () => {
  let page: MyappRouterPage;

  beforeEach(() => {
    page = new MyappRouterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
