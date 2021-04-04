<template>
    <section class="auth" id="login">
        <section class="type_select" >
            <router-link to="/auth/login" class="type_button" value="login">Вход</router-link>
            <button class="type_button type_button__active" value="register">Регистрация</button>
        </section>
        <form action="" class="auth_form">

            <div class="auth_input_wrapper">
                <input type="text" class="auth_input" id="login_field">
                <label for="login_field">Логин</label>
            </div>

            <div class="auth_input_wrapper">
                <input type="password" class="auth_input" id="password_field">
                <label for="password_field">Пароль</label>
            </div>

            <div class="auth_input_wrapper">
                <input type="password" class="auth_input" id="re_password_field">
                <label for="re_password_field">Повтор</label>
            </div>

            <div class="auth_submit_wrapper">
                <button type="button" class="auth_submit" id="login_btn">Регистрация</button>
            </div>
        </form>
    </section>
</template>

<script>
import {mapActions} from "vuex"

export default {
	name: "auth",
	data(){
		return {
			login_data: {
				login: '',
				password: ''
			}
		}
	},
	methods: mapActions([
		'send_auth_data',
	]),
	async mounted (){
		await this.send_auth_data(this.login_data);
	}
}
</script>

<style scoped>
*{
    --primary: var(--secondary);
}
.auth{
	box-shadow: -10px 20px 0 var(--primary);
}

.auth_input{
    color: #7d5e37;
}

.type_button:not(.type_button__active):hover{
    background-color: #E73321;
    color: white;
}

</style>