import { isBooleanControl, isDateControl, isDateTimeControl, isEnumControl, isLayout, isNumberControl, isStringControl, isTimeControl, JsonFormsRendererRegistryEntry, rankWith } from "@jsonforms/core";
import StringControlador from "./components/controladores/string.vue"
import NumberControlador from "./components/controladores/number.vue"
import 
BoolControlador
from "./components/controladores/bool.vue"
import 
  DateControlador
from "./components/controladores/date.vue";
import 
  TimeControlador
from "./components/controladores/time.vue";
import 
   DateTimeControlador
from "./components/controladores/dateTime.vue";
import 
  EnumControlador
from "./components/controladores/enum.vue";
// import Teste from "./components/teste.vue";
import  LayuotRenderizador from "./components/LayuotRenderizador.vue";
import Grid from "./components/Grid.vue";
const formHandlers =   [
  {
    renderer: EnumControlador,
	tester: rankWith(2, isEnumControl),
  },
  {
    renderer: LayuotRenderizador,
	tester: rankWith(2, isLayout),
  },
  // {
  //   renderer: Teste,
  //   tester: rankWith(1, isStringControl)
  // }
  {
    renderer: DateTimeControlador,
    tester: rankWith(1, isDateTimeControl)
  },
  {
    renderer: StringControlador,
    tester: rankWith(1, isStringControl)
  },
  {
    renderer: NumberControlador,
    tester: rankWith(1, isNumberControl)
  },
  {
    renderer: BoolControlador,
    tester: rankWith(1, isBooleanControl)
  },
  {
    renderer: DateControlador,
    tester: rankWith(2, isDateControl)
  },
  {
    renderer: DateControlador,
    tester: rankWith(1, isDateTimeControl)
  },
  {
    renderer: TimeControlador,
    tester: rankWith(2, isTimeControl)  }
] satisfies JsonFormsRendererRegistryEntry[];

export  {
  formHandlers,
  Grid
}