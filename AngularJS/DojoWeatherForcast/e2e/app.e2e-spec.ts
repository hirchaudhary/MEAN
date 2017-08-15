import { DojoWeatherForcastPage } from './app.po';

describe('dojo-weather-forcast App', () => {
  let page: DojoWeatherForcastPage;

  beforeEach(() => {
    page = new DojoWeatherForcastPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
