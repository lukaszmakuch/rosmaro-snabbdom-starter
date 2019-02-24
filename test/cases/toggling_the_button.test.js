import testFlow from '~/test/utils/testFlow';
import { assertVisible, assertInvisible } from '~/test/steps/assert_visibility';
import click from '~/test/steps/click';
import debug from '~/test/steps/debug';

test('toggles On/Off', () =>
  testFlow([
    assertVisible({ text: 'On' }),
    assertInvisible({ text: 'Off' }),

    click({ text: 'On' }),

    debug,

    assertInvisible({ text: 'On' }),
    assertVisible({ text: 'Off' }),

    click({ text: 'Off' }),

    assertVisible({ text: 'On' }),
    assertInvisible({ text: 'Off' })
  ]));
