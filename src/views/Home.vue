<template>
  <div class="home">
    <a-form :form="form">
      <a-form-item 
        label="Name"
        :colon="false" 
        v-bind="formItemLayout"
      >
        <a-input
          v-decorator="[
            'name',
            {rules:[{message:'xxx'}]}
          ]"
        ></a-input>
      </a-form-item>
      <a-form-item label="gender" :colon="false" v-bind="formItemLayout">
        <a-checkbox
          v-decorator="[
            'gender',
            {rules: [{required: true,message:'性别必有'}]}
          ]"
        ></a-checkbox>
      </a-form-item>
      <a-form-item label="button" :colon="false" v-bind="formItemLayout">
        <a-button type="primary" @click="handleClick">
          提交
        </a-button>
      </a-form-item>
      <a-form-item>
        <a-radio></a-radio>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      form: this.$form.createForm(this),
      formItemLayout: {
        labelCol: {
          span: 5
        },
        wrapperCol: {
          span: 10
        }
      }
    }
  },
  methods: {
    handleClick(){
      
      console.log(this.form.getFieldsError(),'getFieldsError')

      this.form.validateFields(
        ['name','gender'],
        (err) => {
          console.log(err,'validateFields里的回掉的参数')
          if (!err) {
            console.info('success');
          }
        },
      )
    }
  }
}
</script>
