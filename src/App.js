import React, {Component} from 'react';
import WrapUpClick from './outclick/index'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    hold() {
        console.log('00')
    }

    render() {
        return (
            <div>
                <WrapUpClick onWrapUpClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>
                    <div>
                        测试一{this.state.count}
                    </div>
                </WrapUpClick>

                <WrapUpClick onWrapUpClick={() => {
                    this.hold()
                }}>
                    <div>
                        测试
                    </div>
                </WrapUpClick>
            </div>
        );
    }
}

export default App;
