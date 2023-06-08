import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../components/Nav_bar', () => 'MockedNavigationBar');
jest.mock('../components/header', () => 'MockedHeader');
jest.mock('../components/ShowLectures', () => 'MockedLectures');

test('Snapshot Dashboard component', () => {
    const component = TestRenderer.create(
        <MemoryRouter>
            <Dashboard />
        </MemoryRouter>
    );
    expect(component.toJSON()).toMatchSnapshot();
});
test('check heading content', () => {
    const { getByText } = render(<Dashboard />);
    const headingElement = getByText('Min årsplan');

    expect(headingElement).toBeInTheDocument();
});
