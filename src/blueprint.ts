/*!
# code-editor

Information about the `<code-editor>` component blueprint.
*/

import type { XinBlueprint, PartsMap } from 'xinjs'
import { compareSemanticVersion } from './compare-semantic-version'

// v0.8.5 required for async blueprints
const REQUIRED_VERSION = '0.8.5'

const ACE_BASE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.23.2/'
const DEFAULT_THEME = 'ace/theme/tomorrow'

export const blueprint: XinBlueprint = async (tag, factory) => {
  const { Component, elements, version } = factory
  const { slot } = elements

  const scriptTag = (url: string): Promise<any> => {
    return new Promise((resolve) => {
      const tag = elements.script({ src: url })
      tag.onload = () => resolve(globalThis as any)
      document.head.append(tag)
    })
  }

  const { ace } = await scriptTag(`${ACE_BASE_URL}ace.min.js`)

  if (compareSemanticVersion(REQUIRED_VERSION, version) < 0) {
    throw new Error(`blueprint requires xinjs ${REQUIRED_VERSION}`)
  }

  class WebComponent extends Component {
    source = ''
    theme = DEFAULT_THEME
    mode = 'javascript'
    _options = {} as { [key: string]: any }
    editor = null as any

    constructor() {
      super()

      this.initAttributes('source', 'theme', 'mode')
    }

    static styleSpec = {
      ':host': {
        display: 'block',
        minHeight: '100px',
      },
    }

    content = () => slot()

    connectedCallback() {
      super.connectedCallback()

      if (!this.source) {
        this.source = (this.innerHTML || '').trim() + '\n'
      }

      this.editor = ace.edit(this, {
        mode: `ace/mode/${this.mode}`,
        tabSize: 2,
        useSoftTabs: true,
        useWorker: false,
        ...this.options,
      })
      this.editor.setValue(this.source)
      this.editor.clearSelection()
      this.editor.session.getUndoManager().reset()
    }

    role = 'textbox'

    render() {
      this.editor.setTheme(this.theme)
    }
  }

  return {
    type: WebComponent as typeof Component,
  }
}

export default blueprint
