import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './user.schema';

export type PhotoDocument = HydratedDocument<Photo>;

@Schema()
export class Photo {
    @Prop()
    url: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User;
}

export const PhotoSchema = SchemaFactory.createForClass(Photo);
