import React, {Component} from 'react';
import PropTypes from 'prop-types';

/// ceshi


const propTypes = {
    onWrapUpClick: PropTypes.func.isRequired,
};

export default class WrapUpClick extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.eleMount = this.eleMount.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClick);
        document.addEventListener('touchend', this.handleClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick);
        document.removeEventListener('touchend', this.handleClick);
    }

    eleMount(ele) {//获取到当前的dom元素
        this.ele = ele;
    }

    handleClick(evt) {
        let {target} = evt;
        if (this.ele.contains(target)) {
            this.props.onWrapUpClick(evt);
        }
    }

    render() {
        let {onWrapUpClick, ...restProps} = this.props;
        return <div ref={this.eleMount} {...restProps}/>;
    }
}

WrapUpClick.propTypes = propTypes;

