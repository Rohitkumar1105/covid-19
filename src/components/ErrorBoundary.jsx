import React from 'react';

class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }
    
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(err, info) {
        console.log(err)
        console.log(info)
    }

    render() {
        return <div></div>;
    }
}

export default ErrorBoundary;