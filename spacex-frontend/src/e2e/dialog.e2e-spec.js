import { browser, by, element } from 'protractor';

describe('DialogComponent', () => {
    beforeEach(() => {
        browser.get('/');
    });

    it('should display the name and full name', () => {
        const name = element(by.css('.bolder')).getText();
        const fullName = element(by.css('.container > div:nth-child(1) > div:nth-child(2)')).getText();
        expect(name).toEqual('Your Expected Name');
        expect(fullName).toEqual('Your Expected Full Name');
    });

    it('should display the location information', () => {
        const region = element(by.css('.locationText > div:nth-child(1) > span:nth-child(2)')).getText();
        const locality = element(by.css('.locationText > div:nth-child(1) > span:nth-child(3)')).getText();
        expect(region).toEqual('Your Expected Region');
        expect(locality).toEqual('Your Expected Locality');
    });

    it('should display launches information', () => {
        const launches = element.all(by.css('.d-flex.flex-wrap a'));
        expect(launches.count()).toBe(Your_Expected_Number_Of_Launches);
    });

    it('should display rockets information', () => {
        const rockets = element.all(by.css('.border.p-1.m-2 a'));
        expect(rockets.count()).toBe(Your_Expected_Number_Of_Rockets);
    });

    it('should close the dialog when Close button is clicked', () => {
        const closeButton = element(by.css('button[mat-dialog-close]'));
        closeButton.click();
    });
});
