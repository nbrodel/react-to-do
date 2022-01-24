import React from 'react';

export function Loader (Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.flag = null;

      this.state = {
        isLoading: true
      }
    }

    toggleLoadState = () => {
      this.setState( preState => ({
        isLoading: !preState.isLoading
      }));
    }

    componentDidMount() {
      this.flag = setTimeout(
        this.toggleLoadState,
        1000
      );
    }
    
    componentWillUnmount() {
      clearTimeout(this.flag)
    }

    render() {
      const {isLoading} = this.state;
      return isLoading ? <span>load...</span> : <Component {...this.props} />
    }
  }
}

export default Loader;
