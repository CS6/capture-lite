import { Preferences } from './preferences';

describe('preferences', () => {

    let preferences: Preferences;

    beforeEach(() => {
        preferences = new Preferences('testKey');
    });


    it('test setNumber$ & getNumber$', (done: DoneFn) => {
        const value = 123;
        preferences.setNumber$('testKey', value).subscribe(x => {
            console.log('setNumber', x);
            expect(x).toEqual(value);
            done();
        });
        preferences.getNumber$('testKey').subscribe(y => {
            console.log('getNumber', y);
            expect(y).toEqual(value);
            done();
        });
    });

    it('test setString$ & getString$', (done: DoneFn) => {
        const value = 'hello';
        preferences.setString$('testKey', value).subscribe(x => {
            console.log('setString', x);
            expect(x).toEqual(value);
            done();
        });
        preferences.getString$('testKey', value).subscribe(y => {
            console.log('getString', y);
            expect(y).toEqual(value);
            done();
        });
    });
});
