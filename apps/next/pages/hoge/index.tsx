import { HogeScreen } from 'app/features/hoge/screen'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Hoge</title>
      </Head>
      <HogeScreen />
    </>
  )
}
