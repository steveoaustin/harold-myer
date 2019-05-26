import { Component } from "react";
import { withRouter } from "react-router";

class ScrollToTop extends Component<any> {
  componentDidUpdate(prevProps: any) {
    if (
      this.props.location.pathname !== prevProps.location.pathname &&
      window
    ) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);