import React from 'react'
import BlogTable from '../components/BlogTable'
import { Layout } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import BlogBreadCrumb from '../components/BreadCrumb'
import Navbar from '../components/Navbar'

export default function BlogPage() {
  return (
    <Layout style={{marginTop: "0"}}>
        <Navbar />
        <BlogBreadCrumb dataArr={["Home", "Blog"]}/>
        <Content>
            <BlogTable />
        </Content>
    </Layout>
  )
}
