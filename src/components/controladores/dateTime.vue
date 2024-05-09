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
		const date = new Date(wrapperRef.value.value as string);
		return date
	},
	set: (newValue) => {
		const dataFormatada = newValue?.toISOString();
		dataFormatada && wrapperRef.value?.handleChange(dataFormatada);
	}
});

</script>
<template>
	<wrapper ref="wrapperRef" :path="controler.control.value.path" :label="controler.control.value.label">
		<!-- <pre>
timeOnly: {{controler.control.value.uischema.options?.timeOnly}}
showTime: {{controler.control.value.uischema.options?.showTime}}
ampm: {{controler.control.value.uischema.options?.ampm}}
dateTimeFormat: {{controler.control.value.uischema.options?.dateTimeFormat}}
timeFormat: {{controler.control.value.uischema.options?.timeFormat}}
	</pre> -->

		<!-- date -->
		<Calendar v-model="value" type="date" :id="controler.control.value.path" :name="controler.control.value.path"
			:time-only="controler.control.value.uischema.options?.timeOnly ?? false"
			:show-time="controler.control.value.uischema.options?.showTime ?? true"
			:hourFormat="controler.control.value.uischema.options?.ampm ? '12' : '24'" :date-format="'dd/mm/yy'"
		class="w-full"
		/>

	</wrapper>
</template>
