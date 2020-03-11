export const getDevicesListState = state => state.DevicesReducer.get("list");

export const showUpdatedNotification = state =>
  state.DevicesReducer.get("error");
