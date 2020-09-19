<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="username"
      name="用户名"
      label="+86"
      placeholder="请输入手机号"
    />
    <van-field v-model="sms" center clearable placeholder="请输入短信验证码">
      <template #button>
        <van-button size="small" type="primary">发送验证码</van-button>
      </template>
    </van-field>
    <div style="margin: 16px;">
      <van-button round block color="" type="info" native-type="submit">登录</van-button>
    </div>
    <div style="margin: 16px;">
      <van-button round block color="" type="primary" native-type="submit">一键登录</van-button>
    </div>
  </van-form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      sms:''
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>

<style>
</style>