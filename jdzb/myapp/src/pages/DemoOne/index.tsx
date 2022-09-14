import React ,{useState} from 'react';
import { Input } from 'antd';
import menu from '../../locales/zh-CN/menu'

const DemoOne = () => {
    return <>
        <Input defaultValue={menu['menu.demo.testone']} onChange={(e) => {
            document.getElementsByClassName('ant-pro-base-menu-item-text')[4].innerHTML= e.target.value
        }}/>
    </>
}
export default DemoOne;