import { fireEvent } from 'snabbdom-testing-library';
import { consumeActionsWithEffects } from 'rosmaro-testing-library';

export default ({ text }) => ({
  testContext: { getDispatchedActions, render }
}) => ({
  feed: { type: 'RENDER' },
  consume: ({ result }) => {
    const { getByText } = render(result.data);
    const buttonToClick = getByText(text);
    fireEvent.click(buttonToClick);
    const actions = getDispatchedActions();
    return { step: consumeActionsWithEffects(actions) };
  }
});
