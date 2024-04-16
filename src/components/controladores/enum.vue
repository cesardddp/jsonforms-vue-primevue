<script lang="ts" setup>
import type { ControlElement } from "@jsonforms/core";
import { rendererProps, useJsonFormsControl } from "@jsonforms/vue";
import wrapper from "./wrapper.vue";

import Calendar from 'primevue/calendar';
import { computed, ref } from "vue";
import { Field } from "vee-validate";
import Dropdown from "primevue/dropdown";

const props = defineProps(rendererProps<ControlElement>());

const controler = useJsonFormsControl(props);

const wrapperRef = ref<InstanceType<typeof wrapper> | null>(null);

const value = computed({
	get: () => {
		return wrapperRef.value?.value;
	},
	set: (newValue) => {

		wrapperRef.value?.handleChange(newValue);
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
		<!-- <Field as="select"  v-show="false"
					:placeholder="veeFieldProps.placeholder"
					@input="handleChange" 
					@blur="handleBlur" 
					:disabled
					:name="controler.control.value.path" 
					
					:id="controler.control.value.path"
					
					
					
					>
					<option v-for="option in selectOptions!.options" :key="option.value" :value="option.value"
						:class="option.icon ?? ''">
						<p class="text-red-600">TESTE</p>
						{{ option.label }}
					</option>
				</Field>
			 -->
		
		<Dropdown v-model="value" :options="controler.control.value.schema.enum"
		:optionLabel="controler.control.value.uischema.options!.optionLabel"
		:optionValue="controler.control.value.uischema.options!.optionValue"
		
		/>
			<!-- <template #value="slotProps">

				<div v-if="slotProps.value" class="flex align-items-center">
					<div>{{ slotProps.value.label }}</div>
					<i class="ms-2" :class="slotProps.value.icon ?? ''" </i>
				</div>
				<span v-else>
					{{ slotProps.placeholder }}
				</span>
			</template>
			<template #option="slotProps">
				<div class="flex align-items-center">
					<div>{{ slotProps.option.value }}</div>
					<i class="ms-2" :class="slotProps.option.icon ?? ''" </i>
				</div>
			</template>
		</Dropdown> -->



	</wrapper>
</template>
