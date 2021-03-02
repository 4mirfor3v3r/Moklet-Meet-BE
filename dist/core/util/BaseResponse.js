"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseResponse = void 0;
class BaseResponse {
    constructor(success, status, message, result) {
        this.status = status;
        this.message = message;
        this.success = success;
        this.data = result;
    }
    static success(result) {
        return new BaseResponse(true, 200, 'success', result);
    }
    static error(message) {
        return new BaseResponse(false, 401, message);
    }
}
exports.BaseResponse = BaseResponse;
//# sourceMappingURL=BaseResponse.js.map