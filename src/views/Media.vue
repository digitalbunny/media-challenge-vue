<template>
    <div>
        <div v-if="library">
          <u>
            <li v-for="media in library.results" :key="media.BibNum">{{ media.Title }}</li>
          </u>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { mediaStore } from "@/store/index";
import MediaCard from "@/components/MediaCard.vue";

export default defineComponent({
  name: "Media",

  components: {
      MediaCard,
  },

  setup() {
      const mediaLibrary = mediaStore();

      onMounted(() => {
        mediaLibrary.fetchMedia();
      })

      return {
        library: mediaLibrary.media
      }
  }
});
</script>
