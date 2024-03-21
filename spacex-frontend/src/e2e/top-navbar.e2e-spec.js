const { browser, by, element } = require('protractor');

describe('AppComponent', () => {
    beforeEach(() => {
        browser.get('/');
    });

    it('should display the toolbar with menu button', () => {
        const toolbar = element(by.css('.spacex-toolbar'));
        const menuButton = toolbar.element(by.css('button[mat-icon-button]'));

        expect(toolbar.isPresent()).toBeTruthy();
        expect(menuButton.isPresent()).toBeTruthy();
    });

    it('should toggle sidenav when menu button is clicked', () => {
        const menuButton = element(by.css('button[mat-icon-button]'));
        const sidenav = element(by.css('.mat-sidenav'));

        menuButton.click();
        expect(sidenav.isPresent()).toBeTruthy();

        menuButton.click();
        expect(sidenav.isPresent()).toBeFalsy();
    });
});
