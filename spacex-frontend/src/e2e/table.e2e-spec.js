import { browser, by, element, ExpectedConditions as EC } from 'protractor';

describe('TableComponent', () => {
    beforeEach(() => {
        browser.get('/');
    });

    it('should display the filter input and apply filter correctly', async () => {
        const filterInput = element(by.css('input[placeholder="Ex. Mia"]'));
        await filterInput.sendKeys('Your_Filter_Text');
        const filteredRows = element.all(by.css('.mat-row'));
        expect(await filteredRows.count()).toBe(Your_Expected_Number_Of_Filtered_Rows);
    });

    it('should open dialog on row click', async () => {
        const rowToClick = element.all(by.css('.mat-row')).first();
        await rowToClick.click();
        const dialog = element(by.css('.mat-dialog-container'));
        expect(await dialog.isPresent()).toBe(true);
    });

    it('should navigate to Google Maps on clicking get directions', async () => {
        const getDirectionsIcon = element.all(by.css('.bi.bi-sign-turn-right-fill')).first();
        await getDirectionsIcon.click();
    });

    it('should highlight selected row on click', async () => {
        const rowToClick = element.all(by.css('.mat-row')).first();
        await rowToClick.click();
        expect(await rowToClick.getAttribute('class')).toContain('highlight');
    });
});
