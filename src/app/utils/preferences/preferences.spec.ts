import { Preferences } from './preferences';

describe('preferences', () => {

    let preferences: Preferences;

    beforeEach(() => {
        preferences = new Preferences('testKey');
    });


    it('test setNumber$ & getNumber$', (done: DoneFn) => {
        const value = 123;
        preferences.setNumber$('testKey', value).subscribe(x => {
            expect(x).toEqual(value);
            done();
        });
        preferences.getNumber$('testKey').subscribe(y => {
            expect(y).toEqual(value);
            done();
        });
    });

    it('test setString$ & getString$', (done: DoneFn) => {
        const value = 'hello';
        preferences.setString$('testKey', value).subscribe(x => {
            expect(x).toEqual(value);
            done();
        });
        preferences.getString$('testKey', value).subscribe(y => {
            expect(y).toEqual(value);
            done();
        });
    });
});
