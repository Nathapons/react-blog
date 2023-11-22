import { Breadcrumb } from 'antd'
import React from 'react'

export default function BlogBreadCrumb(props) {
    const dataArtr = props.data

    return (
        <Breadcrumb>
            {dataArtr.map((item, index) => {
                return <Breadcrumb.Item>{item}</Breadcrumb.Item>
            })}
        </Breadcrumb>
    )
}
