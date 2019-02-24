const assertVisibility = ({ text, assert }) => ({
  testContext: { render }
}) => ({
  feed: { type: 'RENDER' },
  consume: ({ result }) => {
    const { queryByText } = render(result.data);
    assert(queryByText(text));
  }
});

export const assertVisible = ({ text }) =>
  assertVisibility({
    text,
    assert: element => expect(element).not.toBeNull()
  });

export const assertInvisible = ({ text }) =>
  assertVisibility({
    text,
    assert: element => expect(element).toBeNull()
  });
