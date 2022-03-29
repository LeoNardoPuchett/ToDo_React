import React from 'react';

import { Layout , Tabs} from 'antd';
import {Route,Routes,Navigate} from 'react-router-dom' ;




import "./SigIn.scss";




export default function SignIn() {

const {Content} = Layout;
const {TabPane } = Tabs ; 




  return (
    <Layout className='sign-in'>
      <Content className='sign-in__content'>

        <div className='sign-in__content-tabs'>

          <Tabs type='card'>

            <TabPane tab={<span>Entrar</span>} key="1">
              Componente LoginForm
            </TabPane>
            <TabPane tab={<span>Nuevo usuario</span>} key="2">
              Componente LoginForm
            </TabPane>
          
          </Tabs>

        </div>
      </Content>
    </Layout>
  )
}
