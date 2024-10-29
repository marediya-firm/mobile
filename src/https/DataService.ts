import { Subject, Observable } from 'rxjs';

const subject = new Subject();

/**
 * Emit the event with data to pass to
 * @param eventName
 * @param value
 */
const emit = <T extends string>(eventName: string, value: T): void => {
  subject.next({ eventName, value });
};

/**
 * Listen the event
 */
const on = (): Observable<unknown> => {
  return subject.asObservable();
};

export default { on, emit };
