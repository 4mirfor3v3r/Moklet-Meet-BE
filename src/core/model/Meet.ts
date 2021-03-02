import mongoose from 'mongoose';

export interface IMeet {
	name: string;
	creator: string;
	url: string;
	start_date: Date;
	end_date: Date;
	created_at?: Date;
	updated_at?: Date;
}

const schema = new mongoose.Schema({
	name: { type: String, required: true },
	creator: { type: String, required: true },
	url: { type: String, required: true },
	start_date: { type: Date, required: true },
	end_date: { type: Date, required: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now },
});

schema.pre('update', function update() {
	this.update(
		{},
		{
			$set: {
				updatedAt: Date.now(),
			},
		}
	);
});
export const MMeet = mongoose.model<IMeet & mongoose.Document>('Meets', schema);
