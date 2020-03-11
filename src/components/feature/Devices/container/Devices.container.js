import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getDevicesListState,
  showUpdatedNotification
} from "./Devices.selectors";
import { getDevicesList, updateDeviceStatusRequest } from "./Devices.action";
import Devices from "../views";

const DevicesContainer = props => {
  useEffect(() => {
    const { fetchDevices } = props;
    fetchDevices();
  }, []);

  const { devices, onDeviceClick, showUpdatedNotification } = props;
  return (
    <Devices
      devices={devices}
      onDeviceClick={onDeviceClick}
      showUpdatedNotification={showUpdatedNotification}
    />
  );
};

export const mapStateToProps = state => ({
  devices: getDevicesListState(state),
  showUpdatedNotification: showUpdatedNotification(state)
});

export const mapDispatchToProps = dispatch => ({
  fetchDevices: () => {
    dispatch(getDevicesList());
  },
  onDeviceClick: payload => {
    dispatch(updateDeviceStatusRequest(payload));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DevicesContainer);
