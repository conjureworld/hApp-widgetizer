import { createState } from '@xrengine/hyperflux/functions/StateFunctions'
import { createXRUI } from '@xrengine/engine/src/xrui/functions/createXRUI'
import React from 'react'

export function createWidgetIframe() {
  return createXRUI(WidgetIframe, createWidgetIframeState())
}

function createWidgetIframeState() {
  return createState({})
}

export const WidgetIframe = () => {
  return (
    <iframe
      xr-layer="true"
      style={{ width: '100%', height: '100%' }}
      src={`/projects/hApp-widgitizer/dist/index.html`}
    />
  )
}