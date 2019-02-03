import testFlow from '~/test/utils/testFlow';
import {
  assertButtonVisible,
  assertButtonInvisible,
} from '~/test/steps/assert_button_visibility';
import clickButton from '~/test/steps/click_button';

test('toggles On/Off', () =>
  testFlow([
    assertButtonVisible({ text: 'On' }),
    assertButtonInvisible({ text: 'Off' }),

    clickButton({ text: 'On' }),

    assertButtonInvisible({ text: 'On' }),
    assertButtonVisible({ text: 'Off' }),

    clickButton({ text: 'Off' }),

    assertButtonVisible({ text: 'On' }),
    assertButtonInvisible({ text: 'Off' }),
  ]));
