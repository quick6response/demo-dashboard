import React from 'react';
import { render, screen } from '@testing-library/react';
import {Alert} from "./Alert";

it('Render Alert', () => {
	const textTest = 'test';
	render(<Alert status={'info'}>{textTest}</Alert>);
	expect(screen.getByText('test')).toBeInTheDocument();
});