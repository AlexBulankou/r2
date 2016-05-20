jest.unmock('../src/client/app/components/AppInsights.js');
import AppInsights from '../src/client/app/components/AppInsights.js'

  beforeEach(() => {
    window.appInsights = undefined;
 });

describe('Shim AI methods creation test', () => {
  it('Verifies AI methods are created', () => {
    expect(AppInsights.initialize).toBeDefined();
    AppInsights.initialize({instrumentationKey:"test"});
    expect(AppInsights.trackTrace).toBeDefined();
    expect(AppInsights.setAuthenticatedUserContext).toBeDefined();
    expect(window.appInsights.queue).toBeDefined();
  });
});

describe('Shim AI methods script load test', () => {
  it('Verifies script is loaded and queue is deleted', () => {
    AppInsights.initialize({instrumentationKey:"test"});
    expect(window.appInsights.queue).toBeDefined();
    require("../node_modules/applicationinsights-js/dist/ai.js");
    expect(AppInsights.trackTrace).toBeDefined();
    expect(window.appInsights.queue).toBeUndefined();
  });
});