<template>
	<div class="modal-wrapper">
		<section class="auth" id="auth">
		<section class="type_select">
			<button class="type_button type_button__active" value="login">Вход</button>
			<button class="type_button " value="register">Регистрация</button>
		</section>
		<form action="" class="auth_form">
				
			<div class="auth_input_wrapper">
				<input type="text" class="auth_input" id="login">
				<label for="login">Логин</label>
			</div>

			<div class="auth_input_wrapper">
				<input type="password" class="auth_input" id="password">
				<label for="password">Пароль</label>
			</div>

			<div class="auth_input_wrapper">
				<button type="button" class="" id="login_btn">Вход</button>
				<label for="remember"><input type="checkbox" id="remember">Запомнить?</label>
			</div>
		</form>
	</section>
	</div>

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
.auth{
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 600px;
	background-color: white;
	overflow: hidden;
}

.auth_form{
	display: flex;
	flex-direction: column;
	margin: 20px 0;
}

.auth_input_wrapper{
	position: relative;
	margin: 20px 0;
}

.auth_input {
	position: relative;
	display: inline-block;
	width: 315px;
	padding: 15px 0 15px 15px;
	font-weight: bold;
	color: #377D6A;
	background: #efefef;
	border: 0;
	border-radius: 3px;
	outline: 0;
	text-indent: 60px;
	transition: all 0.3s ease-in-out;
}
.auth_input::placeholder {
	color: #efefef;
	text-indent: 0;
	font-weight: 300;
}
.auth_input + label {
	display: inline-block;
	position: absolute;
	transform: translateX(0);
	top: 0;
	left: 0;
	bottom: 0;
	padding: 13px 15px;
	font-size: 11px;
	font-weight: 700;
	text-transform: uppercase;
	color: #032429;
	text-align: left;
	text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
	transition: all 0.3s ease-in-out, color 0.3s ease-out;
	border-top-left-radius: 3px;
	border-bottom-left-radius: 3px;
	overflow: hidden;
}
.auth_input + label:after {
	content: "";
	position: absolute;
	top: 0;
	right: 100%;
	bottom: 0;
	width: 100%;
	background: #7AB893;
	z-index: -1;
	transform: translate(0);
	transition: all 0.3s ease-in-out;
	border-top-left-radius: 3px;
	border-bottom-left-radius: 3px;
}
.auth_input:focus, .auth_input:active {
	color: #377D6A;
	text-indent: 0;
	background: #fff;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
}
.auth_input:focus::placeholder, .auth_input:active::placeholder {
	color: #aaa;
}
.auth_input:focus + label, .auth_input:active + label {
	color: #fff;
	text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
	transform: translateX(-100%);
}
.auth_input:focus + label:after, .auth_input:active + label:after {
	transform: translate(100%);
}

.type_select{
	display: flex;
	width: 100%;
	justify-self: flex-start;
}

.type_button{
	width: 50%;
	height: 100%;
	background-color: transparent;
	font-size: 1.3rem;
	padding: 10px 20px;
	transition: 200ms;
}

.type_button:not(.type_button__active):hover{
	background-color: #ffe4e4;
}


.type_button__active{
	background-color: var(--primary);
	color: white;

}

</style>