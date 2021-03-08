<template>
<nav class="main-menu" id="mainMenu">
  <img src="@/assets/anilibria-patchouli-logo/patchouli-full.svg" alt="Patchouli" class="main-menu__logo">
  <div class="main-menu__buttons">
    <button class="btn main-menu__button">Войти</button>
  </div>

</nav>
</template>

<script>
export default {
  name: "mainMenu"
}
</script>

<style scoped>
.main-menu__button{
  font-weight: bold;
  color: var(--dark);
  display: inline-block;
  position: relative;
  font-size: 1.2rem;
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