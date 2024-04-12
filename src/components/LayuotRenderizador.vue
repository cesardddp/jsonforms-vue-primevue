<script lang="ts">
import { isLayout, rankWith } from "@jsonforms/core";
import type { JsonFormsRendererRegistryEntry, Layout } from "@jsonforms/core";
import { defineComponent } from "vue";
import {
	DispatchRenderer,
	rendererProps,
	useJsonFormsLayout,
} from "@jsonforms/vue";
import { computed } from "vue";

const LayuotRenderizador = defineComponent({
	name: "LayuotRenderizador",
	components: {
		DispatchRenderer,
	},
	props: {
		...rendererProps<Layout>(),
	},
	setup(props) {
		return useJsonFormsLayout(props);
	},
	computed: {
		sortedElements() {
			return (this.layout.uischema as any).elements
				.sort(
					(a: any, b: any) => (
						(Number(a.options?.order ?? 0))
							> (Number(b.options?.order ?? 0)) ? 1 : -1))
		},
	},
});

export default LayuotRenderizador;

// export const entry: JsonFormsRendererRegistryEntry = {
// 	renderer: LayuotRenderizador,
// 	tester: rankWith(2, isLayout),
// };
</script>

<template>

	<div v-for="(element, index) in sortedElements" v-bind:key="`${layout.path}-${index}`" class="mb-3">
		<!-- {{ element.options.order }} -->
		<DispatchRenderer v-bind:schema="layout.schema" v-bind:uischema="element" v-bind:path="layout.path"
			v-bind:enabled="layout.enabled" v-bind:renderers="layout.renderers" v-bind:cells="layout.cells" />
	</div>
</template>
