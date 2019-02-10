import makeRoot from '~/src/components/root';
import { testFlow } from 'rosmaro-testing-library';
import configureStore from 'redux-mock-store';
import rosmaro from 'rosmaro';
import makeRender from '~/test/utils/render';

export default flow => {
  let store = configureStore([])({});
  const model = rosmaro(makeRoot({ ...store }));
  let getDispatchedActions = () => {
    const actions = store.getActions();
    store.clearActions();
    return actions;
  };
  const render = makeRender();
  testFlow({
    model,
    flow,
    initialTestContext: { render, getDispatchedActions }
  });
};
