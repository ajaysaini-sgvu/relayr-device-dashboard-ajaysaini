import { createSelector } from "reselect";

export const getDevicesListState = state => state.DevicesReducer.get("list");

export const showUpdatedNotification = state =>
  state.DevicesReducer.get("error");

const getDeviceNameToFetch = name => name;

export const filterResults = createSelector(
  getDevicesListState,
  getDeviceNameToFetch,
  (items, name) => items.find(item => item.name === name)
);
