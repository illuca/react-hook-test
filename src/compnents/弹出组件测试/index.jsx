import React, {Component} from 'react';
import {render} from "react-dom";

export class 弹出组件测试 extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

export function 函数弹出组件测试() {
    const nameRef = React.useRef()
    const ageRef = React.useRef()
    function getName() {
        alert(nameRef.current.value)
    }
    function getAge() {
        alert(ageRef.current.value)
    }

    return <div>
        <input type={"text"} ref={nameRef} placeholder={"请输入名字"}/>
        <button onClick={getName}>获取名字</button>
        <input type={"text"} ref={ageRef} placeholder={"请输入年龄"}/>
        <button onClick={getAge}>获取年龄</button>
    </div>
}