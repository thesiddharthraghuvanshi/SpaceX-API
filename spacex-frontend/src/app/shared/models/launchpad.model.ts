export class Launchpad {
    id!: string;
    name!: string;
    full_name?: string;
    status!: string;
    locality?: string;
    region?: string;
    timezone?: string;
    latitude?: number;
    longitude?: number;
    launch_attempts?: number;
    launch_successes?: number;
    launches?: string[];
    rockets?: string[];

    constructor(id: string, name: string, full_name: string, status: string, locality: string, region: string, timezone: string, 
        latitude: number, longitude: number, launch_attempts: number, launch_successes: number, launches: string[], rockets: string[]) {
        this.id = id;
        this.name = name;
        this.full_name = full_name;
        this.status = status;
        this.locality = locality;
        this.region = region;
        this.timezone = timezone;
        this.latitude = latitude;
        this.longitude = longitude;
        this.launch_attempts = launch_attempts;
        this.launch_successes = launch_successes;
        this.launches = launches;
        this.rockets = rockets;
    }
}