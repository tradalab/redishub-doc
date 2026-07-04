import {getDictionary} from "../../../../dictionaries"
import {DownloadClient} from "./download-client"

export default async function Page({params}: { params: Promise<{ lang: string }> }) {
  const {lang} = await params
  const dict = (await getDictionary(lang)).download
  return <DownloadClient dict={dict} />
}
