<template>
	<section class="torrents_section" id="torrents">
		<h3 class="torrent_header">Торренты</h3>
		<div class="torrents">
			<div class="torrent_element">
				<div class="torrent_title">Серия 1-1 [WEBRip 1080p]</div>
					<div class="torrent_info">
						<span class="torrent torrent_size">212.8 MB</span>
						<span class="torrent torrent_seeders"><span class="torrent_icon seeders">∧</span>31</span>
						<span class="torrent torrent_peers"><span class="torrent_icon peers">∨</span>6</span>
					</div>
				</div>

			<div class="torrent_element">
				<div class="torrent_title">Серия 1-1 [BDRip 1080p HEVC]</div>
					<div class="torrent_info">
						<span class="torrent torrent_size">212.8 MB</span>
						<span class="torrent torrent_seeders"><span class="torrent_icon seeders">∧</span>31</span>
						<span class="torrent torrent_peers"><span class="torrent_icon peers">∨</span>3</span>
					</div>
				</div>
			</div>
	</section>

</template>

<script>
export default {
	name: "torrents"
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
	margin: 10px 0;
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