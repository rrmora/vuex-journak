<template>
    <template v-if="entry">
        <div  class="entry-title d-flex justify-content-beween p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{dayMonthYear.day}}</span>
                <span class="mx-1 fs-3">{{dayMonthYear.month}}</span>
                <span class="mx-2 fs-4 fw-light">{{dayMonthYear.yearDay}}</span>
            </div>
            <div>
                <button 
                v-if="entry.id"
                @click="removeEntry"
                class="btn btn-danger mx-2">Borrar <i class="fa fa-trash-alt"></i></button>
                <button class="btn btn-primary">Subir foto <i class="fa fa-upload"></i></button>
            </div>
        </div>
        <hr>
        <div class="d-flex flex-column px-3 h-75">
            <textarea v-model="entry.text" placeholder="Que sucedio hoy?"></textarea>
        </div>
        <Fab @on:click="saveEntry" icon="fa-save"/>
        <img src="https://www.motor16.com/images/modelos/300/308/1.jpg" alt="Audi-r8" class="img-tumbnail">
    </template>
</template>

<script>
import {defineAsyncComponent} from 'vue'
import {mapGetters, mapActions} from 'vuex'
import getDayMonthYear from '../helpers/getDayMonthYear'

export default {
    props: {
        id: {
            type: String,
            required: true,
        }
    },
    components: {
        Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
    },
    data() {
        return {
            entry: null,
        }
    },
    methods: {
        ...mapActions('journal', ['updateEntry', 'createEntry', 'deleteEntry']),
        loadEntry() {
            let entry
            if (this.id === 'new') {
                entry = {
                    text: '',
                    date: new Date().getTime()
                }
            } else {
                entry = this.getEntryById(this.id);
                if (!entry) {
                    return this.$router.push({name: 'no-entry'})
                }
            }
            
            this.entry = entry
        },
        async saveEntry() {
            if (this.entry.id) {
                await this.updateEntry(this.entry)
            } else {
                const id = await this.createEntry(this.entry)
                this.$router.push({name: 'entry', params: { id }})
            }
        }, 
        async removeEntry () {
            console.log(this.entry.id)
            await this.deleteEntry(this.entry.id)
            // this.$router.push({name: 'no-entry'})
        }
    },
    computed: {
        ...mapGetters('journal', ['getEntryById']),
        dayMonthYear() {
            const {day, month, yearDay} = getDayMonthYear(this.entry.date)
            return {day, month, yearDay}
        }
    },
    created() {
        console.log(this.id)
        this.loadEntry()
    },
    watch: {
        id() {
            this.loadEntry()
        }
    }
}
</script> 

<style lang="scss" scoped>
    textarea {
        font-size: 20px;
        border: none;
        height: 100%;

        &:focus {
            outline: none;
        }
    }
    img {
        width: 200px;
        position: fixed;
        bottom: 100px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
    }
</style>