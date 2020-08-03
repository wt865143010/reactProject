import React, {Component} from 'react'
import moment from 'moment';
import './Invoice.css'

/*antd组件的引入*/
import { DatePicker,Button,Table,Pagination ,ConfigProvider,Space} from 'antd';
const { RangePicker } = DatePicker;

/*时间插件函数*/
function onChange(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

/*表格插件*/
const columns = [
    {
        title: '序号',
        dataIndex: 'name',
        // render: text => <a href="#">{text}</a>,
        align: 'center',
    },
    {
        title: '业务类型',
        className: 'column-money',
        dataIndex: 'money',
        align: 'center',
    },
    {
        title: '发货单号',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '来源订单号',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '用户',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '手机号码',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '卡号',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '支付信息',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '下单时间',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '状态',
        dataIndex: 'address',
        align: 'center',
    },

    {
        title: '操作',
        dataIndex: 'address',
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

/*表格数据*/
const data = [
    {
        key: '1',
        name: '1',
        money: '￥300.00',
        address: '云南',
        item:"猪猪"
    },
    {
        key: '2',
        name: '2',
        money: '￥1,256.00',
        address: '四川',
    },
    {
        key: '3',
        name: '3',
        money: '￥120.00',
        address: '天青',
    },
];


class Invoice extends Component {
    render() {
        return (
            <div>
                <form action="./invoice.do" method="post">
                    <div>
                        <label >发货单号:</label>
                        <input type="text"/>
                        <label >来源订单号:</label>
                        <input type="text" placeholder=""/>
                        <label >发货单包含产品:</label>
                        <input type="text" placeholder=""/>
                        <label >物流单号:</label>
                        <input type="text"/>
                    </div>

                    <div>
                        <label >下单时间:</label>
                        <RangePicker
                            ranges={{
                                Today: [moment(), moment()],
                                'This Month': [moment().startOf('month'), moment().endOf('month')],
                            }}
                            onChange={onChange}
                        />

                        <label >收货人姓名:</label>
                        <input type="text"/>
                        <label >收货人手机号:</label>
                        <input type="text" placeholder="收货人手机号"/>
                        <label >订单所属卡号:</label>
                        <input type="text"/>
                    </div>

                    <div className="myTT">
                        <Button type="primary">搜索</Button>
                        <Button type="reset">重置</Button>

                    </div>
                    <hr/>
                </form>

                <div className="stateCss">
                    <Button >待发货</Button>
                    <Button >待付款</Button>
                    <Button >已发货</Button>
                    <Button >已完成</Button>
                    <Button >已取消</Button>
                    <Button >所有发货单</Button>
                </div>

                {/*表格插件*/}
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    border="1px solid black"
                    pagination={{showQuickJumper: true,showSizeChanger:true,hideOnSinglePage:false}}
                />

                {/*分页插件*/}
                <div>
                    {/*<Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />*/}
                    {/*<br />*/}
                    {/*<Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />*/}
                </div>
            </div>
        )
    }
}

export default Invoice