<script setup lang="ts">
defineProps<{
    date?: string
}>()
</script>

<template>
    <div class="mt-5">
        <ContentSlot :use="$slots.default" unwrap="p" />
        <div class="text-xs mt-2"> {{ date }} </div>
    </div>
</template>