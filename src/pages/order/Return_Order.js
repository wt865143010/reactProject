import React, {Component} from 'react'
import  './Return_Order.css'
import moment from 'moment';

/*antd组件的引入*/
import { DatePicker,Button,Table,Pagination ,ConfigProvider,Space} from 'antd';

const { RangePicker } = DatePicker;

/*时间插件函数*/
function onChange(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

/*表格*/
const columns = [
    {
        title: '序号',
        dataIndex: 'name',
        // render: text => <a href="#">{text}</a>,
        align: 'center',
    },
    {
        title: '申请单号',
        className: 'column-money',
        dataIndex: 'money',
        align: 'center',
    },
    {
        title: '所属订单号',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '申请人手机号',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '申请人卡号',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '申请人姓名',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '申请时间',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '退货原因',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '退货理由',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '退货人联系电话',
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
class Return_Order extends Component {
    render() {
        return (
            <div>
                <form action="./return_order.do" method="post">
                    <div>
                        <label >申请单号:</label>
                        <input type="text"/>
                        <label >订单号:</label>
                        <input type="text" placeholder=""/>
                        <label >含产品编号:</label>
                        <input type="text" placeholder=""/>
                        <label >含产品名称:</label>
                        <input type="text"/>
                    </div>

                    <div>
                        <label >申请时间:</label>
                        <RangePicker
                            ranges={{
                                Today: [moment(), moment()],
                                'This Month': [moment().startOf('month'), moment().endOf('month')],
                            }}
                            onChange={onChange}
                        />

                        <label >申请人手机号:</label>
                        <input type="text"/>
                        <label >申请人卡号:</label>
                        <input type="text"/>
                    </div>

                    <div className="myBut3">
                        <Button type="primary">搜索</Button>
                        <Button type="reset">重置</Button>
                        <Button type="primary">导出数据</Button>

                    </div>
                    <hr/>

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
                        {/*<Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
                        <br />*/}
                        {/*<Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />*/}
                    </div>
                </form>
            </div>
        )
    }
}

export default Return_Order