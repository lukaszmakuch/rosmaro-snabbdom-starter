import { fireEvent } from 'snabbdom-testing-library';
import { consumeActionsWithEffects } from 'rosmaro-testing-library';

export default ({ text }) => ({ testContext }) => ({
  feed: { type: 'RENDER' },
  consume: ({ result }) => {
    testContext.store.clearActions();
    const { getByText } = testContext.render(result.data);
    const buttonToClick = getByText(text);
    fireEvent.click(buttonToClick);
    const actions = testContext.store.getActions();
    return { step: consumeActionsWithEffects(actions) };
  },
});
