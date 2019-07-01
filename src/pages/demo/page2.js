import React from 'react'

type State = {}

type Props = {}

class Demo2 extends React.Component<State, Props> {
    constructor(props: Props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>This is Demo2 page</div>
        )
    }
}

export default Demo2
