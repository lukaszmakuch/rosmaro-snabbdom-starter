export default ({ testContext: { render } }) => ({
  feed: { type: 'RENDER' },
  consume: ({ result }) => {
    const all = render(result.data);
    // eslint-disable-next-line no-console
    console.log(all.container.innerHTML);
  }
});