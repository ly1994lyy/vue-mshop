<template>
    <div>
        <cube-form :model='model' 
        :schema="schema" 
        @validate="handleValidate"
        @submit="handleLogin"></cube-form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            model:{//数据模型
                username:'',
                password:''
            },
            schema:{
                fields:[
                    {
                        type:'input',
                        modelKey:'username',
                        label:'用户名',
                        props:{
                            placeholder:'请输入用户名'
                        },
                        rules:{//校验选项
                            required:true
                        },
                        trigger:'blur',
                        messages:{
                            required:'用户名为必填'
                        }
                    },
                    {
                        type:'input',
                        modelKey:'password',
                        label:'密码',
                        props:{
                            placeholder:'请输入密码',
                            type:'password',
                            eye:{open:false}
                        },
                        rules:{//校验选项
                            required:true
                        },
                        trigger:'blur',
                        messages:{
                            required:'密码为必填'
                        }
                    },
                    {
                        type:'submit',
                        label:'登录'
                    }
                ]
            }
        }
    },
    methods:{
        async handleLogin(e){
            e.preventDefault();
            const res =await this.$http.post('/api/login',{params:{
                username:this.model.username,
                password:this.model.password
            }})
            const {code,token,message} = res.data
            if(code == 0){
                //登录成功
                localStorage.setItem('token',token) //缓存到本地
                this.$store.commit('setToken',token) //存入store

                const {redirect} = this.$route.query || '/'
                this.$router.push(redirect)
            }else{
                //登录失败
                const toast = this.$createToast({
                    time:2000,
                    txt:message || '登录失败',
                    type:err
                });
                toast,show()
            }
        },
        handleValidate(){

        }
    }
}
</script>
