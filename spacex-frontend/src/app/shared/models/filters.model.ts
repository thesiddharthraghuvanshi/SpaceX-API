export class Filters {
    pageNumber!: string;
    records!: string;
    name?: string;
    region?: string;

    constructor(pageNumber: string, records: string, name: string, region: string) {
        this.pageNumber = pageNumber;
        this.records = records;
        this.name = name;
        this.region = region;
    }

    [key: string]: string | undefined;
}