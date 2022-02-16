import { getFirstNumeric, getGrade, isValidIp } from './asm';

describe('opn assignments', () => {
	describe('asm1', () => {
		describe('get first numeric', () => {
			const cases = [
				['Var-----___1_int', 1],
				['Q2q-q', 2],
				['eef3243**s', 3],
				['xxxxx', undefined],
			] as (string | number | undefined)[][];

			test.each(cases)('given %p as input, returns %p', (input, expected) => {
				const actual = getFirstNumeric(input as string);
				expect(actual).toEqual(expected);
			});
		});
	});

	describe('asm2', () => {
		describe('is valid ip', () => {
			const cases = [
				['172.16.254.1', true],
				['192.168.0.0', true],
				['0.0.0.0', true],
				['172.316.254.1', false],
				['0.1.1.256', false],
				['1.1.1.1a', false],
				['1', false],
				['64.233.16.00', false],
				['192.168.01.00', false],
				['7283728', false],
				['xxxx', false],
				['x.x.x.x', false],
			];

			test.each(cases)('given %p as input, returns %p', (input, expected) => {
				const actual = isValidIp(input as string);
				expect(actual).toEqual(expected);
			});
		});
	});

	describe('asm4', () => {
		describe('get student grade', () => {
			const cases = [
				['A', 90, 'A'],
				['B', 48, 'F'],
				['C', 63, 'D'],
				['D', 75, 'C'],
				['E', 70, 'C'],
			];
			test.each(cases)(
				'student name: %p ,score: %p, returns grade: %p',
				(student, score, expected) => {
					const actual = getGrade(score as number);
					expect(actual).toEqual(expected);
				},
			);
		});
	});
});
