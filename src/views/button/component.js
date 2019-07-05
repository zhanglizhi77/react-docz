import React from 'react';
import {Button} from '../../components/base';
const buttonList = [
    {
        tem:<Button onClick={()=>{alert('default')}}>default</Button>,
        code:`<Button>default</Button>`
    },
    {
        tem:<Button iconClassName="iconfont icon_loading">iconClassName</Button>,
        code:`<Button iconClassName="iconfont icon_loading">iconClassName</Button>`
    },
    {
        tem:<Button disabled>disabled</Button>,
        code:`<Button disabled>disabled</Button>`
    },
    {
        tem:<Button size="small">small</Button>,
        code:`<Button size="small">small</Button>`
    },
    {
        tem:<Button size="middle">middle</Button>,
        code:`<Button size="middle">middle</Button>`
    },
    {
        tem:<Button block>block</Button>,
        code:`<Button block>block</Button>`
    },
    {
        tem:<Button shape="circle">circle</Button>,
        code:`<Button shape="circle">circle</Button>`
    },
    {
        tem:<Button type="transparent">transparent</Button>,
        code:`<Button type="transparent">transparent</Button>`
    },
    {
        tem:<Button type="gradient">gradient</Button>,
        code:`<Button type="gradient">gradient</Button>`
    },
    {
        tem:<Button type="danger">danger</Button>,
        code:`<Button type="danger">danger</Button>`
    },
    {
        tem:<Button type="link">link</Button>,
        code:`<Button type="link">link</Button>`
    },
    {
        tem:<Button iconClassName="iconfont icon_arrow" type="link">link</Button>,
        code:`<Button iconClassName="iconfont icon_arrow" type="link">link</Button>`
    },
];
export default buttonList;