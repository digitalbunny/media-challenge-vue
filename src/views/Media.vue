<template>
    <div>
        <div v-if="library">
            <h2 class="text-2xl lg:text-4xl font-semibold mb-6">All Media</h2>

            <section class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div class="border rounded-md shadow-sm hover:border-gray-300 hover:shadow py-4 px-6 space-y-6" v-for="media in library.results" :key="media.BibNum">
                    <div>
                        <router-link 
                            :to="{name: 'media-detail', params: {id: media.BibNum}}"
                            class="text-lg md:text-lg lg:text-2xl font-semibold text-blue-800 mb-2 line-clamp-1">
                            {{ media.Title }}
                        </router-link>
                        <div class="flex space-x-4 text-sm 2xl:text-base text-gray-400">
                            <p v-if="media.Author">By {{ media.Author }}</p>
                            <p v-if="media.PublicationYear">Year {{ media.PublicationYear }}</p>
                        </div>
                    </div>
                    
                    <div>
                        <p>Subjects</p>
                        <p class="flex flex-wrap mt-1.5">
                            <span 
                                v-for="subject in getSubjectList(media.Subjects)" :key="subject" 
                                class="border bg-gray-100 px-2 py-0.5 my-1.5 mr-1.5 text-sm rounded">
                                {{ subject }}
                            </span>
                        </p>
                    </div>

                    <p v-if="media.ISBN" class="space-x-2">
                        <span>ISBN</span>
                        <span>{{ media.ISBN }}</span>
                    </p>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { mediaStore } from "@/store/index";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "Media",

  setup() {
        const mediaLibrary = mediaStore();
        const { media } = storeToRefs(mediaLibrary);

        const getSubjectList = (subjects: string): Array<string>  => {
            return subjects.split(", ")
        }

        onMounted(() => {
            mediaLibrary.fetchMedia();
        })

        return {
            library: media,
            getSubjectList
      }
  }
});
</script>
