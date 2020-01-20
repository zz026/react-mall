import React, { Component } from 'react';
import { Card, Icon } from 'antd';
import './index.less'

export default class GoodsCard extends Component {
  // constructor() {
  //   super()
  // }
 
  render() {
    return (<div className="goodsCard">
      <Card title={this.props.goodsInfo.name} extra={<Icon type="plus" />} style={{ width: 300 }}>
        <p><img src={this.props.goodsInfo.image} alt={this.props.goodsInfo.name} /></p>
        <p>价格: {this.props.goodsInfo.price ? this.props.goodsInfo.price.toFixed(2) : '0'} 元</p>
      </Card>
    </div>)
  }
}