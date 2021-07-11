import React from 'react'
import Style from './china.module.scss'
import { Table, Tag, Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { datalist } from './mock'

interface Prop {}
interface State {
  tableData: any[]
}
export default class China extends React.Component<Prop, State> {
  constructor (props) {
    super(props)
    this.state = {
      tableData: datalist
    }
  }

  render () {
    const columns: ColumnsType<any> = [
      { title: '时间', dataIndex: 'time', width: 200, align: 'center' },
      {
        title: '奖牌',
        dataIndex: 'data1',
        width: 200,
        align: 'center'
      },
      {
        title: '项目',
        dataIndex: 'data2',
        width: 200,
        align: 'center'
      },
      {
        title: '小项',
        dataIndex: 'data3',
        width: 200,
        align: 'center'
      },
      {
        title: '运动员/运动队',
        dataIndex: 'data4',
        width: 200,
        align: 'center'
      }
    ]
    return (
      <div className={Style['china-warp']}>
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
