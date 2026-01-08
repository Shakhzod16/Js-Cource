// function test(a: string): string;
// function test(a: number): number;

// function test(qiymat: any) {
// 	if (typeof qiymat === 'string') {
// 		return qiymat;
// 	} else if (typeof qiymat === 'number') {
// 		return qiymat;
// 	}
// }

// let result = test(7);
// let result2 = test('salom');

// console.log(result);
// console.log(result2);

// Union type

// let soqchi: null | string | number;

// soqchi = 4;

//   Literal type

// soqchi = null;
// let size: 'MD' | 'SM' | 'XL';

// size = 'SM';

// ===========================

// type NetworkLoadingState = {
// 	state: 'loading';
// };
// type NetworkFailedState = {
// 	state: 'failed';
// 	code: number;
// };
// type NetworkSuccessState = {
// 	state: 'success';
// 	response: {
// 		title: string;
// 		duration: number;
// 		summary: string;
// 	};
// };
