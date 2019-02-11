import { fireEvent } from 'snabbdom-testing-library';
import { consumeActionsWithEffects } from 'rosmaro-testing-library';

export default ({ element }) => ({
  testContext: { getDispatchedActions, render }
}) => ({
  feed: { type: 'RENDER' },
  consume: ({ result }) => {
    const queries = render(result.data);
    const elemToClick = element(queries);
    fireEvent.click(elemToClick);
    const actions = getDispatchedActions();
    return { step: consumeActionsWithEffects(actions) };
  }
});
