<script lang="ts" setup>
import { useField } from "vee-validate";



const props = defineProps<{
  label: string,
  path: string,
}>()


const {
  value,
  handleChange,
  handleBlur,
  checked,
  errors,
} = useField(
  props.path
)
</script>
<template>
  <label>
    {{ label }}
    <slot v-bind="{
      value,
      handleChange, handleBlur, checked
    }"></slot>
  </label>

  <!-- <p class="text-red-500 text-xs italic">{{ errorMessage }}</p> -->
  <p v-for="erro in errors" class="text-red-500 text-xs italic">{{ erro }}</p>
</template>