import React from "react";
import { shallow, configure } from "enzyme";
import Devices from "../Devices.view";

const Adapter = require("enzyme-adapter-react-16");

configure({ adapter: new Adapter() });

describe("Devices", () => {
  it("should render correctly", () => {
    const props = {
      devices: [
        {
          name: "acceleration_x",
          unit: "m/s2",
          value: 25.993848858558,
          timestamp: new Date().getTime() - Math.floor(Math.random() * 100000),
          active: true
        }
      ]
    };
    const component = shallow(<Devices {...props} />);
    expect(component).toMatchSnapshot();
  });

  it("should render error", () => {
    const props = {
      devices: [],
      showUpdatedNotification: "Something went wrong"
    };
    const component = shallow(<Devices {...props} />);
    expect(component).toMatchSnapshot();
  });

  it("test updateDeviceStatus", () => {
    const props = {
      onDeviceClick: jest.fn()
    };
    const component = shallow(<Devices {...props} />);
    const mockedEvent = { target: {}, preventDefault: jest.fn() };
    component.instance().updateDeviceStatus(mockedEvent, { name: "test" });
    expect(props.onDeviceClick).toHaveBeenCalledTimes(1);
  });

  it("test handleSearchInput", () => {
    const component = shallow(<Devices />);
    const mockedEvent = {
      target: { value: "test" },
      preventDefault: jest.fn()
    };
    component.find("input").simulate("change", mockedEvent);
    expect(component.state("input")).toBe("test");
  });
});
