<template>
    <div id="home">
        <app-header/>
        <app-nav/>
        <app-tabbar/>
    </div>
</template>
<script>

import AppHeader from '@/components/layout/header'
import AppNav from '@/components/layout/nav'
import AppTabbar from '@/components/layout/tabbar'

export default {
    components: {
        AppHeader,
        AppNav,
        AppTabbar
    }
}
</script>

