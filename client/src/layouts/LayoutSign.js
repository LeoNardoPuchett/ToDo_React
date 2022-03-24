import { Layout } from 'antd';
import React from 'react';

export default function LayoutSign(props) {


  const {children} = props ; 
  const {Header,Content,Footer} = Layout ; 
  
  
    return (
      <Layout>
            <Header>Header Sign ...</Header>
            <Content>{children}</Content>
            <Footer>Footer ...</Footer>
      </Layout>
    )
}
