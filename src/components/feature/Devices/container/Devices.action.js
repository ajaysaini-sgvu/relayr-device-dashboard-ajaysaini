import constants from "../Devices.constants";

export const getDevicesList = () => ({
  type: constants.GET_DEVICES_LIST
});

export const setDevicesListSuccess = payload => ({
  type: constants.SET_DEVICES_LIST_SUCCESS,
  payload
});

export const setDevicesListFailure = payload => ({
  type: constants.SET_DEVICES_LIST_FAILURE,
  payload
});

export const updateDeviceStatusRequest = payload => {
  return {
    type: constants.UPDATE_DEVICE_STATUS_REQUEST,
    payload
  };
};

export const setUpdateDeviceStatusSuccess = payload => {
  return {
    type: constants.SET_UPDATE_DEVICE_STATUS_SUCCESS,
    payload
  };
};

export const setUpdateDeviceStatusFailure = payload => {
  return {
    type: constants.SET_UPDATE_DEVICE_STATUS_FAILURE,
    payload
  };
};
