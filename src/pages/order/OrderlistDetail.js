import React, {Component} from 'react'

import './OrderlistDetail.css'


/*引入antd组件*/
import {Button,Steps,DatePicker,Table,Pagination ,ConfigProvider,Space } from 'antd'


import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined,LaptopOutlined } from '@ant-design/icons';

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
        title: '数量',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '销售单价',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '实际购买价格',
        dataIndex: 'address',
        align: 'center',
    },
    {
        title: '实收小计',
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


class OrderlistDetail extends Component {
    render() {
        return (
            <div>
                {/*<div style="1px solid red" width="0px" height="5px"></div>*/}
                <div className="myhead">
                    <div className="heng">|</div>
                    <span>订单详情</span>
                    <Button type="primary" className="myreturn">返回</Button>
                </div>

                <div className="zhuangtai">
                    <div className="jindu">
                        <div className="mytitle">
                            <span >订单流转过程</span>
                        </div>
                        <Steps>
                            <Step status="finish" title="提交订单" icon={<UserOutlined />} />
                            <Step status="finish" title="付款成功" icon={<SolutionOutlined />} />
                            <Step status="process" title="待发货" icon={<LoadingOutlined />} />
                            <Step status="wait" title="等待收货" icon={<SmileOutlined />} />
                            <Step status="wait" title="完成" icon={<LaptopOutlined />} />
                        </Steps>
                    </div>

                    <div className="myorder">
                        <div className="mydan">
                            <p>业务类型：普通订单</p>
                            <p>订单号：2017061600001</p>
                            <p>订单类型：自购</p>
                            <p>订购人卡号：CN123456</p>
                            <p>订购人：mr张</p>
                            <p>订购人手机：136****5678</p>
                            <p>代购人卡号：N123456</p>
                            <p>代购人：mr张</p>
                            <p>代购人手机：136****5678</p>
                        </div>
                        <div className="myyouhui">
                            <div className="xiangshou">
                                <span>享受活动:</span>
                                <span className="myone">2017年终LTO第一波</span>
                            </div>
                            <div className="youhuiquan">
                                <div>
                                    <span>优惠券信息:</span>
                                    <img src="" alt=""/>
                                </div>
                                <div>
                                    <span>总商品金额:￥</span>
                                    <span>优惠金额:￥</span>
                                    <span>运费:￥</span>
                                    <span>实付金额:￥</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/*收货信息等*/}
                <div className="shouhuo">
                    <div className="shouren">
                        <h3>收货人信息</h3>
                        <p>收货人:  mr张</p>
                        <p>收货地址:成都市青羊区大庆路瓜瓜号</p>
                        <p>联系电话:186****6441</p>
                    </div>
                    <div className="zhifu">
                        <h3>支付信息</h3>
                        <p>付款方式: 在线支付</p>
                        <p>支付渠道: 微信</p>
                        <p>付款时间: 2017-12-31 13:41:30</p>
                        <p>产品总金额: ￥</p>
                        <p>应支付金额: ￥</p>
                        <p>运费金额: ￥</p>
                        <p>优惠金额: ￥</p>
                    </div>
                    <div className="fapiao">
                        <h3>发票信息</h3>
                        <p>发票类型:增值票</p>
                        <p>单位名称:云河科技有限公司</p>
                        <p>纳税人识别码:12345678765432</p>
                        <p>注册地址:成都市青羊区大庆路瓜瓜号</p>
                        <p>注册电话:13310002000</p>
                        <p>开户银行:招商银行</p>
                        <p>银行账户:8888 8888 8888 8888</p>
                    </div>
                </div>


                {/*发货单*/}
                <div className="yourHuo">
                    <h2>发货单</h2>

                    <div>
                        <div className="myHeadTitle">
                            发货单(F17020100)
                        </div>

                        {/*表格组件*/}
                        <Table
                            columns={columns}
                            dataSource={data}
                            bordered
                            border="1px solid black"
                            pagination={false}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderlistDetail