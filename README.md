#

React component for wrapper clicks about current element

## Installation

```
$ npm install
```

## Example

```
<WrapUpClick onWrapUpClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>
                    <div>
                        测试一{this.state.count}
                    </div>
</WrapUpClick>
```
