import { Subject, Observable } from 'rxjs';

const subject = new Subject();

/**
 * Emit the event with data to pass to
 * @param eventName
 * @param value
 */
const emit = (eventName: string, value: any): any => {
  subject.next({ eventName, value });
};

/**
 * Listen the event
 */
const on = (): Observable<any> => {
  return subject.asObservable();
};

export default { on, emit };
