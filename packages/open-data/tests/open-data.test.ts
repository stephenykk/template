import utils from '@/utils';

test('getQuery("//test.com?fo=fv&age=1")', () => {
    expect(utils.getQuery('//test.com?fo=fv&age=1')).toEqual({fo: 'fv', age: '1'});
})
