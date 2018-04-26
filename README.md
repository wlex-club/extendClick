在用react做项目的时候，每次添加点击事件，都需要绑定一次，点击事件越多，绑定的也越多，重复而啰嗦，就在想能不能只需要绑定一次就一劳永逸了呢？
因此就有了这个组件

npm i

<WrapUpClick onWrapUpClick={() => {
    this.setState({
        count: this.state.count + 1
    })
}}>
    <div>
        测试一{this.state.count}
    </div>
</WrapUpClick>