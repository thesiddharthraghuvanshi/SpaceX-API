import { browser, by, element } from 'protractor';

describe('FiltersBarComponent', () => {
    beforeEach(() => {
        browser.get('/');
    });

    it('should have a name input field', () => {
        const nameInput = element(by.css('input[formControlName="name"]'));
        expect(nameInput.isPresent()).toBeTruthy();
    });

    it('should have a region input field', () => {
        const regionInput = element(by.css('input[formControlName="region"]'));
        expect(regionInput.isPresent()).toBeTruthy();
    });

    it('should have a pageNumber input field', () => {
        const pageNumberInput = element(by.css('input[formControlName="pageNumber"]'));
        expect(pageNumberInput.isPresent()).toBeTruthy();
    });

    it('should have a records input field', () => {
        const recordsInput = element(by.css('input[formControlName="records"]'));
        expect(recordsInput.isPresent()).toBeTruthy();
    });

    it('should emit filters when search button is clicked', () => {
        const nameInput = element(by.css('input[formControlName="name"]'));
        const regionInput = element(by.css('input[formControlName="region"]'));
        const pageNumberInput = element(by.css('input[formControlName="pageNumber"]'));
        const recordsInput = element(by.css('input[formControlName="records"]'));
        const searchButton = element(by.css('button[type="submit"]'));

        nameInput.sendKeys('Test Name');
        regionInput.sendKeys('Test Region');
        pageNumberInput.sendKeys('1');
        recordsInput.sendKeys('10');

        searchButton.click();
    });
});
