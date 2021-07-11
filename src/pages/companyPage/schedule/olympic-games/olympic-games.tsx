import React from 'react'
import Style from './olympic-games.module.scss'
import { Table, Tag, Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { dataList } from './mock'

import JINGPAI from '../../../../assets/companyImage/icon-icon-jingpai@2x.png'
import TONGPAI from '../../../../assets/companyImage/icon-icon-tongpai@3x.png'
import YINGPAI from '../../../../assets/companyImage/icon-icon-yingpai@2x.png'

interface Prop {}
interface State {
  tableData: any[]
}
export default class OlympicGames extends React.Component<Prop, State> {
  constructor (props) {
    super(props)
    this.state = {
      tableData: dataList
    }
  }

  rowTopTree = (text: string, row: any, index: number) => {
    if ([0, 1, 2].includes(index)) {
      return {
        children: <div className={Style['top-three-box']}>{text}</div>
      }
    }
    return text
  }

  render () {
    const columns: ColumnsType<any> = [
      {
        title: '名次',
        dataIndex: 'id',
        align: 'center',
        width: 58,
        render: (text, row, index) => {
          if ([0, 1, 2].includes(index)) {
            return {
              children: <span className={Style['top-three']}>{text}</span>,
            };
          }
          return text;
        },
      },
      {
        title: '国家/地区',
        dataIndex: 'organisationName',
        align: 'center',
        width: 119,
        render: this.rowTopTree,
      },
      {
        title: <img alt='' className={Style['head-icon-img']} src={JINGPAI} />,
        dataIndex: 'goldTotal',
        align: 'center',
        width: 119,
        render: this.rowTopTree,
      },
      {
        title: <img alt='' className={Style['head-icon-img']} src={YINGPAI} />,
        dataIndex: 'silverTotal',
        align: 'center',
        width: 119,
        render: this.rowTopTree,
      },
      {
        title: <img alt='' className={Style['head-icon-img']} src={TONGPAI} />,
        dataIndex: 'bronzeTotal',
        align: 'center',
        width: 119,
        render: this.rowTopTree,
      },
      {
        title: '总数',
        dataIndex: 'medalTotal',
        align: 'center',
        width: 119,
        render: this.rowTopTree,
      },
      {
        title: '男子项目',
        dataIndex: '',
        children: [
          {
            title: '金',
            dataIndex: 'goldMan',
            align: 'center',
            render: this.rowTopTree,
          },
          {
            title: '银',
            dataIndex: 'silverMan',
            align: 'center',
            render: this.rowTopTree,
          },
          {
            title: '铜',
            dataIndex: 'bronzeMan',
            align: 'center',
            render: this.rowTopTree,
          },
        ],
      },
      {
        title: '女子项目',
        dataIndex: '',
        children: [
          {
            title: '金',
            dataIndex: 'goldWoman',
            align: 'center',
            render: this.rowTopTree,
          },
          {
            title: '银',
            dataIndex: 'silverWoman',
            align: 'center',
            render: this.rowTopTree,
          },
          {
            title: '铜',
            dataIndex: 'bronzeWoman',
            align: 'center',
            render: this.rowTopTree,
          },
        ],
      },
      {
        title: '男女混合项目',
        dataIndex: '',
        children: [
          {
            title: '金',
            dataIndex: 'goldMix',
            align: 'center',
            render: this.rowTopTree,
          },
          {
            title: '银',
            dataIndex: 'silverMix',
            align: 'center',
            render: this.rowTopTree,
          },
          {
            title: '铜',
            dataIndex: 'bronzeMix',
            align: 'center',
            render: this.rowTopTree,
          },
        ],
      },
    ]
    return (
      <div className={Style['OlympicGames-warp']}>
        <Table
          columns={columns}
          dataSource={this.state.tableData}
          pagination={false}
          scroll={{ y: 600 }}
          onHeaderRow={(columns, index) => {
            return {
              onClick: () => {
                console.log(columns)
              } // 点击表头行
            }
          }}
        />
      </div>
    )
  }
}
