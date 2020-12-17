import React, { Component } from 'react'

export class Main extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }
    
    render() {
        return this.props.children
    }
}
