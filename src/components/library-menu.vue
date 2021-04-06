<template>
  <nav class="library_menu" id="library-menu">
    <div class="lm_search">
		<label for="lm_search"></label>
		<input class="lm_input search_field" type="search" id="lm_search" placeholder="Поиск">
		<button class="lm_input filter">Фильтры</button>
    </div>
    <button class="lm_input fav">Только избранное</button>
  </nav>
</template>

<script>
export default {
name: "library-menu",
}
</script>

<style scoped>
.library_menu{
	display: flex;
	position: relative;
	justify-content: space-between;
	width: 75%;
	margin: 10px auto ;
	height: 50px;
	padding: 10px;
	align-items: center;
}


.lm_input{
	background-color: #fff;
	font-size: 1rem;
	transition: 200ms ease-in-out;
}

.lm_input:hover{
	cursor: pointer;
}

.lm_search{
	display: flex;
	overflow: hidden;
}

.search_field{
	border-bottom: 3px solid var(--primary);
	margin-right: 30px;
	font-size: 0.8rem;
	width: 500px;
}

.filter{
	padding: 5px;
	color: var(--primary);
	font-weight: bold;
}

.filter:hover{
	transform: translateY(5px);
}

.fav{
	border: 3px solid var(--secondary);
	padding: 5px 10px;
}

.fav:hover{
	background-color: var(--secondary);
}
</style>