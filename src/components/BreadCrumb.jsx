import { Breadcrumb } from 'antd'
import React from 'react'
import PropTypes from 'prop-types';

export default function BlogBreadCrumb({ dataArr }) {
    return (
        <Breadcrumb style={{paddingTop: "10px"}}>
            {dataArr.map((item, index) => {
                return <Breadcrumb.Item>{item}</Breadcrumb.Item>
            })}
        </Breadcrumb>
    )
}

BlogBreadCrumb.propTypes = {
    dataArr: PropTypes.array
}
