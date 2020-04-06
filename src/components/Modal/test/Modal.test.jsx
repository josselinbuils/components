/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { mount, shallow } from 'enzyme';
import Modal from '../Modal';

jest.mock('../../../helpers/warning');

describe('Modal', () => {
  let wrapper;
  let mock;

  beforeEach(() => {
    mock = jest.fn();
  });

  it('should match snapshot', () => {
    wrapper = shallow(
      <Modal on={false} toggle={mock}>
        Modal content
      </Modal>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should stop propagation on div className "content" click', () => {
    wrapper = mount(
      // eslint-disable-next-line
      <div onClick={mock}>
        <Modal on onClick={mock} toggle={mock}>
          Modal content
        </Modal>
      </div>
    );
    wrapper
      .find('.content')
      .at(0)
      .simulate('click');
    expect(mock).not.toHaveBeenCalled();
  });

  it('should render the Footer', () => {
    wrapper = mount(
      <Modal on toggle={mock} Footer={<footer>This is a footer</footer>}>
        Modal content
      </Modal>
    );

    expect(wrapper.find('footer').html()).toEqual(
      '<footer>This is a footer</footer>'
    );
  });

  it('should render a funtional component on the Footer', () => {
    const Component = () => <footer>This is a footer component</footer>;
    wrapper = mount(
      <Modal on toggle={mock} Footer={<Component />}>
        Modal content
      </Modal>
    );

    expect(wrapper.find('footer').html()).toEqual(
      '<footer>This is a footer component</footer>'
    );
  });

  it('should not render the Footer if is null', () => {
    wrapper = mount(
      <Modal on onClick={mock} toggle={mock} Footer={null}>
        Modal content
      </Modal>
    );

    expect(wrapper.exists('footer')).toBeFalsy();
  });

  it('should render custom header', () => {
    wrapper = mount(
      <Modal on toggle={mock} header={<header>this is a custom header</header>}>
        Modal content
      </Modal>
    );

    expect(wrapper.find('header').html()).toEqual(
      '<header>this is a custom header</header>'
    );
  });
});
