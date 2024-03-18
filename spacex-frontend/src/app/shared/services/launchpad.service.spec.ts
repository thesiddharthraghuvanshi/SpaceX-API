import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LaunchpadService } from './launchpad.service';
import { Launchpad } from '../models/launchpad.model';
import { Filters } from '../models/filters.model';

describe('LaunchpadService', () => {
  let service: LaunchpadService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LaunchpadService]
    });
    service = TestBed.inject(LaunchpadService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all launchpads', () => {
    const pageNumber = 1;
    const records = 10;
    const mockLaunchpads: Launchpad[] = [];

    service.fetchAllLaunchpads(pageNumber, records).subscribe((launchpads) => {
      expect(launchpads).toEqual(mockLaunchpads);
    });

    const req = httpTestingController.expectOne(`${service.BASE_URL}/fetchAll/${pageNumber}/${records}`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockLaunchpads);
  });

  it('should fetch a single launchpad', () => {
    const id = '1';
    const mockLaunchpad: Launchpad = {
      id: '',
      name: '',
      status: ''
    };

    service.fetchLaunchpad(id).subscribe((launchpad) => {
      expect(launchpad).toEqual(mockLaunchpad);
    });

    const req = httpTestingController.expectOne(`${service.BASE_URL}/fetch/${id}`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockLaunchpad);
  });

  it('should fetch filtered launchpads', () => {
    const filters: Filters = {
      pageNumber: '1',
      records: '5',
      name: '',
      region: ''
    };
    const mockLaunchpads: Launchpad[] = [];

    service.fetchFilteredLaunchpads(filters).subscribe((launchpads) => {
      expect(launchpads).toEqual(mockLaunchpads);
    });
    filters.pageNumber = '0';

    const expectedUrl = `${service.BASE_URL}/fetchByFilter?pageNumber=${filters.pageNumber}&records=${filters.records}&name=${filters.name}&region=${filters.region}`;
    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('GET');
    expect(req.request.params.get('pageNumber')).toContain(filters.pageNumber);
    expect(req.request.params.get('records')).toContain(filters.records);


    req.flush(mockLaunchpads);
  });
});
