
export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "DayBookLayout" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "No-entry" */ '@/modules/daybook/views/NoEntrySelected.vue')

        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "Entry" */ '@/modules/daybook/views/EntryView.vue')

        }
    ]



}