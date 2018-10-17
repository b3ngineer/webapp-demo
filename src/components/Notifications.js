import React, { Component } from "react";
import { connect } from "react-redux";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

class Notifications extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.app.error) {
      NotificationManager.error(nextProps.app.error, "Error", 5000);
    }
    if (nextProps.app.warning) {
      NotificationManager.warning(nextProps.app.warning, "Warning", 5000);
    }
    return false;
  }

  render() {
    return <NotificationContainer />;
  }
}

export default connect(state => ({
  app: state.app
}))(Notifications);
