<script lang="ts" setup>
import type { ControlElement, } from "@jsonforms/core";
import { rendererProps, useJsonFormsControl } from "@jsonforms/vue";
import { useField } from "vee-validate";
import InputNumber, { InputNumberInputEvent } from 'primevue/inputnumber';



const props = defineProps(rendererProps<ControlElement>())

const controler = useJsonFormsControl(props)


const {
    value,
    // handleBlur,
    errors,
    handleChange,
} = useField(
    controler.control.value.path,
    undefined, 
)
</script>
<template>
    <label>
        {{ controler.control.value.label }}
        <InputNumber :id="props.path" 
        type="number" 
        :model-value="value as number"
        :name="controler.control.value.path" 
        :step="Number((controler.control.value.schema as any).step??1)"
        @input="(e: InputNumberInputEvent) => {
            handleChange(e.value)
        }" />
    </label>
    <!-- <p class="text-red-500 text-xs italic">{{ errorMessage }}</p> -->
    <p v-for="erro in errors"  class="text-red-500 text-xs italic">{{ erro }}</p>
</template>