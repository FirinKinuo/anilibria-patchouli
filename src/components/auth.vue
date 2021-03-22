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

			<div class="auth_submit_wrapper">
				<button type="button" class="auth_submit" id="login_btn">Вход</button>
				<label class="auth_remember-label" for="remember"><input class="auth_remember" type="checkbox" id="remember">Запомнить?</label>
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
	border-radius: 3px;
	box-shadow: 10px 20px 0 var(--primary);
}

.auth_form{
	display: flex;
	flex-direction: column;
	margin: 50px 0;
}

.auth_input_wrapper{
	position: relative;
	margin: 10px 0;
}

.auth_input{
	position: relative;
	display: inline-block;
	width: 315px;
	padding: 15px 0 15px 15px;
	font-weight: bold;
	color: #7d3737;
	background: #efefef;
	border: 0;
	border-radius: 3px;
	outline: 0;
	text-indent: 60px;
	transition: all 300ms ease-in-out;
}
.auth_input::placeholder{
	color: #efefef;
	text-indent: 0;
	font-weight: 300;
}
.auth_input + label{
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
	color: #290303;
	text-align: left;
	transition: all 300ms ease-in-out, color 300ms ease-out;
	border-top-left-radius: 3px;
	border-bottom-left-radius: 3px;
	overflow: hidden;
}
.auth_input + label:after{
	content: "";
	position: absolute;
	top: 0;
	right: 100%;
	bottom: 0;
	width: 100%;
	background: var(--primary);
	z-index: -1;
	transform: translate(0);
	transition: all 300ms ease-in-out;
	border-top-left-radius: 3px;
	border-bottom-left-radius: 3px;
}
.auth_input:focus, .auth_input:active{
	color: #7d3737;
	text-indent: 0;
	background: #fff;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
}
.auth_input:focus::placeholder, .auth_input:active::placeholder{
	color: #aaa;
}
.auth_input:focus + label, .auth_input:active + label{
	color: #fff;
	transform: translateX(-100%);
}
.auth_input:focus + label:after, .auth_input:active + label:after{
	transform: translate(100%);
}

.auth_submit_wrapper{
	display: flex;
	margin: 20px 0;
	align-items: center;
}

.auth_remember-label{
	margin-left: 20px;
	font-size: 0.8rem;
}

.auth_remember{
	margin-right: 10px;
}

.auth_submit{
	background-color: #fff;
	color: var(--primary);
	font-size: 1rem;
	padding: 10px;
	overflow: hidden;
	cursor: pointer;
	transition: 250ms cubic-bezier(.68,-0.55,.27,1.55);
	border-radius: 100px;
	font-weight: bold;
}

.auth_submit:hover{
	color: white;
	background-color: var(--primary);
	border-radius: 3px;
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
	color: #7a7a7a;

}

.type_button:not(.type_button__active):hover{
	background-color: var(--secondary);
	color: var(--dark);
	cursor: pointer;
}


.type_button__active{
	background-color: var(--primary);
	color: white;
}

</style>