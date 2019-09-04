import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Card from './Card.js';

//Smoke Test

describe('<Card />', ()=> {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card key={'5'} title={'moretests'} content={['THINGS']} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders as expected', () => {
    const tree = renderer.create(<Card key={'5'} title={'moretests'} content={['THINGS']} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


