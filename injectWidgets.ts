import { World } from "@xrengine/engine/src/ecs/classes/World"
import { addComponent, getComponent } from "@xrengine/engine/src/ecs/functions/ComponentFunctions"
import { PersistTagComponent } from "@xrengine/engine/src/scene/components/PersistTagComponent"
import { XRUIComponent } from "@xrengine/engine/src/xrui/components/XRUIComponent"
import { registerWidget, Widgets } from "@xrengine/engine/src/xrui/Widgets"
import { ObjectFitFunctions } from '@xrengine/engine/src/xrui/functions/ObjectFitFunctions'
import { createWidgetIframe } from "./widgetIfframe"
import LinkIcon from '@mui/icons-material/Link'


export default async function injectWidgets(world: World) {
  const ui = createWidgetIframe()

  addComponent(ui.entity, PersistTagComponent, {})

  ui.container.then(() => {
    // const xrui = getComponent(ui.entity, XRUIComponent)
    // ObjectFitFunctions.setUIVisible(xrui.container, false)
  })

  Widgets.registerWidget(world, ui.entity, {
    ui,
    label: 'hApp',
    icon: LinkIcon,
    system: () => {}
  })

  
  console.log('inject widgets')
  // const iframe = document.createElement('iframe');
  // const html = '<body>Foo</body>';
  // document.body.appendChild(iframe);
  // iframe.contentWindow!.document.open();
  // iframe.contentWindow!.document.write(html);
  // iframe.contentWindow!.document.close();
  // registerWidget(world, )
}