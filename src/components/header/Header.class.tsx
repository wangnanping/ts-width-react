import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import store from '../../redux/store'
import { LanguageState, change_language } from '../../redux/languageReducer'
import Storage, { StorageType } from '../../handle'
interface State extends LanguageState {
  updataVal: number
}

class HeaderComponnet extends React.Component<RouteComponentProps, State> {
  constructor (props) {
    super(props)
    const storeState = store.getState()
    this.state = {
      language: storeState.language,
      languageList: storeState.languageList,
      updataVal: 0
    }
    // 订阅
    store.subscribe(this.handleStoreChange)
  }

  handleStoreChange = () => {
    const storeState = store.getState()
    this.setState({
      language: storeState.language
    })
  }

  menuClickHandler = e => {
    console.log(e)
    let locationStorage = Storage.getInstence() as StorageType
    console.log(locationStorage.getStorage('name'))
    // 通过store来更新数据操作
    const action = {
      type: 'CHANGE_LANGUAGE',
      payload: e.key
    }
    store.dispatch(change_language(action)) // 在reducer中的action获取到当前组件传入action
  }
  componentDidUpdate (props, state) {
    // 数据更新
    console.log(state)
  }

  setUpdataVal = () => {
    let newupdataVal = this.state.updataVal
    this.setState({
      updataVal: ++newupdataVal
    })
    console.log(this.state.updataVal)
    let locationStorage = Storage.getInstence() as StorageType
    locationStorage.setStorage('name', 123)
  }

  render () {
    const { history } = this.props
    const { updataVal } = this.state
    return (
      <div className={styles['app-header']}>
        {/* top-header */}
        <div className={styles['top-header']}>
          <div className={styles.inner}>
            <span onClick={this.setUpdataVal}>让旅游更幸福{updataVal}</span>
            <Typography.Text delete underline>
              让旅游更幸福{updataVal}
            </Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              overlay={
                <Menu onClick={this.menuClickHandler}>
                  {/* <Menu.Item>中文</Menu.Item>
                  <Menu.Item>English</Menu.Item> */}
                  {this.state.languageList.map(l => {
                    return <Menu.Item key={l.code}>{l.name}</Menu.Item>
                  })}
                </Menu>
              }
              icon={<GlobalOutlined />}
            >
              {this.state.language == 'zh' ? '中文' : 'EN'}
            </Dropdown.Button>
            <Button.Group className={styles['button-group']}>
              <Button onClick={() => history.push('register')}>注册</Button>
              <Button onClick={() => history.push('signIn')}>登陆</Button>
              <Button onClick={() => history.push('schedule')}>赛事</Button>
              <Button onClick={() => history.push('ScheduleMsg')}>赛程</Button>
              <Button onClick={() => history.push('WonderfulReplay')}>赛事回放</Button>
            </Button.Group>
          </div>
        </div>
        <Layout.Header className={styles['main-header']}>
          <span onClick={() => history.push('/')}>
            <img src={logo} alt='logo' className={styles['App-logo']} />
            <Typography.Title level={3} className={styles.title}>
              React旅游网
            </Typography.Title>
          </span>
          <Input.Search
            placeholder={'请输入旅游目的地、主题、或关键字'}
            className={styles['search-input']}
          />
        </Layout.Header>
        <Menu mode={'horizontal'} className={styles['main-menu']}>
          <Menu.Item key={1}>旅游首页</Menu.Item>
          <Menu.Item key={2}>周末游</Menu.Item>
          <Menu.Item key={3}>跟团游</Menu.Item>
          <Menu.Item key='4'> 自由行 </Menu.Item>
          <Menu.Item key='5'> 私家团 </Menu.Item>
          <Menu.Item key='6'> 邮轮 </Menu.Item>
          <Menu.Item key='7'> 酒店+景点 </Menu.Item>
          <Menu.Item key='8'> 当地玩乐 </Menu.Item>
          <Menu.Item key='9'> 主题游 </Menu.Item>
          <Menu.Item key='10'> 定制游 </Menu.Item>
          <Menu.Item key='11'> 游学 </Menu.Item>
          <Menu.Item key='12'> 签证 </Menu.Item>
          <Menu.Item key='13'> 企业游 </Menu.Item>
          <Menu.Item key='14'> 高端游 </Menu.Item>
          <Menu.Item key='15'> 爱玩户外 </Menu.Item>
          <Menu.Item key='16'> 保险 </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export const Header = withRouter(HeaderComponnet) //高阶组件中的withRouter, 作用是将一个组件包裹进Route里面, 然后react-router的三个对象history, location, match就会被放进这个组件的props属性中
