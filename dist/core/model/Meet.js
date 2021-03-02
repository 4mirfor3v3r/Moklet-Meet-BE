"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MMeet = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    creator: { type: String, required: true },
    url: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});
schema.pre('update', function update() {
    this.update({}, {
        $set: {
            updatedAt: Date.now(),
        },
    });
});
exports.MMeet = mongoose_1.default.model('Meets', schema);
//# sourceMappingURL=Meet.js.map