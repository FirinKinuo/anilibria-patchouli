<template>
	<video-player
		class="video-player-box"
		ref="videoPlayer"
		:options="playerOptions"
		:playsinline="true">
  </video-player>
</template>

<script>

import 'video.js/dist/video-js.min.css'
import {videoPlayer} from 'vue-video-player'
import 'videojs-contrib-hls'

export default {
	name: "player",
	data() {
      return {
        playerOptions: {
          sources: [{
            type: "application/x-mpegURL",
            src: "https://de8.libria.fun/videos/ts/8876/0001/playlist.m3u8",
          },
          {
            type: "application/x-mpegURL",
            src: "https://de8.libria.fun/videos/ts/8876/0001/playlist.m3u8",
          },
          {
            type: "application/x-mpegURL",
            src: "https://de8.libria.fun/videos/ts/8876/0001/playlist.m3u8",
          }],
        }
      }
    },
    mounted() {
      console.log('this is current player instance object', this.player)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },

	components:{
		videoPlayer,
	}
}


</script>

<style>
	.video-js{
		width: inherit;
		height: inherit;
	}
</style>