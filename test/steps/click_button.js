import click from './click';

export default ({ text }) =>
  click({
    element: ({ getByText }) => getByText(text)
  });
