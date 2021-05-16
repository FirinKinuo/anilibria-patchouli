<template>
<header class="header">
  <router-link to="/" class="header__logo">
    <img src="@/assets/anilibria-patchouli-logo/patchouli-full.svg" alt="Patchouli" class="logo__image">
  </router-link>

  <nav class="header__menu">
    <div class="menu__search">
      <div class="search__field">
        <label for="anime_search" class="field__label">Поиск</label>
        <input type="text" class="field__input" id="anime_search">
      </div>
      <button class="button_primary search_button">Фильтр</button>
    </div>
    <router-link to="auth/login" class="header__account">
      <svg width="52" height="56" viewBox="0 0 52 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M49.6866 45.1992C48.397 42.1447 46.5257 39.3702 44.1768 37.0303C41.835 34.6836 39.061 32.8125 36.0079 31.5205C35.9805 31.5068 35.9532 31.5 35.9258 31.4863C40.1846 28.4102 42.9532 23.3994 42.9532 17.7461C42.9532 8.38086 35.3653 0.792969 26 0.792969C16.6348 0.792969 9.04692 8.38086 9.04692 17.7461C9.04692 23.3994 11.8155 28.4102 16.0743 31.4932C16.0469 31.5068 16.0196 31.5137 15.9922 31.5273C12.9297 32.8193 10.1817 34.6719 7.82329 37.0371C5.47658 39.3789 3.60555 42.1529 2.31353 45.2061C1.04424 48.1951 0.359691 51.3997 0.296924 54.6465C0.295099 54.7194 0.307896 54.792 0.334561 54.86C0.361226 54.9279 0.40122 54.9898 0.452184 55.0421C0.503149 55.0943 0.564055 55.1358 0.631312 55.1641C0.698569 55.1925 0.770817 55.2071 0.843799 55.207H4.94536C5.24614 55.207 5.4854 54.9678 5.49224 54.6738C5.62896 49.3965 7.7481 44.4541 11.4942 40.708C15.3702 36.832 20.5176 34.6992 26 34.6992C31.4825 34.6992 36.6299 36.832 40.5059 40.708C44.252 44.4541 46.3711 49.3965 46.5079 54.6738C46.5147 54.9746 46.754 55.207 47.0547 55.207H51.1563C51.2293 55.2071 51.3015 55.1925 51.3688 55.1641C51.436 55.1358 51.4969 55.0943 51.5479 55.0421C51.5989 54.9898 51.6389 54.9279 51.6655 54.86C51.6922 54.792 51.705 54.7194 51.7032 54.6465C51.6348 51.3789 50.9581 48.2002 49.6866 45.1992ZM26 29.5039C22.8624 29.5039 19.9092 28.2803 17.6875 26.0586C15.4659 23.8369 14.2422 20.8838 14.2422 17.7461C14.2422 14.6084 15.4659 11.6553 17.6875 9.43359C19.9092 7.21191 22.8624 5.98828 26 5.98828C29.1377 5.98828 32.0909 7.21191 34.3125 9.43359C36.5342 11.6553 37.7579 14.6084 37.7579 17.7461C37.7579 20.8838 36.5342 23.8369 34.3125 26.0586C32.0909 28.2803 29.1377 29.5039 26 29.5039Z" fill="white"/>
      </svg>
    </router-link>
  </nav>
</header>
</template>

<script>
import {toggleFieldLabel} from '@/assets/js/scss-components/forms-animation'

export default {
  name: "v-header",

  mounted() {
    const search_field = document.querySelector('.search__field .field__input');
    ['blur', 'focus'].forEach(event_type => search_field.addEventListener(event_type, event => toggleFieldLabel(event)))
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/variables";
@import "/src/assets/scss/scss-components/button";
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 160px;
  padding: 10px 30px 10px 10px;

  &__logo {
    width: 250px;
  }

  &__menu {
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .menu__search {
      display: flex;
      align-items: center;
      position: relative;
      color: white;
      width: 66%;

      .search__field {
        width: 77%;
        .field__input {
          position: relative;
          background-color: transparent;
          width: 100%;
          font-size: 0.9rem;
          height: 50px;
        }

        .field__label {
          position: absolute;
          top: 25%;
          left: 0;
          transition: 200ms ease-in-out;

          &_active {
            left: -100px;
          }
        }
      }

      .search_button{
        position: absolute;
        right: 0;
      }

      &:before {
        position: absolute;
        left: -15px;
        content: '';
        width: 7px;
        height: 100%;
        background-color: $primary;
      }
    }
  }
}


</style>