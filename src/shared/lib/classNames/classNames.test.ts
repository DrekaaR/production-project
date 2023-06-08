import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with first param only', () => {
        const expected = 'someClass';
        expect(classNames('someClass')).toBe(expected);
    });

    test('with additional classes', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, active: false },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, active: undefined },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
