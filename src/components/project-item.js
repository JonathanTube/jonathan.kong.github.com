import React from "react"
export default function ProjectItem({
  id,
  title,
  image,
  summary,
  url,
  createDate
}) {
  return (
    <div className="md:rounded hover:bg-blue-50 md:bg-white flex py-8 px-6 border border-collapse md:h-52">
      <div className="max-w-40 max-h-40 overflow-hidden">
        <img src={image} alt={title} className="mt-2 aspect-auto" />
      </div>
      <div className="flex flex-col justify-between h-full ml-5">
        <p className="font-semibold md:text-xl">
          <a href="/docs/projects/1.md">{title}</a>
        </p>
        <p className="text-gray-600 mt-4">{summary}</p>
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
