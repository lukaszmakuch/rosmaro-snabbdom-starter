import {h} from '~/src/utils/vdom';
import {makeHandler} from '~/src/utils/handlers';

export const makeBinding = ({text}) => ({dispatch}) => ({handler: makeHandler({

  CLICK: () => ({arrow: 'clicked'}),

  // eslint-disable-next-line no-unused-vars
  RENDER: ({context, action, children, toNode}) => h('button.main-action-button', {
      on: {click: () => dispatch(toNode({type: 'CLICK'}))}
   }, text)

})});
