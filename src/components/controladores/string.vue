<script lang="ts" setup>
import type { ControlElement, } from "@jsonforms/core";
import {
  rendererProps,
  useJsonFormsControl
} from "@jsonforms/vue";
import wrapper from "./wrapper.vue";
import InputText from "primevue/inputtext";

const props = defineProps(rendererProps<ControlElement>())
const controler = useJsonFormsControl(props)

</script>
<template>
  <!-- <pre>{{controler}}</pre> -->
  <wrapper :path="controler.control.value.path" :label="controler.control.value.label" v-slot="{
    handleChange,
    handleBlur,
    value: inputValue
  }">
    <!-- string -->
    <InputText :id="controler.control.value.path" :name="controler.control.value.path" :value="inputValue"
      @blur="handleBlur" @change="handleChange" />
  </wrapper>

</template>