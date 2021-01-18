<template>
   <v-form @submit.prevent="updateBookData()">
      <v-row>
         <v-col>
            <h1 
            class="text-center light-blue--text text--darken-3"
            >Actualizacion de Libros</h1>
         </v-col>
      </v-row>
      <v-row>
         <v-col cols="6">
            <v-text-field 
            v-model="book.title"
            label="Titulo del Libro"
            ></v-text-field>
         </v-col>
         <v-col cols="6">
            <v-text-field 
            v-model="book.description"
            label="Descripcion del Libro"
            >Descripcion del Libro</v-text-field>
         </v-col>
      </v-row>
      <v-row>
         <v-col cols="6">
            <v-text-field 
            v-model="book.quantity"
            label="Cantidad de Libros"
            ></v-text-field>
         </v-col>
         <v-col cols="6">
            <v-text-field
            v-model="book.price"
            label="Precio del Libro"
            ></v-text-field>
         </v-col>
      </v-row>
      <v-row>
         <v-col cols="12">
            <v-select 
            v-model="book.author._id" 
            :items="authors" 
            item-text="name" 
            item-value="_id" 
            label="Autor del Libro"
            ></v-select>
         </v-col>
      </v-row>
      <v-row>
         <v-col class="d-flex">
            <v-btn 
            type="submit" 
            dark class="mx-auto" 
            color="light-blue darken-2"
            >Actualizar Libro</v-btn>
         </v-col>
      </v-row>
      <v-snackbar 
      v-model="snackbar" 
      color="success" 
      top right
      >Libro Modificado!</v-snackbar>
   </v-form>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
   name: 'EditBook',
   data () {
      return {
         snackbar: true
      }
   },
   created () {
      const { id } = this.$route.params
      this.getBookById(id)
      this.getAllAuthors()
   },
   methods: {
      ...mapActions('author', ['getAllAuthors']),
      ...mapActions('book', ['updateBook', 'getBookById']),
      updateBookDate () {
         const { id } = this.$route.params
         this.updateBook({ id })
         this.snackbar = true
      }
   },
   computed: {
      ...mapState('author', ['authors']),
      ...mapState('book', ['book'])
   }
}
</script>