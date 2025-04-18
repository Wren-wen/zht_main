<template>
    <div class="root">
        <div class="title">
            <lan en="Leave a message" zh="留言窗口" />
        </div>
        <div class="sub-title">
            <lan en="In order to provide you with better service, please fill in following information (* is required),
            your personal information we will be strictly confidential, thank you for your turst!" 
            zh="为给您提供更优质的服务，请您填写以下信息（*为必填），您的个人信息我们将严格保密，感谢信任！" />
        </div>
        <div class="msg-form">
            <div class="first-line">
                <form-input 
                    title="姓名"
                    title_en="Name"
                    required=true
                    placeholder="请输入您的姓名"
                    placeholder_en="Please enter your name"
                    :rect="{'width': '450px', 'height': '80px'}"
                />
                <form-input 
                    title="电话"
                    title_en="Telephone"
                    required=true
                    placeholder="请输入您的电话"
                    placeholder_en="Please enter your phone number"
                    :rect="{'width': '450px', 'height': '80px'}"
                />
            </div>
            <div class="second-line">
                <form-input 
                    title="国家/地区"
                    title_en="Country / region"
                    required=true
                    placeholder="请输入您的国家/地区"
                    placeholder_en="Please enter your country or region"
                    :rect="{'width': '450px', 'height': '80px'}"
                />
                <form-input 
                    title="邮箱"
                    title_en="Email"
                    required=true
                    placeholder="请输入您的邮箱"
                    placeholder_en="Please enter your email"
                    :rect="{'width': '450px', 'height': '80px'}"
                />
            </div>
            <div class="third-line">
                <form-input 
                    title="公司名称"
                    title_en="Company name"
                    placeholder="请输入您的公司名称"
                    placeholder_en="Please enter your company name"
                    :rect="{'width': '450px', 'height': '80px'}"
                />
                <form-input 
                    title="感兴趣的产品"
                    title_en="Products of interest"
                    required=true
                    placeholder="请输入您感兴趣了解的产品"
                    placeholder_en="Please enter the product you are interested in"
                    :rect="{'width': '450px', 'height': '80px'}"
                />
            </div>
            <div class="forth-line">
                <form-input 
                    title="留言"
                    title_en="Leave a message"
                    placeholder="请告诉我您的需求，或者对我们的建议，这对我们很重要"
                    placeholder_en="Please tell me your needs, or suggestions for us, it is very important to us"
                    :rect="{'width': '1010px', 'height': '200px'}"
                />
            </div>
        </div>
        <div class="submit-btn">
            <lan en="Send" zh="提交" />
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.root {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 20px 80px 30px;
    border-radius: 17px;
    .title {
        color: #595758;
        font-size: 28px;
        font-weight: bold;
        margin-top: 30px;
    } 
    .sub-title {
        text-align: center;
        color: #595758;
        white-space: pre-line;
        font-size: 15px;
        font-weight: bold;
        margin-top: 23px;
    }
    .msg-form {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        .first-line, .second-line, .third-line {
            display: flex;
        }
    }
    .submit-btn {
        background-color: #fe0000;
        width: 140px;
        font-size: 24px;
        color: #fff;
        border-radius: 40px;
        text-align: center;
        cursor: pointer;
        padding: 10px 20px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
}
</style>