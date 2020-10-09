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
    <SlidePane width={600} height={400}>
      <img src="https://jdc.jd.com/img/600x400?text=1" />
      <img src="https://jdc.jd.com/img/600x400?text=2" />
    </SlidePane>
  ))
  .add('diff img', () => (
    <SlidePane width={600} height={400}>
      <img src="https://picsum.photos/id/237/600/400" />
      <img src="https://picsum.photos/id/237/600/400?grayscale" />
    </SlidePane>
  ))
  .add('diff img sm', () => (
    <SlidePane width={300} height={300}>
      <img src="https://picsum.photos/id/237/300/300" />
      <img src="https://picsum.photos/id/237/300/300?grayscale" />
    </SlidePane>
  ))
  .add('initial(100)', () => (
    <SlidePane width={600} height={400} initial={100}>
      <img src="https://picsum.photos/id/237/600/400" />
      <img src="https://picsum.photos/id/237/600/400?grayscale" />
    </SlidePane>
  ))
  .add('initial(200px)', () => (
    <SlidePane width={600} height={400} initial="200px">
      <img src="https://picsum.photos/id/237/600/400" />
      <img src="https://picsum.photos/id/237/600/400?grayscale" />
    </SlidePane>
  ))
  .add('initial(50%)', () => (
    <SlidePane width={600} height={400} initial="50%">
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
      <SlidePane width={600} height={400}>
        <img src="https://picsum.photos/id/237/600/400" />
        <img src="https://picsum.photos/id/237/600/400?grayscale" />
      </SlidePane>
    </div>
  ))
  .add('with inner block', () => (
    <SlidePane width={600} height={400}>
      <div
        style={{ width: '600px', height: '400px', backgroundColor: 'red' }}
      ></div>
      <div
        style={{ width: '600px', height: '400px', backgroundColor: 'blue' }}
      ></div>
    </SlidePane>
  ))
  .add('split horizontal', () => (
    <SlidePane width={600} height={400} split="horizontal">
      <img src="https://picsum.photos/id/237/600/400" />
      <img src="https://picsum.photos/id/237/600/400?grayscale" />
    </SlidePane>
  ))
