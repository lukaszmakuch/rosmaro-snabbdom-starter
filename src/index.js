import rosmaro from 'rosmaro';
import {createStore, applyMiddleware} from 'redux';
import makeRoot from './components/root/index';
import {composeWithDevTools} from 'redux-devtools-extension';
import {makeReducer, effectDispatcher} from 'rosmaro-redux';
import {patch} from '~/src/utils/vdom';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import {triggerEntryActions} from 'rosmaro-binding-utils';

var dispatchFn = () => {};
const dispatch = action => {
  dispatchFn(action);
};

const modelDescription = makeRoot({
  dispatch
});

const model = triggerEntryActions(rosmaro(modelDescription));

const rootReducer = makeReducer(model);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(effectDispatcher, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

dispatchFn = store.dispatch;

const container = document.getElementById('root');

let lastView = container;
const renderAction = {type: 'RENDER'};
const refreshView = () => {
  const {state} = store.getState();
  const newView = model({state, action: renderAction}).result.data;
  patch(lastView, newView);
  lastView = newView;
};

store.dispatch({type: 'ON_ENTRY'});
store.subscribe(refreshView);

refreshView();
