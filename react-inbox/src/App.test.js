import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App',()=>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('check the message state to be unread',() =>{
        const div = document.createElement('div');
        const app = shallow(<App/>,div);
        expect(app.state().message).toBe('unread')
    })
    }

)

