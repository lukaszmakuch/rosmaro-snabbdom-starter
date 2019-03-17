import {flow, tree} from '~/test/utils/runner';
import {assertVisible, assertInvisible} from '~/test/steps/assert_visibility';
import click from '~/test/steps/click';
import debug from '~/test/steps/debug';

flow('toggles On/Off', [
  assertVisible({ text: 'On' }),
  assertInvisible({ text: 'Off' }),

  click({ text: 'On' }),

  debug,

  assertInvisible({ text: 'On' }),
  assertVisible({ text: 'Off' }),

  click({ text: 'Off' }),

  assertVisible({ text: 'On' }),
  assertInvisible({ text: 'Off' })
]);

tree(
  ['assert on', [assertVisible({ text: 'On' }), assertInvisible({ text: 'Off' })], [
    ['click', [click({ text: 'On' }), debug], [
      ['assert off', [assertInvisible({ text: 'On' }), assertVisible({ text: 'Off' })], [
        ['click', click({ text: 'Off' }), [
          ['"on" is visible', assertVisible({ text: 'On' }), [
            ['"off" is invisible', assertInvisible({ text: 'Off' })]
          ]]
        ]]
      ]]
    ]]
  ]]
);