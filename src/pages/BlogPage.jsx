import React from 'react'
import BlogTable from '../components/BlogTable'
import { Layout } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'

export default function BlogPage() {
  return (
    <Layout>
        <Header>
            <Header />
        </Header>
        <Content>
            <BlogTable />
        </Content>
    </Layout>
  )
}
