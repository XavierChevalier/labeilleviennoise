import { App } from '@vue/runtime-core'
import { createRouter, createWebHistory } from 'vue-router'
import * as ElementPlusPlugin from '@/plugins/element-plus'
import { BASE_URL } from '@/shared/environments/environment-variables'

export interface MountResult<R> {
  result: R
  unmount: () => void
}

export interface MountOptions {
  provider?: () => void
}

const installPlugins = (app: App) => {
  app.use(
    createRouter({
      history: createWebHistory(BASE_URL),
      routes: [
        {
          path: '/',
          name: 'home',
          component: defineComponent({
            name: 'HomePage',
            render: () => h('div', 'Home'),
          }),
        },
      ],
    })
  )
  ElementPlusPlugin.install(app)
}

export function mountComposable<R>(
  composable: () => R,
  options: MountOptions = {}
): MountResult<R> {
  const App = {
    setup() {
      options.provider?.()
    },
    render() {
      return h(Child, { ref: 'child' })
    },
  }

  const Child = {
    setup() {
      const result = composable()
      const wrapper = () => result
      return { wrapper }
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render() {},
  }

  const root = document.createElement('div')
  const app = createApp(App)
  installPlugins(app)
  const vm = app.mount(root)

  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    result: (vm.$refs.child as any).wrapper(),
    unmount: () => app.unmount(),
  }
}
