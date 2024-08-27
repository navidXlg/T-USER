import { cva } from 'class-variance-authority';

export const typographyStyles = cva('', {
	variants: {
		color: {
			primary: 'bg-slate-600',
		},
		size: {
			xs: 'text-xs',
		},
		weight: {
			thinnest: 'font-thin',
		},
	},
});
