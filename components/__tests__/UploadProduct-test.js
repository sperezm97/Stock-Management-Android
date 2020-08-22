import * as React from 'react';
import renderer from 'react-test-renderer';

it(`Must upload product`, () => {
  const tree = renderer.create().toJSON();

  expect(tree).toMatchSnapshot();
});
