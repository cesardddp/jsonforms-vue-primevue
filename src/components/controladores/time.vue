<script lang="ts" setup>
import type { ControlElement, } from "@jsonforms/core";
import { rendererProps, useJsonFormsControl } from "@jsonforms/vue";
import { useField } from "vee-validate";



const props = defineProps(rendererProps<ControlElement>())

const controler = useJsonFormsControl(props)


const {
    value,
    handleChange,
    errors,
} = useField(
    controler.control.value.path,
    undefined
)
</script>
<template>
    <label>
        {{ controler.control.value.label }}
        <Calendar showTime hourFormat="24" timeOnly :model-value="value as string" @date-select="handleChange"
            type="time" :id="props.path" :name="controler.control.value.path" />
    </label>
    
    <!-- <p class="text-red-500 text-xs italic">{{ errorMessage }}</p> -->
    <p v-for="erro in errors"  class="text-red-500 text-xs italic">{{ erro }}</p>
</template>