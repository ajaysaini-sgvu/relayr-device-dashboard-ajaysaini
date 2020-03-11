const { API_URL } = process.env;

export default {
  devices: {
    method: "get",
    baseURI: API_URL,
    relURI: "/devices"
  },
  updateDeviceStatus: {
    method: "patch",
    baseURI: API_URL,
    relURI: "/devices/"
  }
};
