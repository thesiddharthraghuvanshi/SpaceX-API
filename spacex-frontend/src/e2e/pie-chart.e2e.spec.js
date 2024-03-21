import { browser, by, element } from 'protractor';

describe('PieChartComponent', () => {
    beforeEach(() => {
        browser.get('/');
    });

    it('should display the canvas element if running in the browser', async () => {
        const canvasElement = element(by.tagName('canvas'));
        expect(await canvasElement.isPresent()).toBe(true);
    });

    it('should set correct data and labels on changes', async () => {
        const datasetLabels = ['Label1', 'Label2'];
        const data = [10, 20];
        const chartLabel = 'Test Chart';
        await element(by.css('input[data-testid="datasetLabels"]')).sendKeys(datasetLabels.join(','));
        await element(by.css('input[data-testid="data"]')).sendKeys(data.join(','));
        await element(by.css('input[data-testid="chartLabel"]')).sendKeys(chartLabel);
        const canvasElement = element(by.tagName('canvas'));
        const backgroundColor = await canvasElement.getAttribute('data-chart-background-color');
        expect(backgroundColor).toContain('lightblue');
        expect(backgroundColor).toContain('lightgreen');
    });
});
