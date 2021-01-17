import AuthorPage from './pages/AuthorPage'
import CreateAuthor from './components/CreateAuthor'
import ListAuthors from './components/ListAuthors'
import EditAuthor from './components/EditAuthor'
export const AuthorRoutes = [
    {
        path: '/author',
        component: AuthorPage,
        meta: {
            requiresAuth: false
        },
    },
    {
        path: '/author/create',
        component: CreateAuthor,
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: '/author/list',
        component: ListAuthors,
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: '/author/:id',
        name: 'editauthor',
        component: EditAuthor,
        meta: {
            requiresAuth: false
        }
    }
]