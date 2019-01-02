<template>
  <div>
    <app-player/>
    <media-profile/>
  </div>
</template>
<script>
import AppPlayer from "@/components/media/player";
import MediaProfile from "@/components/media/profile";
export default {
  components: {
    AppPlayer,
    MediaProfile
  }
};
</script>

