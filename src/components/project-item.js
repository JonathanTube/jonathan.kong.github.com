import React from "react"

const ColorDiv = ({ techStack }) => {
  return techStack.map((item) => {
    let clazzName = "text-sm px-2 rounded text-white"
    if (item === "react") {
      clazzName += " bg-yellow-500"
    } else if (item === "vue") {
      clazzName += " bg-blue-500"
    } else if (item === "uniapp") {
      clazzName += " bg-green-500"
    } else if (item === "vuex") {
      clazzName += " bg-pink-500"
    } else if (item === "vue3") {
      clazzName += " bg-red-500"
    } else if (item === "tailwindcss") {
      clazzName += " bg-orange-500"
    } else if (item === "nextjs") {
      clazzName += " bg-purple-500"
    } else if (item === "ant design") {
      clazzName += " bg-amber-800"
    } else if (item === "java") {
      clazzName += " bg-lime-800"
    } else if (item === "ElementUI") {
      clazzName += " bg-cyan-800"
    }
    return <div className={clazzName}>{item}</div>
  })
}

export default function ProjectItem({
  id,
  title,
  image,
  summary,
  url,
  createDate,
  techStack
}) {
  return (
    <div className="md:rounded hover:bg-blue-50 md:bg-white py-4 px-6 border border-collapse flex md:h-52">
      <div className="max-w-40 max-h-40 overflow-hidden">
        <img src={image} alt={title} className="mt-2 aspect-auto" />
      </div>
      <div className="flex flex-col justify-between h-full ml-5">
        <p className="font-semibold md:text-xl">
          <a href={`/blog/projects/${id}`}>{title}</a>
        </p>
        <div className="flex gap-2">
          <ColorDiv techStack={techStack} />
        </div>
        <p className="text-gray-600">{summary}</p>
        <div className="md:flex items-center justify-between mt-4">
          <a href={url}>{url}</a>
          <time className="italic block text-right mt-5 md:mt-auto">
            Released Date：{createDate}
          </time>
        </div>
      </div>
    </div>
  )
}
