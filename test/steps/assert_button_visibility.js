const assertButtonVisibility = ({ text, assert }) => ({
  testContext: { render }
}) => ({
  feed: { type: 'RENDER' },
  consume: ({ result }) => {
    const { queryByText } = render(result.data);
    assert(queryByText(text));
  }
});

export const assertButtonVisible = ({ text }) =>
  assertButtonVisibility({
    text,
    assert: maybeButton => expect(maybeButton).not.toBeNull()
  });

export const assertButtonInvisible = ({ text }) =>
  assertButtonVisibility({
    text,
    assert: maybeButton => expect(maybeButton).toBeNull()
  });
