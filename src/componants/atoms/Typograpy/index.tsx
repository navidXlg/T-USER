import { createElement } from 'react';
import { type ITypographyProp } from './type';
import { typographyStyles } from './styles';

export function Typography(props: ITypographyProp) {
	const { color, size, children, className, type, weight } = props;

	return createElement(
		type,
		{
			className: typographyStyles({
				color,
				size,
				weight,
				className,
			}),
		},
		children
	);
}
