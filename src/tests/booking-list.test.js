import React from 'react';
import enzyme, { shallow } from 'enzyme';
import BookingList from '../pages/booking-list';

import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

describe("booking list", () =>{
    //arrange
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<BookingList />);
    })

    test('edit button should show modal', () => {
        setTimeout(() => {
            //act
            wrapper.find('#edit-button-2221').simulate('click');

            // //assert
            expect(wrapper.find('#add-edit-modal-header').text()).toEqual('Edit Room Details');
        }, 1000);
    });

    test('delete button : should show dialog box', () => {
        setTimeout(() => {
            //act
            wrapper.find('#delete-button-1').simulate('click');

            // //assert
            expect(wrapper.find('#dialog-room-title').text()).toEqual('Delete Room');
        }, 1000);
    });

    test('view button : should show redirect to booking room details', () => {
        setTimeout(() => {
            //act
            wrapper.waitFor('#launch-icon-button-1').simulate('click');
            //assert
            
            expect(window.location.pathname).toEqual('/booking-details/1');
            console.log(window.location.pathname)
        }, 1000);
    });
})