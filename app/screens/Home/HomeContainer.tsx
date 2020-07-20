import * as React from 'react'
import HomeScreen from './HomeScreen'

interface Props { }

interface State { }

export default class HomeContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <HomeScreen />
        )
    }
}
