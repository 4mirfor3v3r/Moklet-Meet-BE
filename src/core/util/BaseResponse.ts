export class BaseResponse<T> {
	success: boolean;
	status: number;
	message: string;
	data?: T|null;

	constructor(success: boolean, status: number, message: string, result?: T) {
		this.status = status;
		this.message = message;
		this.success = success;
		this.data = result;
	}

	static success<T>(result: T): BaseResponse<T> {
		return new BaseResponse<T>(true, 200, 'success', result);
	}
	static error<T>(message: string): BaseResponse<T> {
		return new BaseResponse<T>(false, 401, message);
	}
}
