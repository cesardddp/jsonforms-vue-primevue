<script lang="ts" setup>
import type { ControlElement, } from "@jsonforms/core";
import { rendererProps, useJsonFormsControl } from "@jsonforms/vue";
import wrapper from "./wrapper.vue";
import Calendar from 'primevue/calendar';
import { ref, computed } from "vue";



const props = defineProps(rendererProps<ControlElement>())

const controler = useJsonFormsControl(props)

const wrapperRef = ref<InstanceType<typeof wrapper> | null>(null);

const value = computed({
	get: () => {
		if (!wrapperRef.value?.value) {
			return null;
		}
        
		const date = new Date('2021-10-10T' + wrapperRef.value!.value as string+'.000Z');
        date.setHours(date.getHours() + 3);
		return date
	},
	set: (newValue) => {
		// converter para an extended ISO 8601 time string in the format hh:mm:ss.sss.

		// newValue?.setHours(newValue.getHours() - 3);
		const horaFormatada = newValue?.toLocaleTimeString()//+'.000Z'
		// const horaFormatada = newValue!.toISOString().split('T')[1].split('.').at(0)+'.000Z'

        wrapperRef.value?.handleChange(horaFormatada);
	}
});

</script>
<template>
    <wrapper 
    ref="wrapperRef"
    :path="controler.control.value.path" :label="controler.control.value.label" >
    <!-- time -->
        <Calendar showTime hourFormat="24" timeOnly 
            type="time" :id="props.path" :name="controler.control.value.path" 
            v-model="value"
            append-to="body"
            />

    </wrapper>

</template>