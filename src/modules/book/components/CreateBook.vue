<template>
    <v-form ref="main" @submit.prevent="createNewBook()">
        <v-row>
            <v-col>
               <h1 
               class="text-center light-blue--text text--darken-3"
               >Registro de Libros</h1> 
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-text-field v-model='title' label="Título del Libro"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field v-model='description' label="Descripción del Libro"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-text-field v-model='quantity' label="Cantidad de libros"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field v-model='price' label="Precio del Libro"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-select v-model="authorid" :items="authors" item-text="name" item-value="_id" label="Author del Libro"></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex">
                <v-btn dark type="submit" class="mx-auto" color="light-blue darken-2">Crear Libro</v-btn>
            </v-col>
        </v-row>
        <v-snakbar v-model="snackbar" color="success" top right>Libro creado!</v-snakbar>
    </v-form>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'CreateBook',
    data () {
        return {
            title: '',
            description: '',
            quantity: 0,
            price: 0,
            authorid: "",
            snackbar: false
        }
    },
    created () {
        this.getAllAuthors()
    },
    computed: {
        ...mapState('author', ['authors'])
    },
    methods: {
        ...mapActions('author', ['getAllAuthors']),
        ...mapActions('book', ['createBook']),
        createNewBook() {
            const newBook = {
                title: this.title,
                description: this.description,
                quantity: parseInt(this.quantity),
                price: parseInt(this.price),
                authorId: this.authorid
            }

            this.createBook(newBook)
            this.snackbar = true
            this.$refs.main.reset()
        }
    }
}
</script>