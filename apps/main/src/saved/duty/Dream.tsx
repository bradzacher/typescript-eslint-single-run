import React, { useCallback } from 'react';
import Warn from '../../Warn';
import Start from '../Start';
import Trunk from '../type/Trunk';
import Melted from '../milk/Melted';

export default function Dream() {
	const value = useCallback(() => 123, []);

	return <div><Warn /><Start /><Trunk /><Melted /></div>;
}