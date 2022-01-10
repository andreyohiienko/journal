import React from "react"
import Card from "./card"

const Articles = ({articles}) => {
  return (
    <div className="grid grid-cols-1">
      {articles.map((article, i) => (
        <Card
          article={article}
          key={`article__${article.attributes.slug}`}
        />
      ))}
    </div>
  )
}

export default Articles
