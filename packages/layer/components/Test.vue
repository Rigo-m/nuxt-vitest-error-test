<template>
  <div>{{ testProp }}</div>
</template>

<script setup lang="ts">
import type { TestProps } from "./test.props";
defineProps<TestProps>();
</script>
