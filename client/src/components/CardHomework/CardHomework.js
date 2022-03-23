import React from 'react'; 
import { Card } from 'antd';
//import './CardHomework.scss';


export default function CardHomework( props) {


  const {title , extra , style , content } = props ;

  return (

  
    <Card title={title} extra={extra} style={style}>
    <p>{content}</p>
    </Card>

  )
}
