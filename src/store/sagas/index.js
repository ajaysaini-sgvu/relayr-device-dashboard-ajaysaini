import { all } from "redux-saga/effects";
import DevicesSaga from "../../components/feature/Devices/container/Devices.saga";

export default function* rootSaga() {
  yield all([DevicesSaga()]);
}
