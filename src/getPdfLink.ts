import axios from 'axios'
import { URLSearchParams } from 'url'
import { JSDOM } from 'jsdom'
import { sanitize } from './url'

const SCIHUB_URL = 'https://sci-hub.hkvisa.net/'

const _getPdfUrlFromDocument = (doc: Document) => {
  let element =
    doc.querySelector('#article iframe') || doc.querySelector('#article embed')
  if (!element) {
    throw new Error("Couldn't find a PDF link in the SciHub page")
  }
  return element.getAttribute('src') || ''
}

export default async function getPdfLink(articleUrl: string) {
  const params = new URLSearchParams({ request: articleUrl })
  const response = await axios.post(`${SCIHUB_URL}`, params.toString())

  const {
    window: { document },
  } = new JSDOM(response.data)

  try {
    return sanitize(_getPdfUrlFromDocument(document))
  } catch {
    return null
  }
}
