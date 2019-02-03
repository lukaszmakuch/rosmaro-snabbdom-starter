const assertButtonVisibility = ({ text, assert }) => ({ testContext }) => ({
  feed: { type: 'RENDER' },
  consume: ({ result }) => {
    const { queryByText } = testContext.render(result.data);
    assert(queryByText(text));
  },
});

export const assertButtonVisible = ({ text }) =>
  assertButtonVisibility({
    text,
    assert: maybeButton => expect(maybeButton).not.toBeNull(),
  });

export const assertButtonInvisible = ({ text }) =>
  assertButtonVisibility({
    text,
    assert: maybeButton => expect(maybeButton).toBeNull(),
  });
