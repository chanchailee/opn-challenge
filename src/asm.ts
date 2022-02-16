export const getFirstNumeric = (input: string): number | undefined => {
	const value = input.charAt(0) as any;
	const remain = input.substring(1);
	const isNum = !isNaN(value);

	if (!remain.length) return undefined;
	if (!isNum) return getFirstNumeric(remain);
	if (isNum) return parseInt(value);
};

export const isValidIp = (input: string): boolean => {
	const arr = input.split('.');
	const isValidFmt = arr.every(
		(data: any) => !isNaN(data) && data >= 0 && data <= 255 && !/^0.+/.test(data),
	);

	return arr.length === 4 && isValidFmt;
};

type Grade = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
export const getGrade = (score: number): Grade => {
	if (score >= 0 && score <= 49) return 'F';
	else if (score >= 50 && score <= 59) return 'E';
	else if (score >= 60 && score <= 69) return 'D';
	else if (score >= 70 && score <= 79) return 'C';
	else if (score >= 80 && score <= 89) return 'B';
	else if (score >= 90 && score <= 100) return 'A';
	else throw new Error('out of range score');
};
