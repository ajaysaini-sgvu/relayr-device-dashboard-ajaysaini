import { call, put, takeLatest } from "redux-saga/effects";
import constants from "../Devices.constants";
import {
  setDevicesListSuccess,
  setDevicesListFailure,
  setUpdateDeviceStatusSuccess,
  setUpdateDeviceStatusFailure
} from "./Devices.action";
import fetchData from "../../../../service/API";
import endpoints from "../../../../service/endpoint";

function* getDevices() {
  try {
    const {
      devices: { baseURI, relURI, method }
    } = endpoints;
    const res = yield call(fetchData, baseURI, relURI);
    yield put(setDevicesListSuccess(res.body.data));
  } catch (err) {
    yield put(setDevicesListFailure(err));
  }
}

function* updateDeviceStatus({ payload }) {
  const { name, active } = payload;
  try {
    const {
      updateDeviceStatus: { baseURI, relURI, method }
    } = endpoints;
    const res = yield call(
      fetchData,
      baseURI,
      `${relURI}${name}?active=${!active}`,
      null,
      method
    );
    yield put(setUpdateDeviceStatusSuccess(payload));
  } catch (err) {
    yield put(setUpdateDeviceStatusFailure(err.message));
  }
}

function* DevicesSaga() {
  yield takeLatest(constants.GET_DEVICES_LIST, getDevices);
  yield takeLatest(constants.UPDATE_DEVICE_STATUS_REQUEST, updateDeviceStatus);
}

export default DevicesSaga;
