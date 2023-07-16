<script setup lang="ts">
  const blogPosts = await queryContent('/blog/')
    .sort({ date: -1 }) // show latest articles first
    .where({ _partial: false }) // exclude the Partial files
    .where({ draft: false })
    .find()
</script>


<template>
    <ul>
      <li class="mt-5" v-for="{ _path: slug, title, date } in blogPosts" :key="slug">
        <div class="hover:text-gray-500">
            <NuxtLink :to="slug" class="font-bold"> {{ title }}</NuxtLink>
            <div class="text-xs">  {{ date }} </div>
        </div>
      </li>
    </ul>
</template>
  
