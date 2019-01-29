<template>
    <div id="home">
        <app-header/>
        <router-view />
        <app-tabbar/>
    </div>
</template>
<script>

import AppHeader from '@/components/layout/header'
import AppTabbar from '@/components/layout/tabbar'

export default {
    components: {
        AppHeader,
        AppTabbar
    }
}
</script>

