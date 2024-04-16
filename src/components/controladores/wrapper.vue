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
defineExpose({
  value,
  handleChange,
  handleBlur,
  checked,
  errors,
})
</script>
<template>
  <label :for="path" class="block text-gray-700 text-sm font-bold w-full">
    {{ label }}
  </label>
  <slot v-bind="{
    value,
    handleChange, handleBlur, checked
  }"></slot>

  <!-- <p class="text-red-500 text-xs italic">{{ errorMessage }}</p> -->
  <p v-for="erro in errors" class="text-red-500 text-xs italic">{{ erro }}</p>
</template>