#

React component for wrapper clicks about current element

#在用react做项目的过程中，在一个组件中经常会遇到需要绑定十几个甚至几十个函数的情景,诸如this.test=this.text.bind(this),this.demo=this.demo.bind(this),......this.finish=this.finish.bind(this) 为了解决这个痛点，所以才有了这个插件，一次引入，从此不用再重复、多次绑定

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
