import React from 'react'
import SlidePane, { Pane } from 'react-slide-pane'
import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  number,
  boolean,
  select,
  color
} from '@storybook/addon-knobs'
import { useState } from '@storybook/addons'

storiesOf('ImageHover', module)
  .addDecorator(withKnobs)
  .add('with fixed A minor', () => (
    <SlidePane split="vertical" initialSize="200px">
      <img src="https://jdc.jd.com/img/200x200?text=1" />
      <img src="https://jdc.jd.com/img/200x200?text=2" />
    </SlidePane>
  ))
