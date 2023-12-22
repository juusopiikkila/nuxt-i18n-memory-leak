<template>
    <div>
        {{ title }}
    </div>
</template>

<script lang="ts" setup>
import { useStore } from './store/store';

const { t } = useI18n();

const store = useStore();
await store.doRequest();

const title = computed(() => t('welcome'));
</script>

<i18n lang="json">
{
    "en": {
        "welcome": "Welcome to Nuxt.js!"
    }
}
</i18n>
