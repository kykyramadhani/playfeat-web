const paragraphs = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida eleifend mauris, sit amet elementum diam fringilla ut. Aliquam at porttitor est. Curabitur vel mi elit. Nam odio neque, volutpat sit amet urna sed, suscipit molestie magna. Duis ornare, metus a gravida malesuada, justo ante malesuada metus, sit amet vestibulum nibh eros non ligula. Donec augue justo, ullamcorper ac arcu ut, vulputate condimentum nunc. Pellentesque eu tellus non leo laoreet molestie. Suspendisse eu lacus quis tortor volutpat condimentum ut id eros. Fusce aliquam, dolor non feugiat ultrices, eros sapien lacinia nisi, et blandit odio urna sed dolor. In efficitur ultricies felis in facilisis. Sed vel ante sem. Vivamus eu molestie mauris.',
  'Phasellus ipsum risus, pretium nec laoreet in, tincidunt ac sem. Aliquam felis erat, ultrices varius porttitor sit amet, lacinia ut urna. Sed at ipsum est. Pellentesque tristique, nisl sit amet egestas condimentum, augue massa gravida sem, quis placerat enim turpis id ex. Cras sed suscipit erat. Etiam tempus magna a enim mattis, vitae porta leo tincidunt. Mauris vitae varius nulla. Nullam sollicitudin sollicitudin nisl, sed aliquet odio. Integer faucibus elit a nisl fermentum efficitur ac nec odio. Sed viverra, purus sit amet ultrices tincidunt, urna enim tristique erat, ac posuere diam sem id erat. Nunc eu mollis massa. Sed purus justo, mollis vitae placerat eu, tincidunt id enim. Vivamus varius erat dolor.',
]

export default function Privacy() {
  return (
    <main className="px-4 pb-16 pt-[48px]">
      <article className="mx-auto w-full max-w-[650px] rounded-2xl border border-tertiary bg-[rgba(243,240,235,0.38)] px-8 py-6">
        <h1 className="px-2.5 pt-2.5 text-center text-[32px] font-bold text-black">Privacy Policy</h1>
        <p className="px-2.5 pb-2.5 text-center text-sm text-black">Last Update: xx October 2026</p>
        <div className="p-2.5 text-sm leading-6 text-black">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 12)}>{p}</p>
          ))}
        </div>
      </article>
    </main>
  )
}
