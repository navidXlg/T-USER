// import { IBaseInputProp } from '..';
// import { Controller } from 'react-hook-form';

// export function BaseInput(props: IBaseInputProp<any>): JSX.Element {
// 	const { id, name, defaultValue, control, rules } = props;

// 	return control ? (
// 		// eslint-disable-next-line react/react-in-jsx-scope
// 		<Controller
// 			name={name}
// 			control={control}
// 			rules={rules}
// 			key={id}
// 			defaultValue={defaultValue}
// 			render={({ field, fieldState, formState }) => {
// 				console.log(fieldState, formState, field);
// 			}}
// 		/>
// 	) : (
// 		// eslint-disable-next-line react/react-in-jsx-scope
// 		<input name={name} defaultValue={defaultValue} />
// 	);
// }
