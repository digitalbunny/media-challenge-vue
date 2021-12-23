<template>
    <div>
        <div v-if="libraryItem">
            <h2 class="text-center text-lg md:text-2xl xl:text-4xl font-semibold capitalize">{{ libraryItem.source.Title }}</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 text-sm">

                <section class="border rounded-md shadow-sm py-4 px-6">
                    <h2 class="text-xl font-semibold border-b pb-3 mb-4">Media</h2>

                    <ul class="space-y-4">
                        <li class="flex items-start space-x-3">
                            <span class="w-1/5">BibNum:</span>
                            <span class="w-4/5">{{ libraryItem.source.BibNum }}</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <span class="w-1/5">ISBN:</span>
                            <span class="w-4/5">{{ libraryItem.source.ISBN }}</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <span class="w-1/5">Author:</span>
                            <span class="w-4/5">{{ libraryItem.source.Author }}</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <span class="w-1/5">Publication Year:</span>
                            <span class="w-1/5">{{ libraryItem.source.PublicationYear }}</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <span class="w-1/5">Publisher:</span>
                            <span class="flex flex-wrap w-4/5">
                                <span 
                                    v-for="publisher in getSplitText(libraryItem.source.Publisher, ';')" :key="publisher" 
                                    class="border bg-gray-100 px-2 py-0.5 my-1.5 mr-1.5 text-sm rounded">
                                    {{ publisher }}
                                </span>
                            </span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <span class="w-1/5">Subjects:</span>
                            <span class="flex flex-wrap w-4/5">
                                <span 
                                    v-for="subject in getSplitText(libraryItem.source.Subjects)" :key="subject" 
                                    class="border bg-gray-100 px-2 py-0.5 my-1.5 mr-1.5 text-sm rounded">
                                    {{ subject }}
                                </span>
                            </span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <span class="w-1/5">Item Type:</span>
                            <span class="w-4/5 uppercase">{{ libraryItem.source.ItemType }}</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <span class="w-1/5">Item Count:</span>
                            <span class="w-4/5">{{ libraryItem.source.ItemCount }}</span>
                        </li>
                    </ul>
                </section>

                <section class="border rounded-md shadow-sm py-4 px-6">
                    <h2 class="text-xl font-semibold border-b pb-3 mb-4">Media Type</h2>

                    <ul class="space-y-4">
                        <li class="flex items-start space-x-3">
                            <span class="w-1/5">Code</span>
                            <span class="w-4/5 uppercase">{{ libraryItem.source_type.Code }}</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <span class="w-1/5">Code Type</span>
                            <span class="w-4/5">{{ libraryItem.source_type.CodeType }}</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <span class="w-1/5">Description</span>
                            <span class="w-4/5">{{ libraryItem.source_type.Description }}</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <span class="w-1/5">Format Group</span>
                            <span class="w-4/5">{{ libraryItem.source_type.FormatGroup }}</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <span class="w-1/5">Format Sub</span>
                            <span class="w-4/5">{{ libraryItem.source_type.FormatSubgroup }}</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <span class="w-1/5">Category Group</span>
                            <span class="w-4/5">{{ libraryItem.source_type.CategoryGroup }}</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <span class="w-1/5">Category Sub</span>
                            <span class="w-4/5">{{ libraryItem.source_type.CategorySubgroup }}</span>
                        </li>
                    </ul>
                </section>

            </div>


            <div class="overflow-x-auto">
                <h2 class="text-xl font-semibold border-b pb-3 mb-4">Checkout Data</h2>

                <table class="table-auto w-full border bg-white divide-y divide-gray-200">
                    <thead class="bg-gray-100 text-gray-600 text-sm">
                        <th 
                            class="px-3 py-2 text-xs font-semibold uppercase"
                            v-for="(item, index) in tableHeader" :key="index">
                                {{ item }}
                            </th>
                    </thead>
                    <tbody class="text-xs divide-y divide-gray-200" v-if="libraryItem.checkout.length > 0">
                        <tr 
                            class="text-center divide-x" 
                            v-for="item in libraryItem.checkout" 
                            :key="item.id">
                            <td class="px-3 py-2 truncate">
                                {{ item.id }}
                            </td>
                            <td class="px-3 py-2 truncate">
                                {{ item.BibNumber}}
                            </td>
                            <td class="px-3 py-2 truncate">
                                {{ item.ItemBarcode }}
                            </td>
                            <td class="px-3 py-2 truncate">
                                {{ item.ItemType }}
                            </td>
                            <td class="px-3 py-2 truncate">
                                {{ item.CallNumber }}
                            </td>
                            <td class="px-3 py-2 truncate">
                                {{ item.CheckoutDateTime }}
                            </td>
                        </tr>
                    </tbody>
                    <tbody class="text-xs divide-y divide-gray-200" v-else>
                        <tr>
                            <td class="text-center p-4" colspan="6">No Data</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div v-else>
            <h2 class="text-4xl text-center py-12">Loading ...........</h2>
        </div>
    </div> 
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios, { AxiosError } from "axios";
import { MediaDetail } from "@/types";

export default defineComponent({
    name: "MediaDetails",

    setup() {
        const libraryItem = ref<MediaDetail | null> (null);
        const route = useRoute()

        const tableHeader = ref<string[]> ([
            "ID", "Bib Number", "Bar Code", "Item Type", "Call Number", "Date Time"
        ])

        const fetchMediaDetails = () => {
            axios.get<MediaDetail>(process.env.VUE_APP_API_URL + `/media/${route.params.id}`)
            .then((response) => {
                libraryItem.value = response.data
            })
        }

        const getSplitText = (content: string, separator: string = ", "): Array<string>  => {
            return content.split(separator)
        }

        onMounted(() => {
            fetchMediaDetails();
        })

        return {
            libraryItem,
            getSplitText,
            tableHeader
        }
    }

})
</script>

<style>

</style>