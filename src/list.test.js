import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import List from './List.js';

//Smoke Test

describe('<List />', ()=> {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List key={'test'} header={'moretests'} cards={[1, 2, 3, 4]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders as expected', () => {
    const tree = renderer.create(<List key={'test'} header={'moretests'} cards={[1, 2, 3, 4]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


