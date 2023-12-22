<template>
    <div>
        {{ title }}

        <pre>{{ currentLocation }}</pre>
    </div>
</template>

<script lang="ts" setup>
import { useLocation } from './store/location';

const { t } = useI18n();

const location = useLocation();

const currentLocation = await location.getLocation();
const title = computed(() => t('welcome'));

</script>

<i18n lang="json">
{
    "en": {
        "welcome": "Welcome to Nuxt.js!"
    }
}
</i18n>
