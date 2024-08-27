import { VariantProps } from 'class-variance-authority';
import { typographyStyles } from './styles';

export interface ITypographyProp extends VariantProps<typeof typographyStyles> {
	children: React.ReactNode;
	className: string;
	type:
		| 'p'
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'body6'
		| 'span'
		| 'div';
}
