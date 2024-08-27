import {
	type FieldValues,
	type Control,
	type RegisterOptions,
} from 'react-hook-form';

export interface IBaseInputProp<T extends FieldValues> {
	name: string;
	id: number | string;
	placeholder: string;
	defaultValue: string;
	rules: RegisterOptions<T>;
	control?: Control<T>;
}
