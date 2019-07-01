import React from 'react'

type State = {}

type Props = {}

class Demo3 extends React.Component<State, Props> {
    constructor(props: Props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>This is Demo3 page</div>
        )
    }
}

export default Demo3
