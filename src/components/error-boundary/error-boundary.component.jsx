import React, { Component } from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

export class ErrorBoundary extends Component {
    constructor(props) {
       super(props);
       
       this.state = {
           hasErrored: false
       }
    }

    static getDerivedStateFromError(error) {
        return { hasErrored: true };
    }

    componentDidCatch(error, info) {
        console.log(`Error: ${error}`);
        console.log(`Info.: ${info}`);
    } 

    render() {
        if(this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/U3vTGjX.png'/>
                    <ErrorImageText>
                        There’s a Leak in the Website. Check back later
                    </ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary