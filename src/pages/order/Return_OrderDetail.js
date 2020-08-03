import React, {Component} from 'react'
import './Return_OrderDetail.css'


/*引入antd组件*/
import {Button,Steps,DatePicker,Table,Pagination ,ConfigProvider,Space } from 'antd'


import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined,LaptopOutlined } from '@ant-design/icons'

const { Step } = Steps;
const { RangePicker } = DatePicker;


const columns = [
    {
        title: '序号',
        dataIndex: 'name',
        // render: text => <a href="#">{text}</a>,
        align: 'center',
    },
    {
        title: '产品',
        className: 'column-money',
        dataIndex: 'money',
        align: 'center',
    },
    {
        title: '产品编号',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '单位',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '退货数量',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '销售单价',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '小计',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '实收金额',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '对应发货单',
        dataIndex: 'address',
        align: 'center',
    },


    /*{
        title: '操作',
        dataIndex: 'address',
        align: 'center',
        render: (text, record) => (
            <Space size="middle">
                {/!*<a>Invite {record.name}</a>*!/}
                <a href="#">详情</a>
                {/!*<span>详情</span>*!/}
            </Space>
        ),
    }*/
];

/*渲染表格数据的data*/
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
class Return_OrderDetail extends Component {
    render() {
        return (
            <div>
                <div className="myhead3">
                    {/*<div className="heng">|</div>*/}
                    <span>退货单详情</span>
                    <Button type="primary" className="myreturn">返回</Button>
                </div>

                <h1>基本信息</h1>
                <hr/>

                <div>
                    <div className="row1">
                        <div className="danhao">
                            <span>申请单号</span>
                            <span className="myleft">CN29102843</span>
                        </div>
                        <div className="dingdan">
                            <span>所属订单号</span>
                            <span className="myleft">CN29102843</span>
                        </div>
                        <div className="phone">
                            <span>申请人手机号</span>
                            <span className="myleft">13800138000</span>
                        </div>

                    </div>

                    <div className="row2">
                        <div className="kahao">
                            <span>申请人卡号</span>
                            <span className="myleft">CN29102843</span>
                        </div>
                        <div className="heName">
                            <span>申请人姓名</span>
                            <span className="myleft">1989-09-09</span>
                        </div>
                        <div className="heTime">
                            <span>申请时间</span>
                            <span className="myleft">1989-09-09</span>
                        </div>

                    </div>


                    <div className="row3">
                        <div className="tuihuo">
                            <span>退货原因</span>
                            <span className="myleft">物流太慢</span>
                        </div>
                        <div className="lianxiren">
                            <span>退货联系人</span>
                            <span className="myleft">业务经理</span>
                        </div>
                        <div className="thePhone">
                            <span>退货联系电话</span>
                            <span className="myleft">优惠折扣价格</span>
                        </div>

                    </div>

                    <div className="row4">
                        <div className="yourReason">
                            <span>退货理由</span>
                            <span></span>
                        </div>
                    </div>
                </div>

                <h1>申请退货产品</h1>
                <hr/>

                {/*表格组件*/}
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    border="1px solid black"
                    pagination={false}
                />
            </div>
        )
    }
}

export default Return_OrderDetail