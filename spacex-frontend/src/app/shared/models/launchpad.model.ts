export class Launchpad {
    id!: string;
    name!: string;
    fullName?: string;
    status!: string;
    locality?: string;
    region?: string;
    timezone?: string;
    latitude?: number;
    longitude?: number;
    launchAttempts?: number;
    launchSuccesses?: number;
    launches?: string[];
    rockets?: string[];


    constructor(id: string, name: string, fullName: string, status: string, locality: string, region: string, timezone: string, 
        latitude: number, longitude: number, launchAttempts: number, launchSuccesses: number, launches: string[], rockets: string[]) {
        this.id = id;
        this.name = name;
        this.fullName = fullName;
        this.status = status;
        this.locality = locality;
        this.region = region;
        this.timezone = timezone;
        this.latitude = latitude;
        this.longitude = longitude;
        this.launchAttempts = launchAttempts;
        this.launchSuccesses = launchSuccesses;
        this.launches = launches;
        this.rockets = rockets;
    }
}