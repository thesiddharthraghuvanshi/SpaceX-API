import { browser, by, element, ExpectedConditions } from 'protractor';

describe('DashboardComponent', () => {
    beforeEach(() => {
        browser.get('/');
    });

    it('should display filters bar, table, and chart components', async () => {
        const filtersBar = element(by.tagName('app-filters-bar'));
        const table = element(by.tagName('app-table'));
        const pieChart = element(by.tagName('app-pie-chart'));
        const barChart = element(by.tagName('app-bar-chart'));

        expect(await filtersBar.isPresent()).toBe(true);
        expect(await table.isPresent()).toBe(true);
        expect(await pieChart.isPresent()).toBe(true);
        expect(await barChart.isPresent()).toBe(true);
    });

    it('should load pie chart when "Pie Chart" button is clicked', async () => {
        const pieChartButton = element(by.buttonText('Pie Chart'));
        await pieChartButton.click();
        const pieChart = element(by.tagName('app-pie-chart'));
        const barChart = element(by.tagName('app-bar-chart'));

        expect(await pieChart.isPresent()).toBe(true);
        expect(await barChart.isPresent()).toBe(false);
    });

    it('should load bar chart when "Bar Chart" button is clicked', async () => {
        const barChartButton = element(by.buttonText('Bar Chart'));
        await barChartButton.click();
        const pieChart = element(by.tagName('app-pie-chart'));
        const barChart = element(by.tagName('app-bar-chart'));

        expect(await pieChart.isPresent()).toBe(false);
        expect(await barChart.isPresent()).toBe(true);
    });

    it('should update data on table row click', async () => {
        const tableRow = element.all(by.css('.mat-row')).first();
        await tableRow.click();
        const pieChartData = await element(by.tagName('app-pie-chart')).getAttribute('data');
        expect(pieChartData).toContain('1');
    });

    it('should update filters when filters are applied', async () => {
        const filtersBar = element(by.tagName('app-filters-bar'));
        await filtersBar.sendKeys('Some filter text');
        const table = element(by.tagName('app-table'));
        const tableData = await table.getAttribute('data');

        expect(tableData).toContain('Some filter text');
    });
});
