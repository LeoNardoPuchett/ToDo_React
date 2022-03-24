import React from 'react';
import {Layout} from 'antd' ; 


export default function LayoutBasic(props){


const {children} = props ; 
const {Header,Content,Footer} = Layout ; 


  return (
    <Layout>
          <Header>Header Basic...</Header>
          <Content>{children}</Content>
          <Footer>Footer ...</Footer>
    </Layout>
  )
}
