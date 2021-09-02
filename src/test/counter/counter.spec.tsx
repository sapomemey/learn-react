import { shallow } from 'enzyme';
import Counter from '../../counter/Counter';

describe('@bcp testing counter', () => {
  it('should render', () => {
    const wrapper = shallow(<Counter initialValue={5}></Counter>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should sum one when is clicked in button add', () => {
    const wrapper = shallow(<Counter initialValue={2}></Counter>);
    wrapper.find('button').at(0).simulate('click');
    const num = wrapper.find('div').text().trim();

    expect(num).toBe('3');
  });


  it('should less one when is clicked in button less', () => {
    const wrapper = shallow(<Counter initialValue={2}></Counter>);
    wrapper.find('button').at(2).simulate('click');
    const num = wrapper.find('div').text().trim();

    expect(num).toBe('1');
  });

  it('should reset to default value when is clicked in button reset', () => {
    const wrapper = shallow(<Counter initialValue={6}></Counter>);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');

    const num = wrapper.find('div').text().trim();

    expect(num).toBe('6')
  });

});
