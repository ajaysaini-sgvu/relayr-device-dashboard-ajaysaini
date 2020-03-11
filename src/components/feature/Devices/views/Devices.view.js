import React from "react";
import "../styles/styles.css";

class Devices extends React.PureComponent {
  constructor(props) {
    super(props);
    this.cols = [
      { key: "Name", label: "Name" },
      { key: "Unit", label: "Unit" },
      { key: "Value", label: "Value" },
      { key: "TimeStamp", label: "TimeStamp" },
      { key: "Status", label: "Action" }
    ];
    this.state = {
      input: ""
    };
  }

  updateDeviceStatus(e, device) {
    e.preventDefault();
    const { onDeviceClick } = this.props;
    onDeviceClick(device);
  }

  generateHeaders = () => {
    // generate our header (th) cell components
    return this.cols.map(function(colData) {
      return <th key={colData.key}> {colData.label} </th>;
    });
  };

  generateRows = () => {
    const { devices } = this.props;
    const { input } = this.state;
    return (
      devices &&
      devices
        .filter(device => {
          if (input) return device.name.startsWith(input);
          else return device;
        })
        .map(device => {
          // handle the column data within each row
          return (
            <tr key={device.name}>
              <td>{device.name}</td>
              <td>{device.unit}</td>
              <td>{device.value} </td>
              <td>{device.timestamp}</td>
              <td>
                <a
                  id="updateDeviceStatus"
                  href=""
                  onClick={event => this.updateDeviceStatus(event, device)}
                >
                  {device.active ? "Disable" : "Enable"}
                </a>
              </td>
            </tr>
          );
        })
    );
  };

  handleSearchInput = event => {
    this.setState({ input: event.target.value });
  };

  render() {
    const { devices, showUpdatedNotification } = this.props;
    const headerComponents = this.generateHeaders();
    const rowComponents = this.generateRows();

    return (
      <>
        <div className="devices">
          <span>Total Devices: {devices && devices.length}</span>
          <span>
            Active Devices:{" "}
            {devices && devices.filter(device => device.active === true).length}
          </span>
          <span>
            In-Active Devices:{" "}
            {devices &&
              devices.filter(device => device.active === false).length}
          </span>
          <input
            type="text"
            placeholder="Search Device"
            onChange={event => this.handleSearchInput(event)}
          />
        </div>
        {showUpdatedNotification && (
          <div className="error">{showUpdatedNotification}</div>
        )}
        <table id="devices">
          <thead> {headerComponents} </thead>
          <tbody> {rowComponents} </tbody>
        </table>
      </>
    );
  }
}

export default Devices;
