<template>
	<section class="torrents_section" id="torrents">
		<h3 class="torrent_header">Торренты</h3>
		<div class="torrents">
			<a class="torrent_element" v-for="torrent in torrents_data" :key="torrent.id" :href="torrent.link">
				<div class="torrent_title">{{ torrent.title }}</div>
					<div class="torrent_info">
						<span class="torrent torrent_size">{{ torrent.size }}</span>
						<span class="torrent torrent_seeders"><span class="torrent_icon seeders">∧</span>{{ torrent.seeders }}</span>
						<span class="torrent torrent_peers"><span class="torrent_icon peers">∨</span>{{ torrent.peers }}</span>
					</div>
				</a>
			</div>
	</section>

</template>

<script>
export default {
	name: "torrents",
  props: ['torrents_data']
}
</script>

<style scoped>

.torrents_section{
	display: flex;
	justify-self: flex-end;
	margin-left: 40px;
	flex-direction: column;
}

.torrent_title{
	margin-right: 20px;
	background-color: var(--primary);
	color: white;
	padding: 10px;
}

.torrent_element{
	margin: 5px;
}

.torrent{
	color: white;
	padding: 10px;
}

.torrent:not(:last-child){
	border-right: 3px solid #fa7500;
}

.torrent_info{
	margin-left: 20px;
	background-color: var(--secondary);
	color: white;
	padding: 10px;
}

.torrent_icon{
	color: white;
	font-weight: bold;
	margin-right: 2px;
}

.seeders{
	color: var(--success);
}


.peers{
	color: var(--primary);
}
</style>