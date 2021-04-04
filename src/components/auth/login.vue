<template>
    <section class="auth" id="login">
        <section class="type_select" >
            <button class="type_button type_button__active" value="login">Вход</button>
            <router-link to="/auth/registration" class="type_button " value="register">Регистрация</router-link>
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

            <div class="auth_submit_wrapper">
                <button type="button" class="auth_submit" id="login_btn">Вход</button>
                <label class="auth_remember-label" for="remember"><input class="auth_remember" type="checkbox" id="remember">Запомнить?</label>
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
}
</script>

<style scoped>

</style>