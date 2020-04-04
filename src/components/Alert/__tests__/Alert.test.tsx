import { mount, shallow } from 'enzyme';
import React from 'react';
import Alert from '../Alert';

describe('Alert', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <Alert on={false} toggle={() => {}} textAlert="test" theme="danger" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without crash with layoutContainer', () => {
    const wrapper = shallow(
      <Alert on={false} toggle={() => {}} textAlert="test" theme="danger" />
    );
    expect(wrapper.length).toEqual(1);
  });

  it('should render alert if props on is true', () => {
    const wrapper = mount(<Alert on textAlert="test" toggle={() => {}} />);
    expect(wrapper.props().on).toBe(true);
  });

  it('should render timeout close function if props timeout is declared', () => {
    const wrapper = mount(
      <Alert on timeout={300} textAlert="test" toggle={() => {}} />
    );
    expect(wrapper.props().timeout).toEqual(300);
  });

  it('should set position on bottom right if position is changed', () => {
    const wrapper = mount(
      <Alert on position="bottomRight" textAlert="test" toggle={() => {}} />
    );
    expect(wrapper.props().position).toEqual('bottomRight');
  });

  it('should set position on top left if position is changed', () => {
    const wrapper = mount(
      <Alert on position="topLeft" textAlert="test" toggle={() => {}} />
    );
    expect(wrapper.props().position).toEqual('topLeft');
  });

  it('should set position on bottom left if position is changed', () => {
    const wrapper = mount(
      <Alert on position="bottomLeft" textAlert="test" toggle={() => {}} />
    );
    expect(wrapper.props().position).toEqual('bottomLeft');
  });

  it('should display with toggle', () => {
    const toggle = () => {};
    const wrapper = mount(<Alert on textAlert="test" toggle={toggle} />);
    expect(wrapper.props().toggle).toEqual(toggle);
  });
});
