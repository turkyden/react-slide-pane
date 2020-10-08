import React from 'react'
import SlidePane from 'react-slide-pane'
import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  number,
  boolean,
  select,
  color
} from '@storybook/addon-knobs'
import { useState } from '@storybook/addons'

storiesOf('SlidePane', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <SlidePane>
      <img src="https://jdc.jd.com/img/600x400?text=1" />
      <img src="https://jdc.jd.com/img/600x400?text=2" />
    </SlidePane>
  ))
  .add('diff img', () => (
    <SlidePane>
      <img src="https://picsum.photos/id/237/600/400" />
      <img src="https://picsum.photos/id/237/600/400?grayscale" />
    </SlidePane>
  ))
  .add('initial(100)', () => (
    <SlidePane initial={100}>
      <img src="https://picsum.photos/id/237/600/400" />
      <img src="https://picsum.photos/id/237/600/400?grayscale" />
    </SlidePane>
  ))
  .add('initial(200px)', () => (
    <SlidePane initial="200px">
      <img src="https://picsum.photos/id/237/600/400" />
      <img src="https://picsum.photos/id/237/600/400?grayscale" />
    </SlidePane>
  ))
  .add('initial(50%)', () => (
    <SlidePane initial="50%">
      <img src="https://picsum.photos/id/237/600/400" />
      <img src="https://picsum.photos/id/237/600/400?grayscale" />
    </SlidePane>
  ))
  .add('with wrap outer html', () => (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <SlidePane>
        <img src="https://picsum.photos/id/237/600/400" />
        <img src="https://picsum.photos/id/237/600/400?grayscale" />
      </SlidePane>
    </div>
  ))
  .add('split horizontal', () => (
    <SlidePane split="horizontal">
      <img src="https://picsum.photos/id/237/600/400" />
      <img src="https://picsum.photos/id/237/600/400?grayscale" />
    </SlidePane>
  ))
