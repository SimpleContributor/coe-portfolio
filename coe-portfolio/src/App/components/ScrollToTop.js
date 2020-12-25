import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            setTimeout(() => {
                window.scrollTo(0, 0)
            }, 780)
        }
    }
  
    render() {
        return this.props.children
    }
}
  
export default withRouter(ScrollToTop);
