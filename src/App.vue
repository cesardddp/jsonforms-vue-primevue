<template>

    <div class="flex border">
        <!-- se possui id, é edit mode, logo espere por initial-value(data) -->
        <Form @submit="submit" :initial-values="dados" v-slot="{ controlledValues, values }">
            <div class="flex flex-col justify-evenly items-center w-full mt-4 gap-3 ">

                <json-forms v-if="schema" :data="values" :renderers="renderers" :schema="schema" :uischema="uischema" />

                <pre>{{ values }}</pre>
            </div>
        </Form>
    </div>


    {{ dados }}

</template>
<script setup lang="ts">

import { formHandlers } from "./index";

import { JsonFormsRendererRegistryEntry } from "@jsonforms/core";
import { JsonForms } from "@jsonforms/vue";
// import {r


import { Form } from "vee-validate";
import { ref } from "vue";



// import { vanillaRenderers } from "@jsonforms/vue-vanilla";
// import {r





const dados = ref()


function submit(formData: any) {
    console.log(formData);
}

//  "enum": { "type": "string", "enum": [ { "id": "2d6e60f6-7df9-4239-9b78-7c0753c27225", "value": "eeetre" } ] } } }


const schema = {
    "properties": {
        "enum": {
            "type": "string",
            "enum": [{ "id": "2d6e60f6-7df9-4239-9b78-7c0753c27225", "label": "eeetre" }],
            
        },
        "datetime": {
            "format": "date-time",
            "options": {
                "order": "0"
            },
            "step": 0.1,
            "type": "string",
            "title": "datetime",
            "required": [
                "false"
            ]
        },
        // "date": {
        //     "format": "date",
        //     "options": {
        //         "order": "5"
        //     },
        //     "step": 0.1,
        //     "type": "string",
        //     "title": "date",
        //     "required": [
        //         "false"
        //     ]
        // },
        "string": {
            "options": {
                "order": "0"
            },
            "step": 0.1,
            "type": "string",
            "title": "string",
            "required": [
                "false"
            ]
        },
        "bool": {
            "options": {
                "order": "4"
            },
            "step": 0.1,
            "type": "boolean",
            "title": "bool",
            "required": [
                "false"
            ]
        },
        // "time": {
        //     "format": "time",
        //     "options": {
        //         "order": "4"
        //     },
        //     "step": 0.1,
        //     "type": "string",
        //     "title": "time",
        //     "required": [
        //         "false"
        //     ]
        // },
        "float": {
            "options": {
                "order": "3"
            },
            "step": 0.1,
            "type": "number",
            "title": "float",
            "required": [
                "false"
            ]
        },
        "int": {
            "options": {
                "order": "1"
            },
            "step": 0.1,
            "type": "number",
            "title": "int",
            "required": [
                "false"
            ]
        }
    }
}
const uischema = {
    "type": "HorizontalLayout",
    "elements": [
        {
            "type": "Control",
            "scope": "#/properties/enum",
            "required": [
                "false"
            ],
            "options": {
                "optionLabel":"label",
                "optionValue":"id",
            },
        },
        {
        },
        {
            "type": "Control",
            "scope": "#/properties/date-time",
            "required": [
                "false"
            ],
            "options": {
                "format": "date-time",
                "showTime": true,
                "dateTimeFormat": 'dd/mm/yy',
                "timeFormat": "HH:mm:ss",
                "timeOnly": false,
                "ampm": false
            }
        },
        {
            "type": "Control",
            "scope": "#/properties/string",
            "required": [
                "false"
            ]
        },
        {
            "type": "Control",
            "scope": "#/properties/bool",
            "required": [
                "false"
            ]
        },
        // {
        //     "type": "Control",
        //     "scope": "#/properties/time",
        //     "required": [
        //         "false"
        //     ],
        //     "options": {
        //         "format": "time"
        //     }
        // },
        {
            "type": "Control",
            "scope": "#/properties/float",
            "required": [
                "false"
            ]
        },
        {
            "type": "Control",
            "scope": "#/properties/int",
            "required": [
                "false"
            ]
        }
    ]
}

const renderers_raw: JsonFormsRendererRegistryEntry[] = [
    ...formHandlers,
    // ...vanillaRenderers,
];

const renderers = Object.freeze(renderers_raw);
</script>