import makeRoot from '~/src/components/root';
import {testFlow, makeTreeRunner} from 'rosmaro-testing-library';
import configureStore from 'redux-mock-store';
import rosmaro from 'rosmaro';
import makeRender from '~/test/utils/render';
import {triggerEntryActions} from 'rosmaro-binding-utils';

export const flow = (label, flow) => test(label, () => {
  let store = configureStore([])({});
  const model = triggerEntryActions(rosmaro(makeRoot({ ...store })));
  let getDispatchedActions = () => {
    const actions = store.getActions();
    store.clearActions();
    return actions;
  };
  const render = makeRender();
  testFlow({
    model,
    flow: [{feed: {type: 'ON_ENTRY'}}, ...flow],
    initialTestContext: { render, getDispatchedActions }
  });
});

export const tree = makeTreeRunner()(flow);