import { Table } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function BlogTable() {
    const [blog, setBlog] = useState([])

    const getBlog = () => {
        axios.get("http://localhost:8000/api/v1/blog").then(res => {
            const data = res.data.result.map((item, index) => {
                return {
                    ...item,
                    key: index + 1,
                    created_at: new Date(item.created_at).toLocaleString(),
                    updated_at: new Date(item.updated_at).toLocaleString(),
                }
            })

            setBlog(data)
        }).then((err) => {
            console.log(err)
        })
    }

    const columns = [
        {
            title: 'No',
            dataIndex: 'key',
            rowScope: 'row',
        },
        {
            title: 'Name',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Author',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: 'Created At',
            dataIndex: 'created_at',
            key: 'created_at',
        },
        {
            title: 'Update At',
            dataIndex: 'updated_at',
            key: 'updated_at',
        }
    ]

    useEffect(() => {getBlog()}, [])

    return (
        <Table dataSource={blog} columns={columns} style={{width: "60%"}}/>
    )
}
