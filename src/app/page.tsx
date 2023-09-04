import { FadeIn } from '@/components/FadeIn'

export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">

      <section className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
        <FadeIn>
          <h1 className="text-6xl font-black uppercase select-none text-gray-50">
            En memoria de
            <span className="block text-[139px] leading-[95px]">Isabel </span>
            <span className="block text-[88px] ">Da Paixao</span>
          </h1>
        </FadeIn>
      </section>
    </main>
  )
}
