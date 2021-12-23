<template>
    <div>
        <div v-if="library">
            <section class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div v-for="media in library.results" :key="media.BibNum">{{ media.Title }}</div>
            </section>
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
