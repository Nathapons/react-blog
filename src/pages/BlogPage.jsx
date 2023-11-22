import React from 'react'
import BlogTable from '../components/BlogTable'
import { Layout } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import BlogBreadCrumb from '../components/BreadCrumb'

export default function BlogPage() {
  return (
    <Layout>
        <Header>
            <Header />
        </Header>
        <BlogBreadCrumb data={["Home", "Blog"]} />
        <Content>
            <BlogTable />
        </Content>
    </Layout>
  )
}
