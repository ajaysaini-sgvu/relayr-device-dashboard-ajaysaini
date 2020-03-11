import { fromJS, List } from "immutable";
import constants from "../Devices.constants";

const initialState = fromJS({
  list: null,
  error: null
});

const updateDeviceList = (state, action) => {
  return state
    .set(
      "list",
      state.get("list").map(item => {
        return Object.assign({}, item, {
          active: item.name === action.payload.name ? !item.active : item.active
        });
      })
    )
    .set("error", null);
};

const DevicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_DEVICES_LIST_SUCCESS:
      return state.set("error", null).set("list", action.payload);
    case constants.SET_DEVICES_LIST_FAILURE:
      return state.set("error", fromJS(action.payload)).set("list", null);
    case constants.SET_UPDATE_DEVICE_STATUS_SUCCESS:
      return updateDeviceList(state, action);
    case constants.SET_UPDATE_DEVICE_STATUS_FAILURE:
      return state.set("error", action.payload);
    default:
      if (state instanceof Object) {
        return fromJS(state);
      }
      return state;
  }
};

export default DevicesReducer;
