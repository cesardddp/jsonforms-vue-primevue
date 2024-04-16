<script lang="ts" setup>
import type { ControlElement } from "@jsonforms/core";
import { rendererProps, useJsonFormsControl } from "@jsonforms/vue";
import wrapper from "./wrapper.vue";

import Calendar from 'primevue/calendar';
import { computed, ref } from "vue";

const props = defineProps(rendererProps<ControlElement>());

const controler = useJsonFormsControl(props);

const wrapperRef = ref<InstanceType<typeof wrapper> | null>(null);

const value = computed({
	get: () => {
		if (!wrapperRef.value?.value) {
			return null;
		}
		const date = new Date(
			wrapperRef.value.value + 'T00:00:00.000Z'
			 );
		return date
	},
	set: (newValue) => {
		// converter para o format YYYY-MM-DDT
		// hh:mm:ss.sssZ
		
		const dataFormatada = newValue!.toISOString().split('T')[0];
		wrapperRef.value?.handleChange(dataFormatada);
	}
});

</script>
<template>
	<!-- {{ value }} -->
	<wrapper ref="wrapperRef" :path="controler.control.value.path" :label="controler.control.value.label" v-slot="{
		handleChange,
		handleBlur,
		// value
	}">

		<!-- date -->
		<Calendar v-model="value" dateFormat="dd/mm/yy" type="date" :id="controler.control.value.path"
			:name="controler.control.value.path"  
			append-to="body"
			/>



	</wrapper>
</template>
