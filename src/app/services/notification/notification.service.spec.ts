import { TestBed } from '@angular/core/testing';
import { NotificationService } from './notification.service';


fdescribe('NotificationService', () => {
  let service: NotificationService;
  let numTimesRun: number;

  beforeEach(() => {
    numTimesRun = 1;
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test creatNotificationId', () => {
    numTimesRun++;
    expect(service.createNotificationId()).toEqual(numTimesRun);
  });
});
