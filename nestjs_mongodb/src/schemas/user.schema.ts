import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Photo } from './photo.schema';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Photo' }] })
    photos: Photo[];
}

export const UserSchema = SchemaFactory.createForClass(User);
