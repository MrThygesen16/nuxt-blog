<script setup lang="ts">
  const blogPosts = await queryContent('/blog/')
    .sort({ date: -1 }) // show latest articles first
    .where({ _partial: false }) // exclude the Partial files
    .find()

  const format_date = (date: any) => {
      date.splice
  }
</script>


<template>
    <ul>
      <li class="mt-5" v-for="{ _path: slug, title, date } in blogPosts" :key="slug">
        <NuxtLink :to="slug" class="font-bold hover:text-gray-500"> {{ title }}</NuxtLink>
        <div class="text-xs">  {{ date }} </div>
      </li>
    </ul>
</template>
  
