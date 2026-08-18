import React from 'react'
import {Studio as SanityStudio} from 'sanity'
import config from '../sanity.config'

export function Studio() {
  // The Sanity Studio component expects a config object; in this embedded
  // usage we pass the same config used by the standalone studio.
  // Note: This pattern requires bundling @sanity packages into the Next app
  return <SanityStudio config={config} />
}
