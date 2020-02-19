import * as React from 'react';
import {text, boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

import {Button} from ".";

storiesOf('StyledButton', module)
  .add('basic', () => (
    <Button onClick={() => alert("LGTM!")} disabled={boolean('disabled', false)}>
      {text('text', 'Hello World')}
    </Button>
  ));
