<script lang="ts" setup>
import type { ControlElement, } from "@jsonforms/core";
import { rendererProps, useJsonFormsControl } from "@jsonforms/vue";
import wrapper from "./wrapper.vue";
import Calendar from 'primevue/calendar';
import { DataTableSelectAllChangeEvent } from "primevue/datatable";



const props = defineProps(rendererProps<ControlElement>())

const controler = useJsonFormsControl(props)


</script>
<template>
    <wrapper :path="controler.control.value.path" :label="controler.control.value.label" v-slot="{
        handleChange,
        handleBlur,
        value
    }">
    <!-- time -->
        <Calendar showTime hourFormat="24" timeOnly @date-select="handleChange"
            type="time" :id="props.path" :name="controler.control.value.path" 
            :model-value="value as Date"
            />

    </wrapper>

</template>