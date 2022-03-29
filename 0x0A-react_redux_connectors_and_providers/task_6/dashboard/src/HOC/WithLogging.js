import React from 'react';

const WithLogging = (WrappedComponent) => {
  class WithLogging extends React.Component {
    componentDidMount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is mounted`);
    };

    componentWillUnmount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is going to unmount`);
    };

    render() {
      return <WrappedComponent {...this.props}/>;
    };
  };
  WithLogging.displayName =
    `WithLogging(${getDisplayName(WrappedComponent)})`;
  return WithLogging;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default WithLogging;
