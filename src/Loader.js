import React from 'react';

export function Loader (Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: true
      }
    }

    toggleLoadState = () => {
      this.setState( preState => ({
        isLoading: preState.loading
      }));
    }

    componentDidMount() {
      setTimeout(
        this.toggleLoadState,
        1000
      );
    }

    render() {
      const {isLoading} = this.state;
      return isLoading ? <span>task is loading...</span> : <Component {...this.props} />
    }
  }
}
  

export default Loader;
