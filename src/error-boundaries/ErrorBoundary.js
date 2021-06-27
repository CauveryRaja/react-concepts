import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            errorInfo: ''
        };
    }

    // static getDerivedStateFromError(error) {
    //     alert('error', error);
    // }

    componentDidCatch(error, errorInfo) {
        this.setState({error, errorInfo})
    }

    render() {
        if(this.state.error) {
            return (
                <>
                    Something went wrong !
                    {/* Displayed using Details React element */}
                    <details>
                        <div>{this.state.error.toString()}</div>
                        <div>{this.state.errorInfo.componentStack}</div>
                    </details>
                </>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;