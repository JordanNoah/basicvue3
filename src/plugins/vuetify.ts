/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VStepperVertical,VStepperVerticalActions,VStepperVerticalItem } from 'vuetify/labs/VStepperVertical'
import { VDateInput } from 'vuetify/labs/VDateInput'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          backgroundLogin: '#eff5fe',
          backgroundSection1: '#f7f9fc',
          backgroundSection2: '#ffffff',
        }
      },
    },
  },
  components: {
    ...components,
    VStepperVertical,
    VStepperVerticalActions,
    VStepperVerticalItem,
    VDateInput
  },
  directives,
})
