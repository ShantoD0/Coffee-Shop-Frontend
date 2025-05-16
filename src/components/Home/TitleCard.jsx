
function TitleCard({title,desc,img}) {
  return (
    <section className="space-y-4">
        <img src={img} alt="" />
        <h3 className="text-black text-4xl">{title}</h3>
        <p className="text-black max-w-80">{desc}</p>
    </section>
  )
}

export default TitleCard