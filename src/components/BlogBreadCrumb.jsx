import { Breadcrumb } from 'antd'
import React from 'react'

export default function BlogBreadCrumb(props) {
    const items = props.data;

    return (
        <Breadcrumb>
            {items.map((item, index) => {
                return <Breadcrumb.Item>{item}</Breadcrumb.Item>
            })}
        </Breadcrumb>
    )
}
