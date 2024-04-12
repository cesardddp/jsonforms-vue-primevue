<script lang="ts" setup>
import type { ControlElement } from "@jsonforms/core";
import { rendererProps, useJsonFormsControl } from "@jsonforms/vue";
import { useField } from "vee-validate";
import wrapper from "./wrapper.vue";

const props = defineProps(rendererProps<ControlElement>());

const controler = useJsonFormsControl(props);

</script>
<template>

	<wrapper :path="controler.control.value.path" :label="controler.control.value.label" v-slot="{
		handleChange,
		handleBlur,
		value
	}">

	<!-- date -->
		<Calendar @date-select="handleChange" dateFormat="dd/mm/yy" type="date" :id="controler.control.value.path"
			:name="controler.control.value.path" :model-value="value as Date" />



	</wrapper>
</template>
