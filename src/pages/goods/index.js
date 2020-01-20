import React, { Component } from 'react'
import { $get } from '@/utils/request';
import GoodsCard from '@/components/GoodsCard';

export default class GoodsList extends Component {

  state = {
    goodsList: [],
    pageConfig: {}
  }

  componentWillMount() {
    this.getList()
  }

  async getList() {
    const res = await $get('/api/goods/list')
    console.log('result', res)
    this.setState({
      goodsList: res.list,
      pageConfig: res.pageConfig
    })
  }
  render() {
    return (
      <div>
        {this.state.goodsList.map((val) => {
          return <GoodsCard goodsInfo={val} key={val.id} />
        })}
      </div>
    )
  }
}
