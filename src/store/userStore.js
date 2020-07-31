import {observable,action} from "mobx";
import Axios from "../util/Axios";
import Api from '../api/allApi'
export default class userStore {
    @observable user=[];
    @observable isLogin=false;
    @observable token="";

    @action login=(obj)=>{
        console.log(obj)
        return new Promise((resolve, reject) => {
            Axios.get(Api.user.userLogin,
                {params:obj})
                .then(res=>{
                    if (res.data.returnCode===200){
                        this.user=res.data.data;
                        this.token=res.data.token
                        resolve(res);
                    }else {
                        reject("登录失败")
                    }

            })
            // Axios({
            //     url:Api.user.userLogin,
            //     type:'GET',
            //     data:{
            //         params:obj
            //     }
            // })
        })


    }
}