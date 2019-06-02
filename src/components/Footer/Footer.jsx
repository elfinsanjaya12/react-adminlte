import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="main-footer">
          <div class="pull-right hidden-xs">
            <b>Version</b> 2.4.0
          </div>
          <strong>
            Copyright &copy; 2014-2016{" "}
            <a href="https://adminlte.io">Almsaeed Studio</a>.
          </strong>{" "}
          All rights reserved.
        </footer>
      </div>
    );
  }
}
