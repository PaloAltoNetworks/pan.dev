import React, { useEffect, useState } from 'react'
import Link from '@docusaurus/Link'
import './Card.scss'

function Card({ cta, description, image, title, type, links, releaseTagUrl }) {
  const [latestTag, setLatestTag] = useState('');

  useEffect(async () => {
    const response = await fetch(releaseTagUrl);
    const data = await response.json();
    setLatestTag(data[0].name);
  }, [])

  const CardFooterCTA = ({ cta }) => {
    const { content, type } = cta

    if (type === 'single') {
      if (content.logoSrc) {
        return (
          <Link className="card-cta__single-link" to={content.link}>
            <img className="card-cta__logo" src={content.logoSrc} alt={content.logoAlt} />
          </Link>
        )
      }

      return (
        <Link className="card-cta__single-link" to={content.link}>
          {content.text}
        </Link>
      )
    }

    if (type == 'double') {
      return (
        <div className="card-cta-container">
          {content.map(ctaInfo => {
            if (ctaInfo.logoSrc) {
              return (
                <Link
                  className="card-cta__logo-link"
                  to={ctaInfo.link}
                >
                  <img className="card-cta__logo" src={ctaInfo.logoSrc} />
                </Link>
              )
            } else {
              return (
                <Link className="card-cta__docs-link" to={ctaInfo.link}>
                  <span className="card-cta__text">{ctaInfo.text}</span>
                  <img src='/img/icons/arrow-forward.svg' alt="Forward arrow icon" />
                </Link>
              )
            }
          })}
        </div>
      )
    }
  }

  const ImageCard = ({ cta, description, image, title }) => {
    return (
      <div class="image-card-container">
        <div class="image-card__image">
          <img src={image.src} alt={image.alt} />
        </div>
        <div class="image-card__body">
          <h4>{title}</h4>
          <p>{description}</p>
          <CardFooterCTA cta={cta} />
        </div>
      </div>
    )
  }

  const InfoCard = ({ cta, description, title }) => {
    return (
      <div class="info-card-container">
        <div class="info-card__body">
          <h3>
            {title}
            {latestTag && <span className="latest-tag">{latestTag}</span>}
          </h3>
          <p>{description}</p>
          <CardFooterCTA cta={cta} />
        </div>
      </div>
    )
  }

  const LinkCard = ({ cta, links, title }) => {
    return (
      <div class="link-card-container">
        <div class="link-card__body">
          <h3>{title}</h3>
          <ul class="link-card__list">
            {links.map(link => <li><Link to={link.path}>{link.text}</Link></li>)}
          </ul>
          <CardFooterCTA cta={cta} />
        </div>
      </div>
    )
  }

  const renderCard = () => {
    if (type === "imageCard") {
      return (
        <ImageCard
          cta={cta}
          description={description}
          image={image}
          title={title}
        />
      )
    } else if (type === "linkCard") {
      return (
        <LinkCard title={title} links={links} cta={cta} />
      )
    } else {
      return <InfoCard cta={cta} description={description} title={title} />
    }
  }

  return (
    <>{renderCard()}</>
  )
}

export default Card