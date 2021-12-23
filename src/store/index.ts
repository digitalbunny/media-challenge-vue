import { defineStore } from "pinia";
import { MediaResponse, FetchPayload } from "@/types";
import axios, { AxiosError } from "axios";


export const mediaStore = defineStore("mediaStore", {
    state: () => {
        return {
            media: <MediaResponse | null> null
        }
    },

    actions: {
        fetchMedia(payload: FetchPayload | null = null) {
            axios.get<MediaResponse>(process.env.VUE_APP_API_URL + "/media", 
            {
                params: {
                    "offset": payload?.offset,
                    "limit": payload?.limit, 
                    "search": payload?.search, 
                }
            })
            .then((response) => {
                this.media = response.data
            })
            .catch((error: AxiosError) => {
                console.log(error.response)
            })
        },
    }
})