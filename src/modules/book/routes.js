import BookPage from './pages/BookPage'
import CreateBook from './components/CreateBook'
import ListBook from './components/ListBooks'
import EditBook from './components/EditBook'

export const BookRoutes = [
    {
        path: '/book',
        component: BookPage,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/book/create',
        component: CreateBook,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/book/list',
        component: ListBook,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/book/:id',
        component: EditBook,
        name: 'editbook',
        meta: {
            requiresAuth: false
        },  
    },
]