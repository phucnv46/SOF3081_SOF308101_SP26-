<template>
  <a-form
    style="margin-top: 2rem"
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 10 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>
<script setup>
import { reactive } from "vue";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";

const router = useRouter();

const formState = reactive({
  username: "",
  password: "",
  remember: true,
});
const onFinish = (values) => {
  if (values.username === "phucnv" && values.password === "sof3081") {
    localStorage.setItem("token", "Đảng Cộng Sản quang vinh muôn năm");
    router.push("/a");
  } else {
    message.error("khong co tài khản trong hệ thống");
    return;
  }
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
</script>
