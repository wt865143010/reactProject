import React, {Component} from 'react'
import './Orderlist.css'
import moment from 'moment';
import {observer,inject} from 'mobx-react'


/*antd组件的引入*/
import { DatePicker,Button,Table,Pagination ,Space} from 'antd';

// import zhCN from 'antd/es/locale/zh_CN'

const { RangePicker } = DatePicker;


const columns = [
    {
        title: '序号',
        dataIndex: 'name',
        // render: text => <a href="#">{text}</a>,
        align: 'center',
    },
    {
        title: '订单来源',
        className: 'column-money',
        dataIndex: 'money',
        align: 'center',
    },
    {
        title: '业务类型',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '订单单号',
        dataIndex: 'order',
        align: 'center',
    },
    {
        title: '代购人',
        dataIndex: 'dai_people',
        align: 'center',
    },
    {
        title: '代购人手机',
        dataIndex: 'dai_phone',
        align: 'center',
    },
    {
        title: '代购人卡号',
        dataIndex: 'dai_ka',
        align: 'center',
    },
    {
        title: '订购人',
        dataIndex: 'dingPeople',
        align: 'center',
    },
    {
        title: '订购人手机',
        dataIndex: 'ding_phone',
        align: 'center',
    },
    {
        title: '订购人卡号',
        dataIndex: 'ding_ka',
        align: 'center',
    },
    {
        title: '收货人',
        dataIndex: 'shouhuo_people',
        align: 'center',
    },
    {
        title: '收货人手机',
        dataIndex: 'shouhuo_phone',
        align: 'center',
    },
    {
        title: '支付信息',
        dataIndex: 'zhifu',
        align: 'center',
    },
    {
        title: '下单时间',
        dataIndex: 'order_time',
        align: 'center',
    },
    {
        title: '操作',
        dataIndex: 'handle',
        align: 'center',
        /*render: (text, record) => (
            <Space size="middle">
                {/!*<a>Invite {record.name}</a>*!/}
                <a href="#">详情</a>
                {/!*<span>详情</span>*!/}
            </Space>
        ),*/
        render:()=>(
            <Space  size="middle">
                <a href="">详情</a>
            </Space>
        )
    }
];
// const data = [
//     {
//         key: '1',
//         name: '1',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '2',
//         name: '2',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '3',
//         name: '3',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '4',
//         name: '4',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '5',
//         name: '5',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '6',
//         name: '6',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '7',
//         name: '7',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '8',
//         name: '8',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '9',
//         name: '9',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '10',
//         name: '10',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '11',
//         name: '11',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '12',
//         name: '12',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '13',
//         name: '13',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '14',
//         name: '14',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '15',
//         name: '15',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '16',
//         name: '16',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '17',
//         name: '17',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '18',
//         name: '18',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '19',
//         name: '19',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '20',
//         name: '20',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
//     {
//         key: '21',
//         name: '21',
//         money: '￥300.00',
//         address: '云南',
//         order:"1",
//         dai_people:"2",
//         dai_phone:"3",
//         dai_ka:"4",
//         dingPeople:"5",
//         ding_phone:"6",
//         ding_ka:"7",
//         shouhuo_people:"8",
//         shouhuo_phone:"9",
//         zhifu:"11",
//         order_time:"22"
//     },
// ];
/*时间组件的函数*/
function onChange(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

/*分页组件的函数*/
function onChange2(pageNumber) {
    console.log('Page: ', pageNumber);
}



@inject("user")

@observer
class Orderlist extends Component {
    constructor(){
        super();
        this.state={
            orderList:[]
        }
    }


    UNSAFE_componentWillMount() {
        this.props.user.myOrder()
            .then((data)=>{
                let temp=this.props.user.orderList

                this.setState({
                    orderList:temp
                })
            })

    }

    render() {
        return (
            <div>
                <form action="/orderDetail.do" method="post">
                    <div>
                        <label >订单单号:</label>
                        <input type="text"/>
                        <label >手机:</label>
                        <input type="text" placeholder="订单所属人手机,或订单"/>
                        <label >订单包含产品:</label>
                        <input type="text" placeholder="输入产品编码"/>
                        <label >来源平台</label>
                        <select >
                            <option value="Shopping Cart">Shopping Cart</option>
                            <option value="门店">门店</option>
                            <option value="360">360</option>
                        </select>
                    </div>

                    <div className="yourOd">
                        <label >下单时间:</label>
                        {/*时间插件*/}
                        <RangePicker
                            ranges={{
                                Today: [moment(), moment()],
                                'This Month': [moment().startOf('month'), moment().endOf('month')],
                             }}
                            onChange={onChange}
                        />

                        <label >订购人卡号:</label>
                        <input type="text"/>
                        <label >代购人卡号:</label>
                        <input type="text"/>
                    </div>

                    <div className="myBut">
                        <Button type="primary">搜索</Button>
                        <Button type="reset">重置</Button>
                        <Button type="primary">导出数据</Button>

                    </div>
                    <hr/>
                </form>

                <div className="stateCss">
                    <Button >所有订单</Button>
                    <Button >已支付</Button>
                    <Button >待付款</Button>
                    <Button >发货中</Button>
                    <Button >交易完成</Button>
                    <Button >已取消</Button>
                </div>

                {/*表格组件*/}
                <Table
                    columns={columns}
                    // dataSource={data}
                    dataSource={this.state.orderList}
                    bordered="true"
                    border="1px solid black"
                    pagination={{showQuickJumper: true,showSizeChanger:true,hideOnSinglePage:false}}    /*默认不使用分页功能*/

                    /*render={()=><Pagination showQuickJumper onChange={onChange2} total={500} defaultCurrent={2}>

                        </Pagination>}*/
                />

                {/*分页组件*/}
                <div>
                    {/*<ConfigProvider locale={zhCN}>*/}
                    {/*    <Pagination showQuickJumper defaultCurrent={2} total={11} onChange={onChange2} />*/}
                    {/*</ConfigProvider>*/}

                    {/*<br />*/}
                    {/*<Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />*/}
                </div>

            </div>
        )
    }
}

export default Orderlist