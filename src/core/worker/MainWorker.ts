import { BaseResponse } from './../util/BaseResponse';
import { IMeet, MMeet } from './../model/Meet';

interface IMainWorker {
	ping(): string;
	insertNewMeet(meet: IMeet): Promise<BaseResponse<IMeet>>;
	getAllMeet(): Promise<BaseResponse<IMeet[]>>;
}

export class MainWorker implements IMainWorker {
	
	getAllMeet(): Promise<BaseResponse<IMeet[]>> {
		return new Promise((resolve, reject) => {
			MMeet.find().then((data)=>{
				resolve(BaseResponse.success(data))
			}).catch((e:Error)=>{
				reject(BaseResponse.error(e.message))
			})
		});
	}

	insertNewMeet(meet:IMeet): Promise<BaseResponse<IMeet>> {
		return new Promise((resolve,reject)=>{
			MMeet.create(meet).then(data =>{
				resolve(BaseResponse.success(data))
			}).catch((err:Error)=>{
				reject(BaseResponse.error(err.message))
			})
		})
	}

	ping(): string {
		return 'Pong';
	}
}
