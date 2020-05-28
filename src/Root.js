import React from 'react';
import Widgets from './Widgets';
import { BrowserRouter } from 'react-router-dom';

const names = [
  'Abba',
  'Barney',
  'Barbara',
  'Jeff',
  'Jenny',
  'Sarah',
  'Sally',
  'Xander',
];

const folders = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second folder here' },
  { title: 'three', content: 'Third folder here' },
];

const Root = () => (
  <div>
    <BrowserRouter>
      <Widgets folders={folders} names={names} />
    </BrowserRouter>
  </div>
);

export default Root;
