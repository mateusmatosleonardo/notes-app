import React from 'react';
import { render } from '@testing-library/react-native';
import { Header } from '../Header';

test('the component rendered', () => {
  render(<Header onPress={() => console.log('Testando componente!')} />);
});