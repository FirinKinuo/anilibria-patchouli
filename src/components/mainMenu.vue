<template>
<nav class="main-menu" id="mainMenu">
	<Auth/>
  <img src="@/assets/anilibria-patchouli-logo/patchouli-full.svg" alt="Patchouli" class="main-menu__logo">
  <div class="main-menu__buttons">
    <button class="btn main-menu__button">Аккаунт</button>
  </div>

</nav>
</template>

<script>
import Auth from "@/components/auth"
export default {
	name: "mainMenu",
	components: {Auth},
	modules: {
		Auth
	}
}

</script>

<style scoped>
.main-menu__button{
  font-weight: bold;
  color: var(--primary);
  display: inline-block;
  position: relative;
  font-size: 1.4rem;
  padding: 5px 10px;

}
.main-menu__button:after{
  display: block;
  content: "";
  background-color: var(--secondary);
  height: 2px;
  width: 0;
  left: 50%;
  position: absolute;
  transition: width 200ms ease-in-out;
  transform: translateX(-50%);
}

.main-menu__button:hover:after,
.main-menu__button:focus:after {
  width: 110%;
}
.btn{
  background-color: transparent;
  cursor: pointer;
}

.main-menu__buttons{
  justify-self: end;
  float: right;
}

.main-menu{
  display: flex;
  padding: 2px 30px;
  align-items: center;
  justify-content: space-between;
}

.main-menu__logo{
  height: 100px;
}

</style>