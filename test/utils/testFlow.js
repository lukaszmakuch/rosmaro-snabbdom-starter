import makeRoot from '~/src/components/root';
import { testFlow } from 'rosmaro-testing-library';
import configureStore from 'redux-mock-store';
import rosmaro from 'rosmaro';
import render from '~/test/utils/render';

export default flow => {
  let store = configureStore([])({});
  const model = rosmaro(makeRoot({ ...store }));
  testFlow({ model, flow, initialTestContext: { render: render(), store } });
};
