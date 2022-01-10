import React from "react"
import Link from "next/link"
import NextImage from "./image"
import TimeAgo from "javascript-time-ago"
import ru from "javascript-time-ago/locale/ru.json"
TimeAgo.addDefaultLocale(ru)

const timeAgo = new TimeAgo('ru')

const Card = ({article}) => {
  const time = article.attributes.publishedAt
  return (
    <div className="p-5 rounded overflow-hidden bg-white hover:drop-shadow-xl">
      <ul className="flex">
        <li className="mr-5">
          <a href={`/category/${article.attributes.category.data.attributes.slug}`} className="text-black font-medium">
            {article.attributes.category.data.attributes.name}
          </a>
        </li>
        <li className="mr-5">
          <a href={`/category/${article.attributes.category.data.attributes.slug}`} className="text-black font-medium">
            {article.attributes.author.data.attributes.name}
          </a>
        </li>
        <li>
          <a href={`/article/${article.attributes.slug}`} className="text-black">
            {timeAgo.format(new Date(time))}
          </a>
        </li>
      </ul>
      <Link href={`/article/${article.attributes.slug}`}>
        <a className="uk-link-reset">
          <p id="category" className="uk-text-uppercase">
            {article.attributes.category.name}
          </p>
          <p id="title" className="text-xl text-black font-medium">
            {article.attributes.title}
          </p>
          <p id="description" className="mt-2 text-black">
            {article.attributes.description}

          </p>
          <div className="uk-card-media-top">
            <NextImage image={article.attributes.image}/>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Card
