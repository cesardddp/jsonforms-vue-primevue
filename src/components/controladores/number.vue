<script lang="ts" setup>
import type { ControlElement, } from "@jsonforms/core";
import { rendererProps, useJsonFormsControl } from "@jsonforms/vue";
import wrapper from "./wrapper.vue";
import InputNumber, { InputNumberInputEvent } from 'primevue/inputnumber';



const props = defineProps(rendererProps<ControlElement>())

const controler = useJsonFormsControl(props)



</script>
<template>
   	<wrapper :path="controler.control.value.path" :label="controler.control.value.label" v-slot="{
    handleChange,
    handleBlur,
    value
  }">
      
        <InputNumber :id="props.path" 
        type="number" 
        :model-value="value as number"
        :name="controler.control.value.path" 
        :step="Number((controler.control.value.schema as any).step??1)"
        @input="(e: InputNumberInputEvent) => {
            handleChange(e.value)
        }" />

</wrapper>

</template>