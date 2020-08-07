import { Storage } from 'src/app/utils/storage/storage';

describe('storage', () => {

    let storage: Storage<object>;
    let option: [string, boolean];

    beforeEach(() => {
        storage = new Storage('test');
        option = ['test', true];
    });

    it('test add$', (done: DoneFn) => {
        storage.add$(option).subscribe(x => {
            console.log('test', x);
            expect(x).toEqual([['test', true]]);
            done();
        });
    });

    it('test remove', (done: DoneFn) => {
        storage.remove$(option).subscribe(x => {
            expect(x).toEqual([['test', true]]);
            done();
        });
    });
});
