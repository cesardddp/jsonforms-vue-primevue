<script lang="ts" setup>
import type { ControlElement, } from "@jsonforms/core";
import {
  rendererProps,
  useJsonFormsControl
} from "@jsonforms/vue";
import { useField } from "vee-validate";

const props = defineProps(rendererProps<ControlElement>())
const controler = useJsonFormsControl(props)

const {
  value: inputValue,
  errors,
  handleBlur,
  handleChange
} = useField(
  controler.control.value.path,
  undefined,)
</script>
<template>
  <!-- <pre>{{controler}}</pre> -->
  <label>
    {{ controler.control.value.label }}
    <InputText :id="controler.control.value.path" :name="controler.control.value.path" :value="inputValue"
      @blur="handleBlur" @change="handleChange" />
  </label>
  <!-- <p class="text-red-500 text-xs italic">{{ errorMessage }}</p> -->
  <p v-for="erro in errors"  class="text-red-500 text-xs italic">{{ erro }}</p>

</template>